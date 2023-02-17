
import * as React from 'react';
import { useOutletContext } from "react-router-dom";
import TextField from '../../generic/TextField';
import { Grid, Paper, Typography, Link, FormControlLabel, Checkbox, Box, Button } from '@material-ui/core';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { educationalInfoSchema } from '../../../Pages/employee/index';


export default function EducationalInfo({ employeeInformation, setEmployeeInformation, setIsDisable1, isDisable1, page }) {
    const [containerState] = useOutletContext();
    const { register, handleSubmit, formState: { errors }, control, trigger } = useForm({
        defaultValues: {
            name: false
        },
        resolver: yupResolver(educationalInfoSchema)
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
        employeeInformation.educationalInfo = data;
        setEmployeeInformation((curr) => ({ ...curr, ...employeeInformation }))
    };

    return (

        <Box >
            <Box >
                <form onSubmit={handleSubmit(data => {
                    onSubmit(data);
                    setIsDisable1(true)
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
                                defaultValue={employeeInformation.educationalInfo.highschool }

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
                                defaultValue={employeeInformation.educationalInfo.intermediate}
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
                                defaultValue={employeeInformation.educationalInfo.bachelor}
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
                                defaultValue={employeeInformation.educationalInfo.master}
                                // error={Boolean(errors && errors.name)}
                                // helperText={(errors && errors.name && errors.name.message)}
                                inputRef={ref}
                                style={{ marginBottom: 8, marginBottom: 8 }}
                            />
                        )}
                    />
                    <Button color='primary' disabled={isDisable1 && page ===1} variant="contained"  type='submit'>submit</Button>
                </form>
            </Box>
        </Box>
    )
}