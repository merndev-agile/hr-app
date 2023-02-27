import AttendanceCalendar from "./AttendanceCalendar";
import React from "react";
import { fireEvent, render,screen } from '@testing-library/react';
import { Calendar } from "react-calendar";



it('should render the heading', () => {
    render(<AttendanceCalendar />);
    const inputText = screen.getByText('Select a date:');
    expect(inputText).toBeInTheDocument();
     
  });


  it('calendar should work onclick', () => {
    const handleDateChange = jest.fn();
  const { getByText } = render(<Calendar onClickDay={handleDateChange} />);
  const dateElement = getByText('25');
  dateElement.click();
  expect(handleDateChange).toHaveBeenCalledTimes(1);

  });
