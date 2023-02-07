import * as React from 'react';
// import './index.css';
import './style.css'
import { createEmployeeCollection } from '../../firebase';
import SideBar from '../../Menu/sideBar';
// import { useLocation } from 'react-router-dom';
import { useOutletContext } from "react-router-dom";
import EducationalInfo from './educationalInfo';
import PersonalInfo from './personalInfo';
import Designation from './designation';
import Button from '../../generic/Button';
import { Grid, Paper } from '@material-ui/core';

export default function EmployeeDetails(props) {
    // const { containerState}=useLocation();
    const [containerState] = useOutletContext();
    const [page,setPage]=React.useState(0);
    const [employeeInformation, setEmployeeInformation] = React.useState({
        personalInfo: {},
        educationalInfo: {},
        designation: {},
        uid: containerState.uid
    });
    const formHeading=["Personal Information","Educational Information","Designation"];
    const PageDisplay=()=>{
        console.log("pageDisplay")
        if(page==0){
            console.log("000")
            return <PersonalInfo  employeeInformation={employeeInformation} setEmployeeInformation={setEmployeeInformation}/>
        }else if(page==1){
            return <EducationalInfo employeeInformation={employeeInformation} setEmployeeInformation={setEmployeeInformation}/>
        }else{
            return <Designation employeeInformation={employeeInformation} setEmployeeInformation={setEmployeeInformation}/>
        }
    }
    //    console.log("empUidOutlet---",employeeInformation.uid)
       const handleFormSubmit=()=>{    
        // e.preventDefault();
        console.log("handleFormSubmit",employeeInformation);
        setEmployeeInformation((prevState)=>({...prevState,uid: containerState.uid}));
        let obj={...employeeInformation};
        console.log("obj",obj)
        createEmployeeCollection(obj)
        setEmployeeInformation({})
       }

    return (
        // <div className='main-employeeDetails'>
        //     {/* <SideBar/> */}
        //     <div className='sub-employeeDetails'>
        //         {/* <h1 className='heading'>Employee Details Form</h1> */}
        //         <div className='employeeDetails-form'>
        //             <form >
        //                 <h3>Personal Information</h3>
        //                 <div>
        //                     <div className='input-div'>
        //                         <label>Name: </label>
        //                         <input className='input-field' type='text' onChange={(e)=>setEmployeeInformation((prevState)=>({...prevState,personalInfo:{...prevState.personalInfo,name:e.target.value}}))} />
        //                     </div>
        //                     <div className='input-div'>
        //                         <label>Gender </label>
        //                         <input className='input-field' type='text' onChange={(e)=>setEmployeeInformation((prevState)=>({...prevState,personalInfo:{...prevState.personalInfo,gender:e.target.value}}))} />
        //                     </div>
        //                     <div className='input-div'>
        //                         <label>email: </label>
        //                         <input className='input-field' type='email' onChange={(e)=>setEmployeeInformation((prevState)=>({...prevState,personalInfo:{...prevState.personalInfo,email:e.target.value}}))} />
        //                     </div>
        //                     <div className='input-div'>
        //                         <label>mobile number: </label>
        //                         <input className='input-field' type='number' onChange={(e)=>setEmployeeInformation((prevState)=>({...prevState,personalInfo:{...prevState.personalInfo,mobileNumber:e.target.value}}))} />
        //                     </div>
        //                     <div className='input-div'>
        //                         <label>father's name: </label>
        //                         <input className='input-field' type='text' onChange={(e)=>setEmployeeInformation((prevState)=>({...prevState,personalInfo:{...prevState.personalInfo,fatherName:e.target.value}}))} />
        //                     </div>
        //                     <div className='input-div'>
        //                         <label>Address: </label>
        //                         <input className='input-field' type='text' onChange={(e)=>setEmployeeInformation((prevState)=>({...prevState,personalInfo:{...prevState.personalInfo,address:e.target.value}}))} />
        //                     </div>
        //                     <div className='input-div'>
        //                         <label>desiganation: </label>
        //                         <input className='input-field' type='text' onChange={(e)=>setEmployeeInformation((prevState)=>({...prevState,personalInfo:{...prevState.personalInfo,designation:e.target.value}}))} />
        //                     </div>
        //                     <div className='input-div'>
        //                         <label>age: </label>
        //                         <input className='input-field' type='text' onChange={(e)=>setEmployeeInformation((prevState)=>({...prevState,personalInfo:{...prevState.personalInfo,age:e.target.value}}))} />
        //                     </div>
        //                     <div className='input-div'>
        //                         <label>date of birth: </label>
        //                         <input className='input-field' type='date' onChange={(e)=>setEmployeeInformation((prevState)=>({...prevState,personalInfo:{...prevState.personalInfo,dateOfBirth:e.target.value}}))} />
        //                     </div>

        //                 </div>
        //                 <h3>Educational Details</h3>
        //                 <div>
        //                     <div className='input-div'>
        //                         <label>10th: </label>
        //                         <input className='input-field' type='date' onChange={(e)=>setEmployeeInformation((prevState)=>({...prevState,educationalInfo:{...prevState.educationalInfo,'10th':e.target.value}}))} />
        //                     </div>
        //                     <div className='input-div'>
        //                         <label>12th: </label>
        //                         <input className='input-field' type='date' onChange={(e)=>setEmployeeInformation((prevState)=>({...prevState,educationalInfo:{...prevState.educationalInfo,'12th':e.target.value}}))} />
        //                     </div>
        //                     <div className='input-div'>
        //                         <label>bachelor's Degree: </label>
        //                         <input className='input-field' type='date' onChange={(e)=>setEmployeeInformation((prevState)=>({...prevState,educationalInfo:{...prevState.educationalInfo,bachelor:e.target.value}}))} />
        //                     </div>
        //                     <div className='input-div'>
        //                         <label>master's degree: </label>
        //                         <input className='input-field' type='date' onChange={(e)=>setEmployeeInformation((prevState)=>({...prevState,educationalInfo:{...prevState.educationalInfo,master:e.target.value}}))} />
        //                     </div>
        //                 </div>
        //                 <h3>Designation</h3>
        //                 <div>
        //                 <div className='input-div'>
        //                         <label>Date of appointment: </label>
        //                         <input className='input-field' type='date' onChange={(e)=>setEmployeeInformation((prevState)=>({...prevState,designation:{...prevState.designation,appointment:e.target.value}}))} />
        //                     </div>
        //                     <div className='input-div'>
        //                         <label>Department in which posted: </label>
        //                         <input className='input-field' type='text' onChange={(e)=>setEmployeeInformation((prevState)=>({...prevState,designation:{...prevState.designation,department:e.target.value}}))} />
        //                     </div>
        //                 </div>

        //                 <button onClick={handleFormSubmit}>submit</button>
        //             </form>
        //             <button onClick={()=>console.log("employeeInformation",employeeInformation)}>data</button>

        //         </div>
        //     </div>
        // </div>


        // -------------------------------------------Multisteper Form----------------------------------------------------------------

        <Grid>
            <Paper>
            <div className='progressbar' >
               <div style={{width: page ==0 ? "33.3%" : page == 1 ? "66.6%" :"100%",backgroundColor:'blue',height:'7px'}}></div>
            </div>
            <div className='form'>
                <div className='header'>
                    <h1>{formHeading[page]}</h1>
                </div>
                <div className='body' style={{marginRight:'30%'}}>{PageDisplay()}</div>
                <div className='footer' >
                    <Button disabled={page===0} className='employee-Btn' color='primary' variant="contained"  type='submit' text='PREV' onClick={()=>setPage((currentPage)=>currentPage-1)} />
                    <Button  type='submit' color='primary' className='employee-Btn' variant="contained"  text={page===(formHeading.length-1) ? 'SUBMIT' : 'NEXT'} onClick={()=>
                    {
                        if(page===(formHeading.length-1)){
                            handleFormSubmit();
                        }else{
                            setPage((currentPage)=>currentPage+1)
                        }
                    }}/>
                </div>
            </div>

            </Paper>
        </Grid>
    )
}