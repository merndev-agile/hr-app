import React from 'react';
import * as Yup from "yup";
import EmployeeDetails from '../../Component/SidebarOptions/Employee/index';




const personalInfoSchema = Yup.object({
       name: Yup.string().required(),
       email: Yup.string().email("Email is invalid").required("Please enter user Email"),
       mobileNumber: Yup.string().min(6, "mobile number at least must be 10 digits").required("Please enter your mobile number"),
       fatherName: Yup.string().required("Please enter your father's name"),
       address: Yup.string().required("Please enter your address"),
       desiganation: Yup.string().required("Please enter your designation"),
       age: Yup.number().required("Please enter your age"),
       dob: Yup.date().required("Please enter your date of birth"),



})
const educationalInfoSchema = Yup.object({
       highschool: Yup.date().required()("Please enter your highschool passing year"),
       intermediate: Yup.date().required("Please enter your intermediate passing year"),
       bachelor: Yup.date().required("Please enter your bachelor degree passing year"),
       master: Yup.date().required("Please enter your Master degree  passing year"),

})
const designationInfoSchema = Yup.object({

       appointment: Yup.date().required("Please enter your appointment year"),
       department: Yup.string().required("Please enter your department name"),

})

function EmployeePage() {
       return (
              <div>
                     <EmployeeDetails />
              </div>
       )
}
export { personalInfoSchema, EmployeePage, educationalInfoSchema, designationInfoSchema }


