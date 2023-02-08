import React from 'react';
import * as Yup from "yup";
import EmployeeDetails from '../../Component/SidebarOptions/Employee/index';




const personalInfoSchema = Yup.object({
       name: Yup.string().required(),
       email: Yup.string().email("Email is invalid").required("Please enter user Email"),
       mobileNumber: Yup.string().min(6, "Password at least must be 6 characters").required("Please enter your Password"),
       fatherName: Yup.string().required("Please enter your father's name"),
       address: Yup.string().required("Please enter Company image"),
       desiganation: Yup.string().required("Please enter Company image"),
       age: Yup.number().required("Please enter Company image"),
       dob: Yup.date().required("Please enter Company image"),



})
const educationalInfoSchema = Yup.object({
       highschool: Yup.date().required(),
       intermediate: Yup.date().required("Please enter user Email"),
       bachelor: Yup.date().required("Please enter your Password"),
       master: Yup.date().required("Please enter your father's name"),
   
})
const designationInfoSchema = Yup.object({
       
       appointment: Yup.date().required("Please enter your Password"),
       department: Yup.string().required("Please enter your father's name"),
   
})

function EmployeePage() {
       return (
              <div>
                     <EmployeeDetails />
              </div>
       )
}
export { personalInfoSchema, EmployeePage ,educationalInfoSchema,designationInfoSchema}


