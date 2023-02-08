
import * as React from 'react';
import { useOutletContext } from "react-router-dom";
import TextField from '../../generic/TextField';
import { Grid, Paper, Typography, Link, FormControlLabel, Checkbox } from '@material-ui/core';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { educationalInfoSchema } from '../../../Pages/employee/index';


export default function EducationalInfo({ employeeInformation, setEmployeeInformation }) {
    const [containerState] = useOutletContext();
    console.log("employeeInformation PersonalInfo", employeeInformation)

    const { register, handleSubmit, formState: { errors }, control, trigger } = useForm({
        defaultValues: {
            name: false
        },
        resolver: yupResolver(educationalInfoSchema)
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
        employeeInformation.educationalInfo = data;
        console.log(employeeInformation);
        setEmployeeInformation((curr) => ({ ...curr, ...employeeInformation }))

    };
    const ref = React.useRef()

    return (

        <Grid className='main-container1'>
            <Paper elevation={10} sx={{ padding: '5rem' }} className='main-subcontainer1'>
                <form onSubmit={handleSubmit(data => {
                    console.log("data-----------------", data)
                    onSubmit(data)
                })}>
                    <Controller
                        name="highschool"
                        control={control}
                        defaultValue=""
                        render={({ field: { value, onChange, ...field }, errors, ref }) => (
                            <TextField
                                {...field}
                                onChange={({ target: { value } }) => {
                                    onChange(value);
                                    onNameChange(value);
                                }}
                                placeholder="Enter your  10th year"
                                variant="outlined"
                                label="10th"
                                type="date"

                                // error={Boolean(errors && errors.name)}
                                // helperText={(errors && errors.name && errors.name.message)}
                                inputRef={ref}
                                style={{ marginBottom: 8, marginBottom: 8 }}

                            />
                        )}

                    />
                    <Controller
                        name="intermediate"
                        control={control}
                        defaultValue=""
                        render={({ field: { value, onChange, ...field }, errors, ref }) => (
                            <TextField
                                {...field}
                                onChange={({ target: { value } }) => {
                                    onChange(value);
                                    onNameChange(value);
                                }}
                                placeholder="Enter your  12th year"
                                variant="outlined"
                                label="12th"
                                type="date"

                                // error={Boolean(errors && errors.name)}
                                // helperText={(errors && errors.name && errors.name.message)}
                                inputRef={ref}
                                style={{ marginBottom: 8, marginBottom: 8 }}

                            />
                        )}

                    />
                    <Controller
                        name="bachelor"
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
                                label="Bachelor Degree"
                                type="date"

                                // error={Boolean(errors && errors.name)}
                                // helperText={(errors && errors.name && errors.name.message)}
                                inputRef={ref}
                                style={{ marginBottom: 8, marginBottom: 8 }}

                            />
                        )}

                    />
                    <Controller
                        name="master"
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
                                label="Master Degree"
                                type="date"

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