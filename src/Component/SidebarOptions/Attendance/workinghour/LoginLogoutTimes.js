import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import moment from 'moment';
import "./style.css"
import firebase from 'firebase/compat';
import { firestore } from '../../../firebase'
import { addDoc } from 'firebase/firestore';

const LoginLogoutTimes = ({loginTime,setLoginTime,logoutTime,setLogoutTime,hoursWorked,setHoursWorked,selectedDate}) => {
   

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
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setLoginTime('')
        setLogoutTime('')
      };

      const hoursDifference = hoursWorked ? (9 - parseFloat(hoursWorked)).toFixed(2) : '9';
      console.log('hrs dfrnc',hoursDifference)

  return (
    <div className='buttons-container '>
    <h3>Login/Logout Times:</h3>
    <div >
      <Button variant="contained" color="primary" onClick={handleLoginButtonClick}>
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
      <Button variant="contained" color="primary" onClick={handleLogoutButtonClick}>
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
      <Button variant="contained" color="primary" onClick={calculateHoursWorked}>
        Calculate Hours Worked
      </Button>
      {hoursWorked && (
        <TextField
          label="Hours Worked"
          value={hoursWorked}
          disabled
        />
      )}
    </div>
    <h3>TIME LEFT : {hoursDifference}</h3>
  </div>
  )
}

export default LoginLogoutTimes;