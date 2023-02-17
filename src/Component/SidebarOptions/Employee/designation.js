import * as React from 'react';
import { useOutletContext } from "react-router-dom";
import TextField from '../../generic/TextField';
import { Grid, Paper, Typography, Link, FormControlLabel, Checkbox, Box, Button } from '@material-ui/core';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { designationInfoSchema } from '../../../Pages/employee/index';

export default function Designation({ employeeInformation, setEmployeeInformation, handleFormSubmit, setIsDisable2, isDisable2, page }) {
    const [containerState] = useOutletContext();
    const { register, handleSubmit, formState: { errors }, control, trigger } = useForm({
        defaultValues: {
            name: false
        },
        resolver: yupResolver(designationInfoSchema)
    });

    const onSubmit = async (data, e) => {
        employeeInformation.designation = data;
        setEmployeeInformation((curr) => ({ ...curr, ...employeeInformation }))
        handleFormSubmit()
    };
    const onNameChange = async (value) => {
        // Trigger is used to target an element 
        const valid = await trigger("name");
        if (!valid) {
            // @todo: bug here? valid only correct after submitting
            return;
        }
    };

    return (
        <Box>
            <Box>
                <form onSubmit={handleSubmit(data => {
                    onSubmit(data);
                    setIsDisable2(true);
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
                                defaultValue={employeeInformation.designation.appointment}
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
                                defaultValue={employeeInformation.designation.department}
                                // error={Boolean(errors && errors.name)}
                                // helperText={(errors && errors.name && errors.name.message)}
                                inputRef={ref}
                                style={{ marginBottom: 8, marginBottom: 8 }}
                            />
                        )}
                    />
                    <Button disabled={isDisable2 && page === 2}
                        color='primary'
                        variant="contained"
                        type='submit'
                    >
                        submit
                    </Button>
                </form>
            </Box>

        </Box>

    )
}