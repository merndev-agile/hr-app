import React from "react";
import { fireEvent, render,screen } from '@testing-library/react';
import LoginLogoutTimes from "./LoginLogoutTimes";
import firebase from 'firebase/compat';
import { firestore } from '../../../../firebase'



jest.mock('firebase/firestore', () => {
    const mockFirestore = jest.fn();
    const mockCollection = jest.fn();
    const mockDoc = jest.fn();
    const mockSet = jest.fn();
  
    return {
      __esModule: true,
      default: mockFirestore,
      collection: mockCollection,
      doc: mockDoc,
      set: mockSet,
    };
  })


  describe('MyComponent', () => {
    it('should set data in Firebase Firestore', async () => {
  
      const mockSet = jest.fn();
      firebase.firestore.mockReturnValue({
        collection: jest.fn().mockReturnValue({
          doc: jest.fn().mockReturnValue({
            set: mockSet,
          }),
        }),
      });
  
      
      const data = {loginTime: '09:00:00',
                    logoutTime: '18:00:00',
                     hoursWorked: 9,
                      hoursLeft:0};
      await setDataInFirestore(data);
  
      
      expect(mockSet).toHaveBeenCalledWith(data);
    });
  });
  


describe('Button', () => {
    it('should render button with label and onClick handler', () => {
      const mockOnClick = jest.fn();
      const { getByRole } = render(<LoginLogoutTimes onClick={mockOnClick} />);
      const buttonElement = getByRole('button');
      expect(buttonElement).toBeInTheDocument();
      fireEvent.click(buttonElement);
      expect(mockOnClick).toHaveBeenCalled();
    });
  });
  

  


 

//   describe('working hours', () => {
//     it('should set attendance data in Firestore', async () => {
//       const firestoreMock = firebaseMock.firestore();
//       const setMock = jest.fn();
//       firestoreMock.collection = jest.fn(() => ({
//         doc: jest.fn(() => ({
//           set: setMock,
//         })),
//       }));
  
//       const attendanceData = {
//         
//       };
  
//       // Call the function that sets attendance data
//       await setAttendanceData(firestoreMock, attendanceData);
  
//       // Check that the set function was called with the correct data
//       expect(setMock).toHaveBeenCalledWith(attendanceData);
//     });
//   });