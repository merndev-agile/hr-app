import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashBoard from '../Component/DashBoard/dashBoard';
import Leave from '../Pages/leave';
import Attendence from '../Pages/attendence';
import Benifit from '../Pages/benifit';
import { LoginPage } from '../Pages/Login'
import Container from '../Component/Container';
import ValidationPage from '../Pages/Validation';
import { SignupPage } from '../Pages/Signup';
import { EmployeePage } from '../Pages/employee';
import ProtectedRoute from '../ProtectedRoutes/index';
import useAuth from '../CustomHooks/useAuth'
import Admin_Employee_Page from '../Pages/Admin/admin_employepage';

/**
 * ------HERE WE DEFINE TYPES OF USERS-----------
 */
const USER_TYPES = {
    PUBLIC: 'Public User',
    NORMAL: 'Normal User',
    ADMIN_USER: 'Admin User'
}

/**
 * -------STORING THE TYPE OF LOGGED IN USER-------
 */
const CURRENT_USER_TYPE = USER_TYPES.ADMIN_USER;

export default function AppRoutes() {
    const [isAuth, setAuth] = useAuth(false); //for  working here we give TRUE

    /**
     * ----------HERE WE DEFINE ALL ROUTES--------------
     */
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginPage isAuth={isAuth} setAuth={setAuth} />} />
                <Route path='/signup' element={<SignupPage />} />
                <Route element={<ProtectedRoute auth={isAuth} path='/home' />}>
                    <Route path='/home' element={<Container />}  >
                        <Route path='dashboard' element={<DashBoard />} />
                        <Route path='employeedetails' element={<EmployeePage />} />
                        <Route path='admindetails' element={<AdminElement><Admin_Employee_Page /></AdminElement>} />
                        <Route path='leave' element={<Leave />} />
                        <Route path='attendance' element={<Attendence />} />
                        <Route path='benifit' element={<Benifit />} />
                    </Route>
                </Route>
                <Route path='validation' element={<ValidationPage />} />
            </Routes>
        </BrowserRouter>

    )
}
/**
 * ---------------------------------HERE WE CREATE ROUTES ,Which is accessed by ADMIN----
 * @param {*} param0 
 * @returns 
 */
function AdminElement({ children }) {
    if (CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER) {
        return (
            <>{children}</>
        )
    }
    else {
        return <>{<div>PAGE NOT FOUND</div>}</>
    }
}