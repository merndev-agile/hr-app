import * as React from 'react';
import { useOutletContext } from "react-router-dom";
import TextField from '../../generic/TextField';
import { personalInfoSchema } from '../../../Pages/employee/index';
import { Grid, Paper, Typography, Link, FormControlLabel, Checkbox, Button } from '@material-ui/core';
import './style.css';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
export default function personalInfo({ employeeInformation, setEmployeeInformation, setIsDisable, isDisable, page }) {
    const [containerState] = useOutletContext();
    const { register, handleSubmit, formState: { errors }, control, trigger } = useForm({
        defaultValues: {
            name: false
        },
        resolver: yupResolver(personalInfoSchema)
    });
    const onNameChange = async (value) => {
        // Trigger is used to target an element 
        const valid = await trigger("name");
        if (!valid) {
            // @todo: bug here? valid only correct after submitting
            return;
        }

    };
    const onSubmit = async (data, e) => {
        employeeInformation.personalInfo = data;
        setEmployeeInformation((curr) => ({ ...curr, ...employeeInformation }))
    };
    return (
        
        <Grid >
            <div  >
                <form onSubmit={handleSubmit(data => {
                    setIsDisable((curr)=>true)
                    onSubmit(data)
                })}>
                    <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        render={({ field: { value, onChange, ...field }, errors, ref }) => (
                            <TextField
                                {...field}
                                onChange={({ target: { value } }) => {
                                    onChange(value);
                                    onNameChange(value);
                                }}
                                placeholder="Enter your  name"
                                variant="outlined"
                                label="name"
                                defaultValue={employeeInformation.personalInfo.name}
                                // error={Boolean(errors && errors.name)}
                                // helperText={(errors && errors.name && errors.name.message)}
                                inputRef={ref}
                                style={{ marginBottom: 8, marginBottom: 8 }}
                            />
                        )}
                    />
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        render={({ field: { value, onChange, ...field }, errors, ref }) => (
                            <TextField
                                {...field}
                                onChange={({ target: { value } }) => {
                                    onChange(value);
                                    onNameChange(value);
                                }}
                                placeholder="Enter your  name"
                                variant="outlined"
                                label="Email"
                                defaultValue={employeeInformation.personalInfo.email}
                                // error={Boolean(errors && errors.name)}
                                // helperText={(errors && errors.name && errors.name.message)}
                                inputRef={ref}
                                style={{ marginBottom: 8, marginBottom: 8 }}
                            />
                        )}
                    />
                    <Controller
                        name="mobileNumber"
                        control={control}
                        defaultValue=""
                        render={({ field: { value, onChange, ...field }, errors, ref }) => (
                            <TextField
                                {...field}
                                onChange={({ target: { value } }) => {
                                    onChange(value);
                                    onNameChange(value);
                                }}
                                placeholder="Enter your  name"
                                variant="outlined"
                                label="MobileNumber"
                                defaultValue={employeeInformation.personalInfo.mobileNumber}
                                // error={Boolean(errors && errors.name)}
                                // helperText={(errors && errors.name && errors.name.message)}
                                inputRef={ref}
                                style={{ marginBottom: 8, marginBottom: 8 }}
                            />
                        )}
                    />
                    <Controller
                        name="fatherName"
                        control={control}
                        defaultValue=""
                        render={({ field: { value, onChange, ...field }, errors, ref }) => (
                            <TextField
                                {...field}
                                onChange={({ target: { value } }) => {
                                    onChange(value);
                                    onNameChange(value);
                                }}
                                placeholder="Enter your  name"
                                variant="outlined"
                                label="FatherName"
                                defaultValue={employeeInformation.personalInfo.fatherName}
                                // error={Boolean(errors && errors.name)}
                                // helperText={(errors && errors.name && errors.name.message)}
                                inputRef={ref}
                                style={{ marginBottom: 8, marginBottom: 8 }}
                            />
                        )}
                    />
                    <Controller
                        name="address"
                        control={control}
                        defaultValue=""
                        render={({ field: { value, onChange, ...field }, errors, ref }) => (
                            <TextField
                                {...field}
                                onChange={({ target: { value } }) => {
                                    onChange(value);
                                    onNameChange(value);
                                }}
                                placeholder="Enter your  name"
                                variant="outlined"
                                label="Address"
                                defaultValue={employeeInformation.personalInfo.address}
                                // error={Boolean(errors && errors.name)}
                                // helperText={(errors && errors.name && errors.name.message)}
                                inputRef={ref}
                                style={{ marginBottom: 8, marginBottom: 8 }}
                            />
                        )}
                    />
                    <Controller
                        name="desiganation"
                        control={control}
                        defaultValue=""
                        render={({ field: { value, onChange, ...field }, errors, ref }) => (
                            <TextField
                                {...field}
                                onChange={({ target: { value } }) => {
                                    onChange(value);
                                    onNameChange(value);
                                }}
                                placeholder="Enter your  name"
                                variant="outlined"
                                defaultValue={employeeInformation.personalInfo.desiganation}
                                label="Desiganation"
                                // error={Boolean(errors && errors.name)}
                                // helperText={(errors && errors.name && errors.name.message)}
                                inputRef={ref}
                                style={{ marginBottom: 8, marginBottom: 8 }}
                            />
                        )}
                    />
                    <Controller
                        name="age"
                        control={control}
                        defaultValue=""
                        render={({ field: { value, onChange, ...field }, errors, ref }) => (
                            <TextField
                                {...field}
                                onChange={({ target: { value } }) => {
                                    onChange(value);
                                    onNameChange(value);
                                }}
                                placeholder="Enter your  name"
                                variant="outlined"
                                label="Age"
                                defaultValue={employeeInformation.personalInfo.age}
                                // error={Boolean(errors && errors.name)}
                                // helperText={(errors && errors.name && errors.name.message)}
                                inputRef={ref}
                                style={{ marginBottom: 8, marginBottom: 8 }}
                            />
                        )}
                    />
                    <Controller
                        name="dob"
                        control={control}
                        defaultValue=""
                        render={({ field: { value, onChange, ...field }, errors, ref }) => (
                            <TextField
                                {...field}
                                onChange={({ target: { value } }) => {
                                    onChange(value);
                                    onNameChange(value);
                                }}
                                placeholder="Enter your  name"
                                defaultValue={employeeInformation.personalInfo.dob && employeeInformation.personalInfo.dob.toISOString().slice(0, 10)}
                                variant="outlined"
                                label="DOB"
                                type="date"
                                // error={Boolean(errors && errors.name)}
                                // helperText={(errors && errors.name && errors.name.message)}
                                inputRef={ref}
                                style={{ marginBottom: 8, marginBottom: 8 }}
                            />
                        )}
                    />
                    <Button disabled={isDisable && page === 0} color='primary' variant="contained" type='submit'>submit</Button>
                </form>
            </div>

        </Grid>

    )
}