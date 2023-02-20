import * as React from 'react';
import SideBar from '../Menu/sideBar.js';
import './style.css';
import { useLocation, useParams, Outlet, BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FcMenu } from "react-icons/fc";

// import EmployeeDetails from '../../Pages/employee';

export default function Container() {

    const { state } = useLocation();
    
    const [containerState, SetcontainerState] = useState({});
    const [isSideBarShow, setIsSideBarShow] = useState('false');
    const isToggleSideBar = () => {

        setIsSideBarShow((prevState) => !prevState)
        console.log("isSideBarShow", isSideBarShow)
    }

    console.log("state in container", state)
    useEffect(() => {
        SetcontainerState({ ...state });
        console.log('uid in useEffect-----------', containerState);

    }, [])
    console.log('uid outside useEffect-----------', containerState);

    return (
        <div>
            <div className='container-header' >
                <div className='Burger' onClick={isToggleSideBar}>
                    <FcMenu size={'40px'} />
                </div>
                <h1>
                    hr-app
                </h1>
            </div>
            <div className='container'>
                <div className='container-sidebar'>
                    {isSideBarShow && <SideBar employeeDetails={containerState} />}
                </div>
                <div className='container-component'>
                    <Outlet context={[containerState]} />
                </div>
            </div>

        </div>
    )

}