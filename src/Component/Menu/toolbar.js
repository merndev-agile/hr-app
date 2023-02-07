import React from 'react';
import { FcMenu } from "react-icons/fc";

function ToolBar({isToggleSideBar}){
  
    return(

        <div>
           <div className='tool-Bar'
           style={{
           
            // display:'flex',
            backgroundColor:'rgb(28, 23, 40)',
            // alignItems:'center',
            // gap:'2rem',
            // paddingLeft:'1rem',
            // color:'whitesmoke',
            
           }}
           >
                <div className='Burger' onClick={isToggleSideBar}>
                <FcMenu size={'40px'}/>
                </div>
                {/* <div>
                  <h1>
                  hr-app
                  </h1>
                </div> */}
           </div>
        </div>
    )

}
export default ToolBar;
