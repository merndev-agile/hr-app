import * as React from 'react';
import {Button} from '@material-ui/core';
 const Buttons=(props)=>{
    return(
        <Button {...props} >{props.text}</Button>



    )

}
export default Buttons;
