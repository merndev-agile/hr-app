import { getByText, render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';


test('renders learn', () => {
  render(<App />);
  const linkElement = screen.getByText(/React testing/i);
  expect(linkElement).toBeInTheDocument();
});
//  test('render login component in document',()=>{
//    const {getByLabelText}=render(<App/>);
//    const childElement=getByText(" Sign in");
//    expect(childElement).toBeTruthy();
//  })