
import * as React from 'react';
import { useOutletContext } from "react-router-dom";
import TextField from '../../generic/TextField';
import { Grid, Paper, Typography, Link, FormControlLabel, Checkbox } from '@material-ui/core';

export default function EducationalInfo({ employeeInformation, setEmployeeInformation }) {
    const [containerState] = useOutletContext();
    console.log("employeeInformation PersonalInfo", employeeInformation)

    return (
        
            <Grid className='main-container1'>
                <Paper elevation={10} sx={{padding:'5rem'}}className='main-subcontainer1'>
                    
               
                    <TextField  className='employeeTextField' label='10th' value={employeeInformation.educationalInfo.name} type='date' variant="outlined" onChange={(e) => setEmployeeInformation((prevState) => ({ ...prevState, educationalInfo: { ...prevState.educationalInfo, name: e.target.value } }))} />
                    <TextField className='employeeTextField' label='12th' value={employeeInformation.educationalInfo.email} type='date' variant="outlined" onChange={(e) => setEmployeeInformation((prevState) => ({ ...prevState, educationalInfo: { ...prevState.educationalInfo, email: e.target.value } }))} />
                    <TextField className='employeeTextField' label='Bachelor Degree' value={employeeInformation.educationalInfo.mobileNumber} type='date' variant="outlined" onChange={(e) => setEmployeeInformation((prevState) => ({ ...prevState, educationalInfo: { ...prevState.educationalInfo, mobileNumber: e.target.value } }))} />
                    <TextField className='employeeTextField' label='Master Degree' value={employeeInformation.educationalInfo.fatherName} type='date' variant="outlined" onChange={(e) => setEmployeeInformation((prevState) => ({ ...prevState, educationalInfo: { ...prevState.educationalInfo, fatherName: e.target.value } }))} />
                </Paper>

            </Grid>
        
    )
}