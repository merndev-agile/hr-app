import React, { useState } from 'react';
import Login from '../../Component/Login/index'
import * as Yup from "yup";

//-----------------------------------------------------------------here we use YUP for validation of SignIn---------------------------------
  const signInSchema = Yup.object({
        userEmail:Yup.string().email("Email is invalid").required("Please enter user Email"),
        password:Yup.string().min(6,"Password at least must be 6 characters").required("Please enter your Password"),
    })
  function  LoginPage({isAuth, setAuth}){
    console.log(isAuth, ':::::::', setAuth)
    return(
        <div>
            <Login isAuth={isAuth} setAuth={setAuth}/>
        </div>
    )
  }
  export {signInSchema,LoginPage}
    



 


