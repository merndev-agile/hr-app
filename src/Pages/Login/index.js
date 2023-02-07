import React, { useState } from 'react';
import Login from '../../Component/Login/index'

// function LoginPage(){
   
//    function validate(credential) {
//       console.log("LoginPageCredential",credential)
//       const regexEmail = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/i;
//       const regexPassword = /^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$/i;
//       let error = {};
//       if (!credential.email) {
//           error.email = "email is required!"
//       }
//       else if (!regexEmail.test(credential.email)) {

//           error.email = "email is invalid!"
//       } else {
//           error.email = ""
//       }
//       if (!credential.password) {
//           error.password = "password is required!"

//       } else if (!regexPassword.test(credential.password)) {
//           error.password = "password is invalid!"
//       } else {
//           error.password = ""
//       }
//       return (error);


//   }
//    return(
//     <div><Login validate={validate}/></div>
//    )

// }
// export default LoginPage;


//------------------------------------------------------------------Yup---------------------------------

import * as Yup from "yup";


  const signInSchema = Yup.object({
        userEmail:Yup.string().email("Email is invalid").required("Please enter user Email"),
        password:Yup.string().min(6,"Password at least must be 6 characters").required("Please enter your Password"),
    })
  function  LoginPage(){
    return(
        <div>
            <Login/>
        </div>
    )
  }
  export {signInSchema,LoginPage}
    



 


