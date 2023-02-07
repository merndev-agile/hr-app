import React from 'react';
import Backdrop from './backdrop';

import '../Menu/menu.css'
import ToolBar from './toolbar';
import { useNavigate, Link ,Router} from 'react-router-dom';
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
        // hover:{
        //     backgroundColor:'white',
        //     color:'red'
        // }

    }
    // let sideBar = {
    //     position: 'absolute',
    //     width: '12.5vw',
    //     height: '100vh',
    //     backgroundColor: 'rgb(28, 23, 40)',
    //     listStyle: 'none',
    //     color: '#F4DBDB',
    //     // top:0

    // }
    // let sidebarShow = {

    //     transform: 'translateX(0%)'
    // }
    // const [isSideBarShow, setIsSideBarShow] = React.useState('false');
    // const isToggleSideBar = () => {
    //     setIsSideBarShow((prevState) => !prevState)
    // }
    return (
        <div>
            {/* <ToolBar isToggleSideBar={isToggleSideBar} /> */}
            <div 
            // style={isSideBarShow ? sidebarShow : sideBar}
            className='SideBar'
            >
              
                <li className='listStyle' onClick={() => navigate('/home/employeedetails')}>Employee</li>
                <li className='listStyle' onClick={() => navigate('/home/attendance')}>Attendence</li>
                <li className='listStyle' onClick={()=>navigate('/home/leave')}>Leave</li>
                <li className='listStyle' onClick={() => navigate('/home/benifit')}>Benifit</li> 
             
                {/* ---------------------------------------yyyyyy-------Sidebar render in container --------------*/}

                {/* <ul>
                    <li style={listStyle} id="employeedetails" onClick={(e) => { console.log("listVals", e.target.id) }}>Employee</li>
                    <li style={listStyle} id="leave" onClick={(e) => console.log("listVals", e.target.id)}>Leave</li>
                    <li style={listStyle} id="Attendence" onClick={(e) => console.log(e.target.id)}>Attendence</li>
                    <li style={listStyle} id="benifit" onClick={(e) => { console.log("listVals", e.target.id) }

                    }>Benifit</li>
                </ul> */}

                {/* <div>
                    <Link style={listStyle} to="home/employeedetails">Employee</Link>
                </div>
               
                <div>
                    <Link style={listStyle} to="/home/attendance">Attendance</Link>
                </div> 
                <div>
                    <Link style={listStyle} to="/home/leave">Leave</Link>
                </div>
                <div>
                    <Link style={listStyle} to="/home/benifit">Benifit</Link>
                </div> */}
            </div>
        </div>
    )

}
export default SideBar;

