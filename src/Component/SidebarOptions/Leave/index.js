import * as React from 'react';
import {Grid,Paper,TextField,InputLabel ,MenuItem,Select, Typography,Button,} from '@material-ui/core';
import './style.css';
import {createLeaveDataCollection} from '../../firebase';
import { useLocation } from 'react-router-dom';
// import { DateRangePicker } from 'rsuite';
// import 'rsuite/dist/styles/rsuite-default.css';
import { useOutletContext } from "react-router-dom";

export default function Leave(){
 const [date, setDate] = React.useState(null);
//  const {state}= useLocation();
 const [ containerState] = useOutletContext(); 

 console.log(" containerState in Leavepage", containerState)
 const [leaveData,setLeaveData]=React.useState({
    companyName:'',
    employeeEmail:'',
    employeeName:'',
    employeeId:'',
    leaveStartDate:'',
    leaveEndDate:'',
    description:'',
    leaveType:'',
    uid: containerState.uid,
   
 });
 const handleSubmit=(e)=>{
        console.log("LeaveData",leaveData);
        let obj={...leaveData}
        createLeaveDataCollection(obj);
 }
 
    let description={
    marginTop:'10px',
    marginBottom:'10px',
    }
    let select={
        marginTop:'10px',
        marginBottom:'10px',
        }
        

    
    return(
       <Grid className='main-container'>
        <Paper elevation={10} className='main-subcontainer'>
            <h1>Apply Leave </h1>
            <TextField  label="Company Name"  type='text' placeholder='Enter your company name'  fullWidth required onChange={(e)=>setLeaveData((prevState)=>({...prevState,companyName:e.target.value}))} />       
            <TextField  label="Employee Name"  type='text' placeholder='Enter your name'  fullWidth required onChange={(e)=>setLeaveData((prevState)=>({...prevState,employeeName:e.target.value}))} />       
            <TextField  label="Employee email"  type='email' placeholder='Enter your email'  fullWidth required onChange={(e)=>setLeaveData((prevState)=>({...prevState,employeeEmail:e.target.value}))} />
            <TextField  label="Employee id"  type='number' placeholder='Enter your id'  fullWidth required onChange={(e)=>setLeaveData((prevState)=>({...prevState,employeeId:e.target.value}))} />
            
            <InputLabel style={select} fullWidth required >Leave</InputLabel>
        <Select
          defaultValue={leaveData.leaveType}
          onChange={(e)=>{setLeaveData((prevState)=>({...prevState,leaveType:e.target.value}))
        console.log("value",e)
        console.log("leaveData>>>>>>>>>>>",leaveData)

        }}
        style={select}
        >
          <MenuItem >Casual Leave</MenuItem>
          <MenuItem >Sick Leave</MenuItem>
          <MenuItem >Marriage Leave</MenuItem>
          <MenuItem >Trip Leave</MenuItem>
          <MenuItem >Paternity Leave</MenuItem>
          <MenuItem >Maternity Leave</MenuItem>
        </Select>
      
      <Grid className='dates'>
        <label>From when: </label>
          <input type='date' placeholder='Form when' onChange={(e)=>setLeaveData((prevState)=>({...prevState,leaveStartDate:e.target.value}))}/>
          <label>To when: </label>
          <input type='date' placeholder='To when' onChange={(e)=>setLeaveData((prevState)=>({...prevState,leaveEndDate:e.target.value}))}/>

      </Grid>
      {/* <Grid className='dates'>
             </Grid> */}
        <TextField  label="Description" variant="outlined" maxRows={5}
  minRows={5} fullWidth multiline style={description} onChange={(e)=>setLeaveData((prevState)=>({...prevState,description:e.target.value}))}  />
        <Grid>
        <Button  color='primary' variant="contained"  onClick={handleSubmit} >submit</Button>
        </Grid>       
            
        </Paper>
       </Grid>
    )
}