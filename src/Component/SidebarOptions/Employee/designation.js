// import * as React from 'react';
// import { useOutletContext } from "react-router-dom";

// export default function Designation(){
//     const [ containerState] = useOutletContext(); 
//     return(
//         <div>Designation
//             {console.log("BeniftContainerState",containerState)}
//         </div>
//     )
// }


import * as React from 'react';
import { useOutletContext } from "react-router-dom";
import TextField from '../../generic/TextField';
import { Grid, Paper, Typography, Link, FormControlLabel, Checkbox } from '@material-ui/core';

export default function Designation({ employeeInformation, setEmployeeInformation }) {
    const [containerState] = useOutletContext();
    console.log("employeeInformation PersonalInfo", employeeInformation)

    return (

        
            <Grid className='main-container1'>
                <Paper elevation={10} className='main-subcontainer1'>
                    <TextField  className='employeeTextField' label='Date of Appointment' value={employeeInformation.designation.appointment} type='date' variant="outlined" onChange={(e)=>setEmployeeInformation((prevState)=>({...prevState,designation:{...prevState.designation,appointment:e.target.value}}))} />
                    <TextField  className='employeeTextField' label='Department' value={employeeInformation.designation.department} type='text' variant="outlined" onChange={(e) => setEmployeeInformation((prevState) => ({ ...prevState, designation: { ...prevState.designation, department: e.target.value } }))} />
                </Paper>

            </Grid>
        
    )
}