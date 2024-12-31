import { useState,useEffect } from "react"
import { Logo,FormRow } from "../components"
import Wrapper from "../assets/wrappers/RegisterPage"

const initialState = {
    name :'',
    email : '',
    password : '',
    isMember : true,
}

const Register = () => {

    const [values,setValues] = useState(initialState)
    //globle state and useNavigate

    const handlechange = (e) => {
        console.log(e.target)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(e.target)
    }

  return (
    <Wrapper className="full-page">
        <form className="form" onSubmit={onSubmit}>
        <Logo/>
        <h3>Login </h3>
        {/*Name*/}
        <FormRow 
        type="text" 
        name="name" 
        value={values.name} 
        handlechange={handlechange} 
        />
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

<FormRow 
        type="passowrd" 
        name="passowrd" 
        value={values.passowrd} 
        handlechange={handlechange} 
        />
           
        <button type="submit" className="btn btn-block">submit</button>
        </form>
       
    </Wrapper>
  )
}

export default Register
