import './App.css';
import Signup from './Component/Signup/signup';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
import { EmployeePage } from './Pages/employee';
import ProtectedRoute from './ProtectedRoutes';
import useAuth from './CustomHooks/useAuth';

function App() {
  const [isAuth, setAuth] = useAuth(false); //for  working here we give TRUE

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage isAuth={isAuth} setAuth={setAuth} />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route element={<ProtectedRoute auth={isAuth} path='/home' />}>
          <Route path='/home' element={<Container />}  >
            <Route path='dashboard' element={<DashBoard />} />
            <Route path='employeedetails' element={<EmployeePage />} />
            <Route path='leave' element={<Leave />} />
            <Route path='attendance' element={<Attendence />} />
            <Route path='benifit' element={<Benifit />} />
          </Route>
        </Route>
        <Route path='validation' element={<ValidationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
