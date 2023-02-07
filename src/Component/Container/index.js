import * as React from 'react';
import SideBar from '../Menu/sideBar.js';
import './style.css';
import { useLocation, useParams, Outlet, BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FcMenu } from "react-icons/fc";

// import EmployeeDetails from '../../Pages/employee';

export default function Container() {
    // const[isSideBar,setSidebar]=React.useState(false);
    // const[isLoginShow,setIsLoginShow]=React.useState(false);
    // const[isSignupShow,setIsSignupShow]=React.useState(false);
    // let { userId } = useParams();
    // console.log("userParam", userId)
    const { state } = useLocation();
    const [containerState, SetcontainerState] = useState({});
    const [isSideBarShow, setIsSideBarShow] = useState('false');
    const isToggleSideBar = () => {
        
        setIsSideBarShow((prevState) => !prevState)
        console.log("isSideBarShow",isSideBarShow)
    }


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
                    {isSideBarShow && <SideBar  employeeDetails={containerState}/>}
                    
                </div>
                <div className='container-component'>
                    <Outlet context={[containerState]} />
                </div>
            </div>

        </div>
    )

}