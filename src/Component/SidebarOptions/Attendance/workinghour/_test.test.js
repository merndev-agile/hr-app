import WorkingHour from ".";
import React from "react";

import firebase from "firebase/compat";




jest.mock('firebase/firestore', () => {
  const mockFirestore = jest.fn();
  const mockCollection = jest.fn();
  const mockDoc = jest.fn();
  const mockGet = jest.fn();

  return {
    __esModule: true,
    default: mockFirestore,
    collection: mockCollection,
    doc: mockDoc,
    get: mockGet,
  };
});

// Your test case
describe('MyComponent', () => {
  it.skip('should fetch data from Firebase Firestore', async () => {

    const mockData = { hoursWorked: '0:00:06', logoutTime: '9:34:44 pm', hoursLeft: '9', loginTime: '9:34:38 pm' };
    const mockGet = jest.fn().mockReturnValue({ data: () => mockData });
    firebase.firestore.mockReturnValue({
      collection: jest.fn().mockReturnValue({
        doc: jest.fn().mockReturnValue({
          get: mockGet,
        }),
      }),
    });


    const result = await fetchDataFromFirestore('123');

    
    expect(mockGet).toHaveBeenCalledWith();

    expect(result).toEqual(mockData);
  });
});

test('displays login and logout times', async () => {
    render(<WorkingHour />);
    const loginButton = screen.getByRole('button', { name: 'Set Login Time' });
    const logoutButton = screen.getByRole('button', { name: 'Set Logout Time' });
    userEvent.click(loginButton);
    const loginTime = await screen.findByText(/[\w]+ [\w]+ [\d]+ [\d]+:[\d]+:[\d]+ [\w]+/i);
    expect(loginTime).toBeInTheDocument();
    userEvent.click(logoutButton);
    const logoutTime = await screen.findByText(/[\w]+ [\w]+ [\d]+ [\d]+:[\d]+:[\d]+ [\w]+/i);
    expect(logoutTime).toBeInTheDocument();
  });


  test('displays hours worked', async () => {
    render(<WorkingHour />);
    const loginButton = screen.getByRole('button', { name: 'Set Login Time' });
    const logoutButton = screen.getByRole('button', { name: 'Set Logout Time' });
    userEvent.click(loginButton);
    userEvent.click(logoutButton);
    const hoursWorked = await screen.findByText(/Hours Worked:/i);
    expect(hoursWorked).toBeInTheDocument();
  });

  test('saves hours worked to Firestore', async () => {
    render(<WorkingHour />);
    const loginButton = screen.getByRole('button', { name: 'Set Login Time' });
    const logoutButton = screen.getByRole('button', { name: 'Set Logout Time' });
    userEvent.click(loginButton);
    userEvent.click(logoutButton);
    await waitFor(() => expect(screen.getByText(/Hours Worked:/i)).toBeInTheDocument());
    const savedHoursWorked = await db.collection('workingTime').get();
    expect(savedHoursWorked.docs.length).toBeGreaterThan(0);
  });