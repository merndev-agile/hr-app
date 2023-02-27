import * as React from 'react';
import {TextField} from '@material-ui/core';
import { useForm } from "react-hook-form";
 const TextFields=React.forwardRef((props,ref)=>{
    const{register}=useForm();
        return(
        <TextField {...props} fullWidth inputRef={ref}/>
    )
})
export default TextFields;
