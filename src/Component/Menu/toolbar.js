import React from 'react';
import { FcMenu } from "react-icons/fc";

function ToolBar({isToggleSideBar}){
  
    return(

        <div>
           <div className='tool-Bar'
           style={{
            backgroundColor:'rgb(28, 23, 40)',  
           }}
           >
                <div className='Burger' onClick={isToggleSideBar}>
                <FcMenu size={'40px'}/>
                </div>
               
           </div>
        </div>
    )

}
export default ToolBar;
