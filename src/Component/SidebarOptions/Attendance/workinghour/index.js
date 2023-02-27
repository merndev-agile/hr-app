import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { firestore } from '../../../firebase';



const localizer = momentLocalizer(moment);

function WorkingHour() {
  const [events, setEvents] = useState([]);
  const [loginTime, setLoginTime] = useState(null);
  const [logoutTime, setLogoutTime] = useState(null);
  const [hoursWorked, setHoursWorked] = useState(null);
  const [minutesWorked, setMinutesWorked] = useState(null);
  const [secondsWorked, setSecondsWorked] = useState(null);

  const handleLoginTimeChange = () => {
    setLoginTime(moment());
  };

  const handleLogoutTimeChange = () => {
    setLogoutTime(moment());

    if (loginTime) {
      const diffDuration = moment.duration(logoutTime.diff(loginTime));
      setHoursWorked(diffDuration.hours());
      setMinutesWorked(diffDuration.minutes());
      setSecondsWorked(diffDuration.seconds());
      saveHoursWorked(diffDuration);
    }
  };

  const saveHoursWorked = async (duration) => {
    try {
      const docRef = await firestore.collection('workingTime').add({
        loginTime,
        logoutTime,
        hoursWorked: duration.asHours(),
        minutesWorked: duration.asMinutes(),
        secondsWorked: duration.asSeconds(),
      });

      setEvents((prevEvents) => [
        ...prevEvents,
        {
          start: loginTime.toDate(),
          end: logoutTime.toDate(),
          title: `Hours Worked: ${duration.hours()}h ${duration.minutes()}m ${duration.seconds()}s`,
          id: docRef.id,
        },
      ]);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div>
      <h1>Attendance Calendar</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={() => {
          setLoginTime(null);
          setLogoutTime(null);
          setHoursWorked(null);
          setMinutesWorked(null);
          setSecondsWorked(null);
        }}
      />
      <div>
        <button onClick={handleLoginTimeChange}>Set Login Time</button>
        {loginTime && <span>{loginTime.format('MMMM Do YYYY, h:mm:ss a')}</span>}
      </div>
      <div>
        <button onClick={handleLogoutTimeChange}>Set Logout Time</button>
        {logoutTime && <span>{logoutTime.format('MMMM Do YYYY, h:mm:ss a')}</span>}
      </div>
      {hoursWorked && <p>Hours Worked: {hoursWorked}h {minutesWorked}m {secondsWorked}s</p>}
    </div>
  );
}

export default WorkingHour;