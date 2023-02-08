import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, createUserCollection } from '../firebase.js';
import { useNavigate } from 'react-router-dom';
import { Grid, Paper, Typography, Link } from '@material-ui/core';
import TextField from '../generic/TextField/index';
import Button from '../generic/Button/index';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpSchema } from '../../Pages/Signup';
function Signup() {
    const [credential, setCredential] = useState({
        // companyName: '',
        // userEmail: '',
        // password: '',
        // companyImage: '',
        // role: '',
    });
    const [errorMsg, setErrorMsg] = useState('');
    const [signupButtonDisabled, setSignupButtonDisabled] = useState(false);
    const [image, setImage] = useState('');
    const navigate = useNavigate();

    /**
     * this funtion save data in firebase
     */
    const saveData = async () => {

        console.log("credential", credential)
        await createUserWithEmailAndPassword(auth, credential.userEmail, credential.password)
            .then(async (res) => {
                console.log(res);
                setSignupButtonDisabled(false);
                const { user } = res;
                console.log("user", user);
                await updateProfile(user, { displayName: credential.companyName, photoURL: credential.file })
                createUserCollection(user, credential.password, credential.role);
                navigate('/home',  { state: { uid: user.uid, name: user.displayName, role: credential.role } })
            })
            .catch((err) => {
                console.log(err)
                setSignupButtonDisabled(false);
                // setErrorMsg(err.message);
            })

    }


    let btnStyle = {
        marginTop: '10px',
        marginBottom: '10px',
    }

    const { register, handleSubmit, formState: { errors }, control, trigger } = useForm({
        defaultValues: {
            name: false
        },
        resolver: yupResolver(signUpSchema)
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
        console.log("submitted ", data.companyName);

        saveData();
    };
    const ref = React.useRef()
    return (
        <Grid className='main-container'>
            <Paper elevation={10} className='main-subcontainer'>
                <form onSubmit={handleSubmit(data => {
                    console.log("data", data)
                    onSubmit(data)
                })}>
                    <h1 style={{ textAlign: 'center' }}> Sign up</h1>

                    <Controller
                        name="companyName"
                        control={control}
                        defaultValue=""
                        render={({ field: { value, onChange, ...field }, errors, ref }) => (
                            <TextField
                                {...field}
                                onChange={({ target: { value } }) => {
                                    onChange(value);
                                    onNameChange(value);
                                    setCredential((curr) => ({
                                        ...curr,
                                        companyName: value
                                    }))

                                }}
                                placeholder="Enter your company name"
                                variant="outlined"
                                label="Company name"
                                // error={Boolean(errors && errors.name)}
                                // helperText={(errors && errors.name && errors.name.message)}
                                inputRef={ref}
                                style={{ marginBottom: 8 }}

                            />
                        )}

                    />
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
                                    setCredential((curr) => ({
                                        ...curr,
                                        userEmail: value
                                    }))

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
                                    setCredential((curr) => ({
                                        ...curr,
                                        password: value
                                    }))

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
                        name="file"
                        control={control}
                        defaultValue=""
                        render={({ field: { value, onChange, ...field }, errors, ref }) => (
                            <TextField
                                {...field}
                                onChange={({ target: { value } }) => {
                                    onChange(value);
                                    onNameChange(value);
                                    setCredential((curr) => ({
                                        ...curr,
                                        file: value
                                    }))

                                }}
                                placeholder="Upload your company image"
                                variant="outlined"
                                label="Comapny Image"
                                error={Boolean(errors && errors.name)}
                                helperText={(errors && errors.name && errors.name.message)}
                                inputRef={ref}
                                style={{ marginBottom: 8 }}
                                type="file"

                            />
                        )}

                    />

                    <select name="cars" id="cars"
                        onChange={(e) => {
                            console.log("selectedVal", e.target.value)
                            setCredential((curr) => ({
                                ...curr,
                                role: e.target.value
                            }))

                        }}>

                        <option value="Role">Role</option>
                        <option value="Admin">Admin</option>
                        <option value="User">User</option>
                    </select>



                    <Button color='primary' variant="contained" type="submit" style={btnStyle} text='Sign up' />
                    <Typography>
                        Already have an account?
                        <Link href='/login' >Sign in</Link>
                    </Typography>
                    {/* <button onClick={() => console.log("credential", credential)}>data</button> */}

                </form>
            </Paper>

        </Grid>)

}
export default Signup;
