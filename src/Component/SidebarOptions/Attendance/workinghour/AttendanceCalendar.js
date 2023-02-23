import React, { useState } from 'react';
import { Calendar } from 'react-calendar'
import moment from 'moment';


const AttendanceCalendar = ({selectedDate,setSelectedDate}) => {
    

    const handleDateChange = (date) => {
        const hy = moment(date).format('DD-MM-YYYY');
        setSelectedDate(hy)
    };
  return (
    <div>
      <h3>Select a date:{selectedDate}</h3>
      <Calendar  onChange={handleDateChange} />
    </div>
  )
}

export default AttendanceCalendar