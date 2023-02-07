import * as React from 'react';
import { useOutletContext } from "react-router-dom";
import TextField from '../../generic/TextField';
import { Grid, Paper, Typography, Link, FormControlLabel, Checkbox } from '@material-ui/core';
import './style.css';
export default function personalInfo({ employeeInformation, setEmployeeInformation }) {
    const [containerState] = useOutletContext();
    console.log("employeeInformation PersonalInfo", employeeInformation)

    return (
        
            <Grid className='main-container1'>
                <Paper elevation={10} className='main-subcontainer1'>
                    <TextField className='employeeTextField' label='Name' type='text' value={employeeInformation.personalInfo.name} variant="outlined" sx={{marginTop:8,marginBottom:8}} onChange={(e) => setEmployeeInformation((prevState) => ({ ...prevState, personalInfo: { ...prevState.personalInfo, name: e.target.value } }))} />
                    <TextField className='employeeTextField'  label='Email' type='email' value={employeeInformation.personalInfo.email}  variant="outlined"onChange={(e) => setEmployeeInformation((prevState) => ({ ...prevState, personalInfo: { ...prevState.personalInfo, email: e.target.value } }))} />
                    <TextField className='employeeTextField'  label='Mobile Number' type='number' value={employeeInformation.personalInfo.mobileNumber}  variant="outlined"onChange={(e) => setEmployeeInformation((prevState) => ({ ...prevState, personalInfo: { ...prevState.personalInfo, mobileNumber: e.target.value } }))} />
                    <TextField className='employeeTextField'  label='Father Name' type='text' value={employeeInformation.personalInfo.fatherName}  variant="outlined"onChange={(e) => setEmployeeInformation((prevState) => ({ ...prevState, personalInfo: { ...prevState.personalInfo, fatherName: e.target.value } }))} />
                    <TextField className='employeeTextField'  label='Address' type='text' value={employeeInformation.personalInfo.address}  variant="outlined"onChange={(e) => setEmployeeInformation((prevState) => ({ ...prevState, personalInfo: { ...prevState.personalInfo, address: e.target.value } }))} />
                    <TextField className='employeeTextField'  label='Desiganation' type='text' value={employeeInformation.personalInfo. designation}  variant="outlined"onChange={(e) => setEmployeeInformation((prevState) => ({ ...prevState, personalInfo: { ...prevState.personalInfo, designation: e.target.value } }))} />
                    <TextField className='employeeTextField'  label='Age'  type='text' value={employeeInformation.personalInfo.age}  variant="outlined"onChange={(e) => setEmployeeInformation((prevState) => ({ ...prevState, personalInfo: { ...prevState.personalInfo, age: e.target.value } }))} />
                    <TextField className='employeeTextField'  label='Date of Birth' type='date' value={employeeInformation.personalInfo.dateOfBirth}  variant="outlined"onChange={(e) => setEmployeeInformation((prevState) => ({ ...prevState, personalInfo: { ...prevState.personalInfo, dateOfBirth: e.target.value } }))} />
                    {/* <TextField label="Email" type='email' placeholder="Enter your email" value={credential.email} error={Object.keys(errorMsg).length>0} helperText={(Object.keys(errorMsg).length=== 0)?" ":errorMsg.email} onChange={(e) => { setCredential((prev) => ({ ...prev, email: e.target.value })) }} />
                 <TextField label={"Password"} type={'passeord'} placeholder={"Enter your password"} value={credential.password} error={Object.keys(errorMsg).length>0} helperText={(Object.keys(errorMsg).length=== 0)?" ":errorMsg.password}  onChange={(e) => { setCredential((prev) => ({ ...prev, password: e.target.value })) }} /> */}
                </Paper>

            </Grid>
        
    )
}