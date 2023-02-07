import React from 'react';
import './menu.css';
export default function Backdrop({isSideBarShow,isToggleSideBar,sideBar,sidebarShow}){
    let backdrop={
        width:'100vw',
        height:'100vh',
        backgroundColor:'red'
    }
    console.log("isToggleSideBar",isSideBarShow)
    return(
        
          
                <div  style={ backdrop & isSideBarShow ? sidebarShow : sideBar} onClick={()=>{"jjjjd"}}></div>

           
       
    )
}