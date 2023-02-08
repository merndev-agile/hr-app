import * as React from 'react';
import { useOutletContext } from "react-router-dom";
import TextField from '../../generic/TextField';
import { personalInfoSchema  } from '../../../Pages/employee/index';
import { Grid, Paper, Typography, Link, FormControlLabel, Checkbox } from '@material-ui/core';
import './style.css';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
export default function personalInfo({ employeeInformation, setEmployeeInformation }) {
    const [containerState] = useOutletContext();
    console.log("employeeInformation PersonalInfo", employeeInformation);
    const { register, handleSubmit, formState: { errors }, control, trigger } = useForm({
        defaultValues: {
            name: false
        },
        resolver: yupResolver(personalInfoSchema)
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
        employeeInformation.personalInfo=data;
        console.log(employeeInformation);
        setEmployeeInformation((curr)=>({...curr,...employeeInformation}))

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
                    <button type='submit'>submit</button>
                </form>
                {/* <TextField className='employeeTextField' label='Name' type='text' value={employeeInformation.personalInfo.name} variant="outlined" sx={{marginTop:8,marginBottom:8}} onChange={(e) => setEmployeeInformation((prevState) => ({ ...prevState, personalInfo: { ...prevState.personalInfo, name: e.target.value } }))} />
                    <TextField className='employeeTextField'  label='Email' type='email' value={employeeInformation.personalInfo.email}  variant="outlined"onChange={(e) => setEmployeeInformation((prevState) => ({ ...prevState, personalInfo: { ...prevState.personalInfo, email: e.target.value } }))} />
                    <TextField className='employeeTextField'  label='Mobile Number' type='number' value={employeeInformation.personalInfo.mobileNumber}  variant="outlined"onChange={(e) => setEmployeeInformation((prevState) => ({ ...prevState, personalInfo: { ...prevState.personalInfo, mobileNumber: e.target.value } }))} />
                    <TextField className='employeeTextField'  label='Father Name' type='text' value={employeeInformation.personalInfo.fatherName}  variant="outlined"onChange={(e) => setEmployeeInformation((prevState) => ({ ...prevState, personalInfo: { ...prevState.personalInfo, fatherName: e.target.value } }))} />
                    <TextField className='employeeTextField'  label='Address' type='text' value={employeeInformation.personalInfo.address}  variant="outlined"onChange={(e) => setEmployeeInformation((prevState) => ({ ...prevState, personalInfo: { ...prevState.personalInfo, address: e.target.value } }))} />
                    <TextField className='employeeTextField'  label='Desiganation' type='text' value={employeeInformation.personalInfo. designation}  variant="outlined"onChange={(e) => setEmployeeInformation((prevState) => ({ ...prevState, personalInfo: { ...prevState.personalInfo, designation: e.target.value } }))} />
                    <TextField className='employeeTextField'  label='Age'  type='text' value={employeeInformation.personalInfo.age}  variant="outlined"onChange={(e) => setEmployeeInformation((prevState) => ({ ...prevState, personalInfo: { ...prevState.personalInfo, age: e.target.value } }))} />
                    <TextField className='employeeTextField'  label='Date of Birth' type='date' value={employeeInformation.personalInfo.dateOfBirth}  variant="outlined"onChange={(e) => setEmployeeInformation((prevState) => ({ ...prevState, personalInfo: { ...prevState.personalInfo, dateOfBirth: e.target.value } }))} /> */}
                {/* <TextField label="Email" type='email' placeholder="Enter your email" value={credential.email} error={Object.keys(errorMsg).length>0} helperText={(Object.keys(errorMsg).length=== 0)?" ":errorMsg.email} onChange={(e) => { setCredential((prev) => ({ ...prev, email: e.target.value })) }} />
                 <TextField label={"Password"} type={'passeord'} placeholder={"Enter your password"} value={credential.password} error={Object.keys(errorMsg).length>0} helperText={(Object.keys(errorMsg).length=== 0)?" ":errorMsg.password}  onChange={(e) => { setCredential((prev) => ({ ...prev, password: e.target.value })) }} /> */}
            </Paper>

        </Grid>

    )
}