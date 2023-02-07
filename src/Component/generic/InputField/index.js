import * as React from 'react';
import {TextField} from '@material-ui/core';
 const InputField=(props)=>{
    return(
        <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
      />
    )

}
export default InputField;
