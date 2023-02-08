import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, } from '../firebase.js';
import { useNavigate } from 'react-router-dom';
import './style1.css';
import { Grid, Paper, Typography, Link, FormControlLabel, Checkbox } from '@material-ui/core';
import LoginPage from '../../Pages/Login/index';
import TextField from '../generic/TextField/index';
import Button from '../generic/Button/index';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { signInSchema } from '../../Pages/Login';

function Login() {
    const [credential, setCredential] = useState(
        {
            userEmail: '',
            password: '',


        }
    );
    
    const [LoginButtonDisabled, setLoginButtonDisabled] = useState(false);
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal);

    // function validate(credential) {
    //     const regexEmail = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/i;
    //     const regexPassword = /^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$/i;
    //     let error = {};
    //     if (!credential.email) {
    //         error.email = "email is required!"
    //     }
    //     else if (!regexEmail.test(credential.email)) {

    //         error.email = "email is invalid!"
    //     } else {
    //         error.email = ""
    //     }
    //     if (!credential.password) {
    //         error.password = "password is required!"

    //     } else if (!regexPassword.test(credential.password)) {
    //         error.password = "password is invalid!"
    //     } else {
    //         error.password = ""
    //     }
    //     return (error);
    // }
    const loginValidationWithFirebase = async ({ userEmail, password, role }) => {

        console.log("email", userEmail);
        // console.log("name", credential.name);
        console.log("password", password);
        // setLoginButtonDisabled(true);
        await signInWithEmailAndPassword(auth, userEmail, password)
            .then(async (res) => {
                console.log(res);
                setLoginButtonDisabled(false);
                MySwal.fire({
                    title: "Success",
                    text: "Login successful",
                    icon: "success",
                    confirmButtonText: "OK",
                })
                const { user } = res;
                console.log("userlogin", user);

                navigate('/home', { state: { uid: user.uid, name: user.displayName, role: role } })
            })
            .catch((err) => {
                console.log(err.message);
                // console.log(err.FirebaseError.firebase)
                setLoginButtonDisabled(false);
                MySwal.fire({
                    title: "Error",
                    text: err.message,
                    icon: "error",
                    confirmButtonText: "Cancel",
                    width: '20rem',
                    height: '1rem'

                })
                // setErrorMsg((current) => ({ ...current, firebase: err.message }));
            })

    }
    // ------------------------------------------------------formik handled form--------------
    const initialValues = {
        userEmail: "",
        password: "",
        validationSchema: signInSchema,

    }
    let obj = {
    }

    const { register, handleSubmit, formState: { errors }, control, trigger } = useForm({
        defaultValues: {
            name: false
        },
        resolver: yupResolver(signInSchema)
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
        await loginValidationWithFirebase(data)
    };

    let btnStyle = {
        marginTop: '10px',
        marginBottom: '10px',
    }

    return (

        <Grid className='main-container'>
            <Paper elevation={10} className='main-subcontainer'>
                <form onSubmit={handleSubmit(data => {
                    console.log(data)
                    onSubmit(data)
                })}>

                    <h1 style={{ textAlign: 'center' }}> Sign in</h1>


                    <Controller
                        name="userEmail"
                        control={control}
                        defaultValue=""
                        render={({ field: { value, onChange, ...field }, errors, ref }) => (
                            <TextField
                                {...field}
                                onChange={({ target: { value } }) => {
                                    onChange(value);
                                    onNameChange(value);

                                }}
                                placeholder="Enter your email"
                                variant="outlined"
                                label="UserEmail"
                                error={Boolean(errors && errors.name)}
                                helperText={(errors && errors.name && errors.name.message)}
                                inputRef={ref}
                                style={{ marginBottom: 8 }}

                            />
                        )}

                    />


                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        render={({ field: { value, onChange, ...field }, errors, ref, setError }) => (
                            <TextField
                                {...field}
                                onChange={({ target: { value } }) => {
                                    onChange(value);
                                    onNameChange(value);

                                }}
                                placeholder="Enter your password"
                                variant="outlined"
                                label="Password"
                                error={Boolean(errors && errors.name)}
                                helperText={(errors && errors.name && errors.name.message)}
                                inputRef={ref}
                                style={{ marginBottom: 8 }}

                            />
                        )}

                    />
                    <Controller
                        name="role"
                        control={control}
                        defaultValue=""
                        render={({ field: { value, onChange, ...field }, errors, ref, setError }) => (
                            <select
                                onChange={({ target: { value } }) => {
                                    onChange(value);
                                    onNameChange(value);

                                }}

                            >

                                <option value="Role">Role</option>
                                <option value="Admin">Admin</option>
                                <option value="User">User</option>
                            </select>
                        )}

                    />
                    <Typography>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    name="checkedB"
                                    color="primary"
                                />
                            }
                            label="Remember me"
                        />
                    </Typography>
                    <Button role="button" color='primary' variant="contained" type="submit" style={btnStyle} text='Sign in' />

                    <Link >Forgot password?</Link>
                    <Typography>
                        Do you have an account?
                        <Link href='/signup' >Sign up</Link>
                    </Typography>

                    {/* <button onClick={() => console.log("credential", credential)}>data</button> */}

                </form>
            </Paper>

        </Grid>)



}
export default Login;
