import * as React from 'react';
import {TextField} from '@material-ui/core';
import { useForm } from "react-hook-form";
 const TextFields=React.forwardRef((props,ref)=>{
    const{register}=useForm();
    // console.log("props.inText",props)
        return(
        // <TextField name={props.name}  label={props.label} type={props.type} placeholder={props.placeholder}  helperText={props.helperText} value={props.value} fullWidth ref={register} onChange={props.onChange} />
        // <TextField name={props.name}  label={props.label} type={props.type} placeholder={props.placeholder}   value={props.value} fullWidth {...register("last", { required: true })} />
        <TextField {...props} fullWidth inputRef={ref}/>
    )

})
export default TextFields;
