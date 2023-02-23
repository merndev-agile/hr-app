import React from 'react';
import '../Menu/menu.css'
import { useNavigate} from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';




function SideBar(props) {
    const navigate = useNavigate();
    // console.log("propsinSidebar-----", props)
    // console.log("props",props.employeeDetails.uid);
  
const handleLogout=()=>{
   
    
    signOut(auth)
            .then(async (res) => {
                console.log(res);
             
                navigate('/')
            })
            .catch((err) => {
                console.log(err.message);
                // console.log(err.FirebaseError.firebase)
              
                // setErrorMsg((current) => ({ ...current, firebase: err.message }));
            })
}

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
                <li className='listStyle' onClick={handleLogout}>SignOut</li>
            </div>
        </div>
    )

}
export default SideBar;

