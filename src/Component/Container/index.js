import * as React from 'react';
import SideBar from '../Menu/sideBar.js';
import './style.css';
import { useLocation, useParams, Outlet, BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FcMenu } from "react-icons/fc";

export default function Container() {
    const { state } = useLocation();
    const [containerState, SetcontainerState] = useState({});
    const [isSideBarShow, setIsSideBarShow] = useState('false');
    const isToggleSideBar = () => {
        setIsSideBarShow((prevState) => !prevState)
    }

    useEffect(() => {
        SetcontainerState({ ...state });
    }, [])

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
                <div >
                    {isSideBarShow && <SideBar employeeDetails={containerState} />}
                </div>
                <div className='container-component'>
                    <Outlet context={[containerState]} />
                </div>
            </div>

        </div>
    )

}