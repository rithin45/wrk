import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useFormInputValidation } from 'react-form-input-validation';
const Login = () => {
    // var[valueinput,setvalue]=useState();
    // const cap_value=(e)=>{
    //     setvalue(valueinput=(e.target.value))
    //     console.log(valueinput)
    // }
    const[fields,errors,form]=useFormInputValidation({
        emailaddress:"",
        password:""
    },{
     emailaddress:"required|email",
     password:"required"
    })
  return (
    <div>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
        value={fields.emailaddress}
        onBlur={form.handleBlurEvent}
        onChange={form.handleChangeEvent}
       
        name="emailaddress"
        label='email'
          id="standard-error"
          helperText={errors.emailaddress?errors.emailaddress:""}
        //   defaultValue="Hello World"
          
          variant="outlined"
        />
        <TextField
         value={fields.password}
         onBlur={form.handleBlurEvent}
         onChange={form.handleChangeEvent}
          name='password'
          label='password'
          helperText={errors.password?errors.password:""}
        //   defaultValue="Hello World"
          id="standard-error-helper-text"
          
        //   helperText="Incorrect entry."
          variant="outlined"
        />
      </div>
    </Box>
    </div>
  )
}

export default Login
