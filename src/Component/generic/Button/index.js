import * as React from 'react';
import {Button} from '@material-ui/core';
 const Buttons=React.forwardRef((props, ref)=>{
    return(
        <Button {...props} >{props.text}</Button>



    )

})
export default Buttons;