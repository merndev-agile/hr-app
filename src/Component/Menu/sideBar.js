import React from 'react';
import Backdrop from './backdrop';
import '../Menu/menu.css'
import ToolBar from './toolbar';
import { useNavigate, Link, Router } from 'react-router-dom';
function SideBar(props) {
    const navigate = useNavigate();
    // console.log("propsinSidebar-----", props)
    // console.log("props",props.employeeDetails.uid);

    let listStyle = {
        color: 'white',
        fontSize: '22px',
        padding: '1rem 4rem',
        borderBottom: 'solid rgba(255,255,255,0.1)1px',
        listStyle: 'none'

    }
    return (
        <div>
            <div
                className='SideBar'
            >
                <li className='listStyle' onClick={() => navigate('/home/employeedetails')}>Employee</li>
                <li className='listStyle' onClick={() => navigate('/home/attendance')}>Attendence</li>
                <li className='listStyle' onClick={() => navigate('/home/leave')}>Leave</li>
                <li className='listStyle' onClick={() => navigate('/home/benifit')}>Benifit</li>
                <li className='listStyle' onClick={() => navigate('/home/ListedHolidays')}>List of Holidays</li>
            </div>
        </div>
    )

}
export default SideBar;

