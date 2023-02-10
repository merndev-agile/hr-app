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
import ProtectedRoutes from '../../ProtectedRoutes/index.js';
function Login({ isAuth, setAuth }) {
    console.log("handleAuth in login comonent", isAuth, setAuth)
    const [credential, setCredential] = useState(
        {
            userEmail: '',
            password: '',
        }
    );
    const [LoginButtonDisabled, setLoginButtonDisabled] = useState(false);
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal);
    const loginValidationWithFirebase = async ({ userEmail, password, role }) => {
        await signInWithEmailAndPassword(auth, userEmail, password)
            .then(async (res) => {
                setLoginButtonDisabled(false);
                MySwal.fire({
                    title: "Success",
                    text: "Login successful",
                    icon: "success",
                    confirmButtonText: "OK",
                })
                const { user } = res;

                navigate('/home', { state: { uid: user.uid, name: user.displayName, role: role } })
            })
            .catch((err) => {
                setLoginButtonDisabled(false);
                MySwal.fire({
                    title: "Error",
                    text: err.message,
                    icon: "error",
                    confirmButtonText: "Cancel",
                    width: '20rem',
                    height: '1rem'
                })
            })
    }

    // ------------------------------------------------------Here we create React hook form--------------

    const { register, handleSubmit, formState: { errors }, control, trigger } = useForm({
        defaultValues: {
            name: false
        },
        resolver: yupResolver(signInSchema)
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
        console.log("submitted ", data);
        await loginValidationWithFirebase(data);
    };
    let btnStyle = {
        marginTop: '10px',
        marginBottom: '10px',
    }
    return (

        <Grid className='main-container'>
            <Paper elevation={10} className='main-subcontainer'>
                <form onSubmit={handleSubmit(data => {
                    console.log(data);
                    setAuth(true)
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
                </form>
            </Paper>
        </Grid>)
}
export default Login;
