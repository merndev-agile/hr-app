import React from 'react';
import * as Yup from "yup";
import Signup from '../../Component/Signup/signup';

//  export const signUpSchema = Yup.object({
//         companyName:Yup.string().required(),
//         userEmail:Yup.string().email("Email is invalid").required("Please enter user Email"),
//         password:Yup.string().min(6,"Password at least must be 6 characters").required("Please enter your Password"),
//         file:Yup.string().required("Please enter Company image"),
//         role:Yup.string().required("Please enter your Role"),
//  })


const signUpSchema = Yup.object({
       companyName: Yup.string().required(),
       userEmail: Yup.string().email("Email is invalid").required("Please enter user Email"),
       password: Yup.string().min(6, "Password at least must be 6 characters").required("Please enter your Password"),
       file: Yup.string().required("Please enter Company image"),
})
function SignupPage() {
       return (
              <div>
                     <Signup />
              </div>
       )
}
export { signUpSchema, SignupPage }


