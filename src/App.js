import './App.css';
import Signup from './Component/Signup/signup';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { auth } from './Component/firebase';
import DashBoard from './Component/DashBoard/dashBoard';
import SideBar from './Component/Menu/sideBar';
import EmployeeDetails from './Pages/employee';
import Leave from './Pages/leave';
import Attendence from './Pages/attendence';
import Benifit from './Pages/benifit';
import { LoginPage } from './Pages/Login/index'
import Container from './Component/Container';
import ValidationPage from './Pages/Validation';
import { SignupPage } from './Pages/Signup';
import {EmployeePage} from './Pages/employee';
// export const employeeContext = React.createContext();
function App() {
  // const[isauthenticated,setAuthenticated]=React.useState('false');
  // React.useEffect(()=>{
  //   auth.onAuthStateChanged((user)=>{
  //     if(user){
  //       console.log(user);
  //     }
  //   })
  // })

  // const[employee,setEmployee]=React.useState([])
  return (
    <BrowserRouter>
      {/* <SideBar /> */}
      {/* <employeeContext.Provider value='employee'>
        <EmployeeDetails />
      </employeeContext.Provider> */}
      {/* <h1>React testing</h1> */}
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={ <SignupPage/>} />
        <Route path='/home' element={<Container />} >
          <Route path='dashboard' element={<DashBoard />} />
          <Route path='employeedetails' element={<EmployeePage />} />
          <Route path='leave' element={<Leave />} />
          <Route path='attendance' element={<Attendence />} />
          <Route path='benifit' element={<Benifit />} />         
        </Route>
        <Route path='validation' element={<ValidationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
