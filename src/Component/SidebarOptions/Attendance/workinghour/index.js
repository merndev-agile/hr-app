import React from 'react'
import { useState,useEffect } from 'react'
import AttendanceCalendar from './AttendanceCalendar'
import LoginLogoutTimes from './LoginLogoutTimes'
import Card from './DisplayTable'
import './style.css'
import { collection, doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase'
import moment from 'moment'




const WorkingHour = () => {
  const hy = moment(new Date()).format('DD-MM-YYYY');
        console.log('date=',hy)

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
      console.log('No attendance data for this date');
    }
  };
  console.log('todo==>',todo)
  useEffect(() => {
    // fetch attendance data for a specific date
    fetchAttendanceData(`${selectedDate}`);
    console.log('useffect===>>')
  }, [selectedDate]);

  return (
    <div>
      <AttendanceCalendar selectedDate={selectedDate} setSelectedDate={setSelectedDate}/>
      <LoginLogoutTimes loginTime={loginTime} setLoginTime={setLoginTime} logoutTime={logoutTime} setLogoutTime={setLogoutTime} hoursWorked={hoursWorked} setHoursWorked={setHoursWorked} selectedDate={selectedDate} />
      {
        todo.length>=1?<Card todo={todo} selectedDate={selectedDate} />:<h2>No attendance data for this date</h2>
      }
     
    </div>
  )
}

export default WorkingHour