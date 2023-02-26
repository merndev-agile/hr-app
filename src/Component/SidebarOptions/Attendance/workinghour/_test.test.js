import WorkingHour from ".";
import React from "react";
import { fireEvent, render,screen } from '@testing-library/react';
import firebase from "firebase/compat";
import { Firestore } from "firebase/firestore";



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
  it('should fetch data from Firebase Firestore', async () => {
    // Mock the Firestore instance and the get function
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
