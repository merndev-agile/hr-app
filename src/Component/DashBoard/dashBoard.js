import React from 'react';
import SideBar from '../Menu/sideBar';
import { useLocation } from "react-router-dom";

function DashBoard({ isAuth, setAuth }) {
    const { state } = useLocation();
    console.log('uid', state);
    return (
        <div>
            <SideBar employeeDetails={state}  />
            DashBoard
        </div>
    )

}
export default DashBoard;
