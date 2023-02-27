import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import moment from 'moment';
import firebase from 'firebase/compat';
import { firestore } from '../../../../firebase'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  button: {
    width:"10rem",
    background: "linear-gradient(45deg, #2DD6AB 30%, #41AF93 90%)",
    border: 0,
    borderRadius: 30,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 50,
    padding: "30px 30px",
    textAlign:"center",
    margin:"10px 20px"
  },
  TextField: {
    "& label.Mui-focused": {
      color: "#FE6B8B"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#FE6B8B"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#C0C0C0"
      },
      "&:hover fieldset": {
        borderColor: "#FE6B8B"
      },
      "&.Mui-focused fieldset": {
        borderColor: "#FE6B8B"
      }
    }
  }
});


const LoginLogoutTimes = ({loginTime,setLoginTime,logoutTime,setLogoutTime,hoursWorked,setHoursWorked,selectedDate}) => {
    
  const classes = useStyles();

    const handleLoginButtonClick = () => {
        setLoginTime(moment().format('h:mm:ss a'));
      };
    
      const handleLogoutButtonClick = () => {
        setLogoutTime(moment().format('h:mm:ss a'));
      };
    
      const calculateHoursWorked = () => {
        const login = moment(loginTime, 'h:mm:ss a');
        const logout = moment(logoutTime, 'h:mm:ss a');
        const diff = moment.duration(logout.diff(login));
        const hours = Math.floor(diff.asHours()) + moment.utc(diff.asMilliseconds()).format(":mm:ss");
        setHoursWorked(hours);

        firestore.collection('workingHours').doc(`${selectedDate}`).set({
          loginTime,
          logoutTime,
          hoursWorked: hours,
          hoursLeft:hoursDifference,
         
        })
        setLoginTime('')
        setLogoutTime('')
      };

      const hoursDifference = hoursWorked ? (9 - parseFloat(hoursWorked)).toFixed(2) : '9';
      

  return (
    <div className='buttons-container '>
    <h3>Login/Logout Times:</h3>
    <div >
      <Button variant="contained" color="primary" className={classes.button}  onClick={handleLoginButtonClick}>
        Log in
      </Button>
      {loginTime && (
        <TextField
          label="Login Time"
          value={loginTime}
          disabled
        />
      )}
    </div>
    <div>
      <Button variant="contained" color="primary" className={classes.button}  onClick={handleLogoutButtonClick}>
        Log out
      </Button>
      {logoutTime && (
        <TextField
          label="Logout Time"
          value={logoutTime}
          disabled
        />
      )}
    </div>
    <div>
      <Button variant="contained" color="primary" className={classes.button}  onClick={calculateHoursWorked}>
       Hours Worked
      </Button>
      {hoursWorked && (
        <TextField
          label="Hours Worked"
          value={hoursWorked}
          disabled
        />
      )}
    </div>
   
  </div>
  )
}

export default LoginLogoutTimes;