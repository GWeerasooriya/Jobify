import { useState,useEffect } from "react"
import { Logo,FormRow,Alert} from "../components"
import Wrapper from "../assets/wrappers/RegisterPage"
import { useAppContext } from "../context/appContext"

const initialState = {
    name :'',
    email : '',
    password : '',
    isMember : true,
}

const Register = () => {

    const [values,setValues] = useState(initialState)
    //globle state and useNavigate
    const {isLoading, showAlert, displayAlert} = useAppContext()

    const toggleMember = () => {
        setValues({...values,isMember : !values.isMember})
    }

    const handlechange = (e) => {
        setValues({...values,[e.target.name] : e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault() 
        const {name,email,password, isMember} = values
        if (!email || !password || (isMember && !name)) {
            displayAlert()
            return
        }
        console.log(values)
    }

  return (
    <Wrapper className="full-page">
        <form className="form" onSubmit={onSubmit}>
        <Logo/>
        <h3>{values.isMember ? 'Login': 'Register'} </h3>
        {showAlert && <Alert/>}
        {/*Name*/}
        {!values.isMember &&
         <FormRow 
         type="text" 
         name="name" 
         value={values.name} 
         handlechange={handlechange} 
         />}
       
          {/*email*/}
        <FormRow 
        type="email" 
        name="email" 
        value={values.email} 
        handlechange={handlechange} 
        />
              {/*passowrd*/}
        <FormRow 
        type="passowrd" 
        name="passowrd" 
        value={values.passowrd} 
        handlechange={handlechange} 
        />
           
        <button type="submit" className="btn btn-block">submit</button>
        <p>
            {values.isMember ? 'Not a member yet?' : 'Already a member?'}
            <button type="button" onClick={toggleMember} className="member-btn">
                {values.isMember ? 'Register' : 'Login'}
            </button>
        </p>
        </form>
       
    </Wrapper>
  )
}

export default Register
