import * as React from 'react';
import { createAttendanceDataCollection } from '../../firebase';
import { useOutletContext } from "react-router-dom";
import { Grid, Paper, TextField, InputLabel, MenuItem, Select, Typography, Button, FormControl } from '@material-ui/core';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useNavigate,Link } from 'react-router-dom';

export default function Attendance() {
    const [workingType, setWorkingType] = React.useState('Work from Home');
    const [status, setstatus] = React.useState('You are logged In');

    const [islogin, setIslogin] = React.useState(false);
    const MySwal = withReactContent(Swal);

    const [attendance, setAttendance] = React.useState({
        employeeName: '',
        time: '',
        workType: '',
        employeeId: ''
    });
    const navigate = useNavigate();

    const [containerState] = useOutletContext();
    console.log(" containerState in attendence", containerState)

    const handleSubmit = (e) => {
        let obj = { ...attendance }
      
        let uid = containerState.uid;
        let storedData = {
        }
        storedData[uid] = [obj];

        console.log('storeddata==>',storedData)
        setAttendance({ ...attendance, employeeName: containerState.name, employeeId: containerState.uid, workType: workingType, time: new Date().toLocaleString() })
        createAttendanceDataCollection(storedData);
        setIslogin(true)
       
        MySwal.fire({
            title: "Success",
            text: "Your Attendance Marked Successfully",
            icon: "success",
            confirmButtonText: "OK",
        })
      
    }
    const handleChange = (e) => {
        setWorkingType(e.target.value);
    }
    React.useEffect(() => {
        setAttendance({ ...attendance, employeeName: containerState.name, employeeId: containerState.uid, workType: workingType, time: new Date().toLocaleString() })

    }, [] )

    let description = {
        marginTop: '10px',
        marginBottom: '10px',
    }
    let select = {
        marginTop: '10px',
        marginBottom: '10px',
    }



    return (
        <Grid className='main-container'>
            <Paper elevation={10} className='main-subcontainer'>
                <h1>Mark login </h1>
                <h1> {islogin ?'You are logged In' :null } </h1>



                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Working From</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        defaultValue={workingType}
                        id="demo-simple-select"
                        label="Working From"
                        onChange={handleChange}
                    >
                        <MenuItem value='Work from Home'>Work from Home</MenuItem>
                        <MenuItem value='Work from Office'>Work from Office</MenuItem>
                    </Select>
                </FormControl>
                <Grid>
                    <Button disabled={islogin} color='primary' variant="contained" onClick={handleSubmit}>login</Button>
                </Grid>

            </Paper>
        </Grid>
    )
}