import React from 'react'
import { useState,useEffect } from 'react'
import AttendanceCalendar from './attendanceCalendar/AttendanceCalendar'
import LoginLogoutTimes from './loginLogoutTimes/LoginLogoutTimes'
import Card from './displayTable/DisplayTable'
import './style.css'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase'
import moment from 'moment'




const WorkingHour = () => {
  const hy = moment(new Date()).format('DD-MM-YYYY');
  const [todo,setTodo]=useState([])
  const [selectedDate, setSelectedDate] = useState(hy);
  const [loginTime, setLoginTime] = useState('');
  const [logoutTime, setLogoutTime] = useState('');
  const [hoursWorked, setHoursWorked] = useState('');
  
   

  
  const fetchAttendanceData = async (date) => {
    const attendanceDocRef = doc(db, 'workingHours', date);
    const attendanceDoc = await getDoc(attendanceDocRef);
    if (attendanceDoc.exists()) {
      setTodo([ attendanceDoc.data() ]);
    } else {
    setTodo([]);
    }
  };
  console.log('todo==>',todo)
  useEffect(() => {
    // fetch attendance data for a specific date
    fetchAttendanceData(`${selectedDate}`);
   
  }, [selectedDate]);

  return (
    <div>
      <div className='container'>
      <div className='left-section'>
      <AttendanceCalendar selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
      <LoginLogoutTimes loginTime={loginTime} setLoginTime={setLoginTime} logoutTime={logoutTime} setLogoutTime={setLogoutTime} hoursWorked={hoursWorked} setHoursWorked={setHoursWorked} selectedDate={selectedDate} />
      </div>
      
    <div className='right-section'>
    
        <Card todo={todo} selectedDate={selectedDate} />
      
    </div>
    </div>
    </div>
  )
}

export default WorkingHour;