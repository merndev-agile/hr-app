// import * as React from 'react';
// import { useOutletContext } from "react-router-dom";

// export default function Designation(){
//     const [ containerState] = useOutletContext(); 
//     return(
//         <div>Designation
//             {console.log("BeniftContainerState",containerState)}
//         </div>
//     )
// }


import * as React from 'react';
import { useOutletContext } from "react-router-dom";
import TextField from '../../generic/TextField';
import { Grid, Paper, Typography, Link, FormControlLabel, Checkbox } from '@material-ui/core';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { designationInfoSchema } from '../../../Pages/employee/index';

export default function Designation({ employeeInformation, setEmployeeInformation ,handleFormSubmit}) {
    const [containerState] = useOutletContext();
    console.log("employeeInformation PersonalInfo", employeeInformation)

    //------------
    const { register, handleSubmit, formState: { errors }, control, trigger } = useForm({
        defaultValues: {
            name: false
        },
        resolver: yupResolver(designationInfoSchema)
    });
    const onNameChange = async (value) => {
        // Trigger is used to target an element 
        const valid = await trigger("name");
        console.log("valid", valid, "value", value);
        if (!valid) {
            // @todo: bug here? valid only correct after submitting
            return;
        }

    };

    const onSubmit = async (data, e) => {
        console.log("submitted ", data);
        employeeInformation.designation = data;
        console.log(employeeInformation);
        setEmployeeInformation((curr) => ({ ...curr, ...employeeInformation }))

        handleFormSubmit()

    };
    const ref = React.useRef()


    return (


        <Grid className='main-container1'>
            <Paper elevation={10} className='main-subcontainer1'>


                <form onSubmit={handleSubmit(data => {
                    console.log("data-----------------", data)
                    onSubmit(data)
                })}>
                                      <Controller
                        name="appointment"
                        control={control}
                        defaultValue=""
                        render={({ field: { value, onChange, ...field }, errors, ref }) => (
                            <TextField
                                {...field}
                                onChange={({ target: { value } }) => {
                                    onChange(value);
                                    onNameChange(value);
                                }}
                                placeholder="Enter your  Bachelor degeree year"
                                variant="outlined"
                                label="Appointment"
                                type="date"

                                // error={Boolean(errors && errors.name)}
                                // helperText={(errors && errors.name && errors.name.message)}
                                inputRef={ref}
                                style={{ marginBottom: 8, marginBottom: 8 }}

                            />
                        )}

                    />
                    <Controller
                        name="department"
                        control={control}
                        defaultValue=""
                        render={({ field: { value, onChange, ...field }, errors, ref }) => (
                            <TextField
                                {...field}
                                onChange={({ target: { value } }) => {
                                    onChange(value);
                                    onNameChange(value);
                                }}
                                placeholder="Enter your  master degree year"
                                variant="outlined"
                                label="Department"
                                // error={Boolean(errors && errors.name)}
                                // helperText={(errors && errors.name && errors.name.message)}
                                inputRef={ref}
                                style={{ marginBottom: 8, marginBottom: 8 }}

                            />
                        )}

                    />
                    <button type='submit'>submit</button>

                </form>
            </Paper>

        </Grid>

    )
}