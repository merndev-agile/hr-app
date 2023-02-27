import React, { useState } from 'react';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';


const AttendanceCalendar = ({selectedDate,setSelectedDate,todo}) => {

  const localizer = momentLocalizer(moment);
  const maxDate = new Date(); 

    const handleDateChange = (date) => {
        const hy = moment(date).format('DD-MM-YYYY');
        setSelectedDate(hy)
    };
  return (
    <div>
      <h3>Select a date:{selectedDate}</h3>
      <Calendar
        localizer={localizer}
        events={todo}
        startAccessor="start"
        endAccessor="end"
        defaultView="month"
        style={{ height: 500 }}
        selectable
        value={handleDateChange}
      />
    </div>
  )
}

export default AttendanceCalendar