import * as React from 'react';
import { useOutletContext } from "react-router-dom";
import TextField from '../../generic/TextField';
import { personalInfoSchema } from '../../../Pages/employee/index';
import { Grid, Paper, Typography, Link, FormControlLabel, Checkbox, Button } from '@material-ui/core';
import './style.css';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import moment from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function personalInfo({ employeeInformation, setEmployeeInformation, setIsDisable, isDisable, page }) {
    const [containerState] = useOutletContext();
    const [date, setDate] = React.useState();
    const [focus, setFocus] = React.useState(false);

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
        console.log(employeeInformation.personalInfo.dob, ":::::::in Onsubmit")
    };
    let dateValue;
    return (

        <Grid >
            <div  >
                <form onSubmit={handleSubmit(data => {
                    data.dob = date;
                    console.log("dateof Dob", data.dob);
                    console.log("stateDate-----", date)
                    setIsDisable((curr) => true)
                    onSubmit(data);
                    console.log("dataIn FOrm submit", data)
                    console.log("date", date)
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
                                    console.log("ValueInOnchange", value)
                                    // dateValue=moment(value).format('DD/MM/YYYY');
                                    // console.log("dataValueInOnchange",dateValue)
                                    setDate(value)
                                }}
                                placeholder="Enter your  name"
                                defaultValue={employeeInformation.personalInfo.dob}
                                variant="outlined"
                                type={focus ? 'date' : 'text'}
                                // error={Boolean(errors && errors.name)}
                                // helperText={(errors && errors.name && errors.name.message)}
                                inputRef={ref}
                                onFocus={()=>setFocus(true)}
                                style={{ marginBottom: 8, marginBottom: 8 }}
                                label='Date of Birth'
                            />
                            // <DatePicker

                            //     selected={dateValue}
                            //     onChange={(e) => {
                            //         console.log("e--",e)
                            //         dateValue=moment(e).format('MMMM Do YYYY');
                            //         console.log("dateValueInPicker-",dateValue)
                            //         setDate(dateValue)
                            //     }
                            //     }
                            //     value={dateValue}

                            // />
                        )}
                    />




                    <Button disabled={isDisable && page === 0} color='primary' variant="contained" type='submit'>submit</Button>
                </form>
            </div>

        </Grid>

    )
}