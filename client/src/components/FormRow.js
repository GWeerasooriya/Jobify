import React from 'react'

const FormRow = ({type,name,value,handlechange,lableText}) => {
  return (
    <div className="form-row">
            {/* Name  */}
            <lable htmlFor={name} className = 'form-lable'>
            {lableText || name}
            </lable>

            <input type={type} 
            value={value} 
            name={name}
            onChange={handlechange}
            className="form-input"
            /> 
      
    </div>
  )
}

export default FormRow
