import ListedHolidays from ".";
import React from "react";
import Calendar from 'react-calendar';
import { fireEvent, render,screen } from '@testing-library/react';



it('should render the input component', () => {
    render(<ListedHolidays />);
    const inputText = screen.getByLabelText('Occassion');
    expect(inputText).toBeInTheDocument();

    const addBtn = fireEvent.click(screen.getAllByText('ADD'))
    expect(addBtn).toBeInTheDocument();
  });

  it('should render the table component', () => {
    render(<ListedHolidays />);
   
  });
 
