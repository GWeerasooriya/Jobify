import React, { useState, useEffect } from 'react'
import {Logo} from '../components'
import wrapper from '../assets/wrapper/Register'

const initialState = {
  name : '',
  email :  '',
  password : '',
  isMember : true,
}

const Register = () => {

  const [values,setValues] = useState(initialState)
  // Globle state and useNavigate

  const handleChange = (e) =>{
    console.log(e.target)
  }
  return (
    <h1>
      Register
    </h1>
  )
}

export default Register
