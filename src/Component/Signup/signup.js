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
        companyName: '',
        userEmail: '',
        password: '',
        companyImage: '',
    });
    const [errorMsg, setErrorMsg] = useState('');
    const [signupButtonDisabled, setSignupButtonDisabled] = useState(false);
    const [image, setImage] = useState('');
    const navigate = useNavigate();

    /**
     * this funtion save data in firebase
     */
    const saveData = async () => {

        //     console.log("Signupbutton")
        //   if(!credential.userEmail||!credential.companyName||!credential.password||!image){
        //     setErrorMsg("Please fill all fields.");

        // }
        // setErrorMsg("");  

        //   console.log("userEmail",credential.userEmail);
        //   console.log("companyName",credential.companyName);
        //   console.log("password",credential.password);
        //   setSignupButtonDisabled(true);
        await createUserWithEmailAndPassword(auth, credential.userEmail, credential.password)
            .then(async (res) => {
                console.log(res);
                setSignupButtonDisabled(false);
                const { user } = res;
                console.log("user", user);
                await updateProfile(user, { displayName: credential.companyName, photoURL: image })
                createUserCollection(user, credential.password);
                navigate('/dashboard', { state: { state: { uid: user.uid, name: user.displayName } } })
            })
            .catch((err) => {
                console.log(err)
                setSignupButtonDisabled(false);
                // setErrorMsg(err.message);
            })

    }
    // let btnStyle={
    //     marginTop:'10px',
    //     marginBottom:'10px',
    // }

    // return(
    // <div>
    //     <h1>Signup</h1>
    //     <input type='text' name="name" placeholder='Enter Companny Name'   onChange={(e)=>setCredential((prev)=>({...prev,name:e.target.value}))}/>
    //     <input type='email' name="email" placeholder='Enter email' value={credential.email} onChange={(e)=>setCredential((prev)=>({...prev,email:e.target.value}))}/>
    //     <input type='password' name="password" placeholder='Enter Your Password' value={credential.password} onChange={(e)=>setCredential((prev)=>({...prev,password:e.target.value}))}/>
    //     <input type='file' name='file' onChange={(e)=>{console.log(e.target.files[0].name)
    //         setImage(e.target.files[0].name)}
    //     }/>
    //     <b>{errorMsg}</b>
    //     <button disabled={signupButtonDisabled} onClick={handleSignup}>Signup</button>
    //     <p>Already have an account?<button onClick={()=>navigate('/')}>Login</button></p>
    // </div>
    // <Grid className='main-container'>
    // <Paper elevation={10} className='main-subcontainer'>
    //    <h1 style={{paddingLeft:'8rem'}}> Sign up</h1> 
    // <TextField  label="Company name"   type='text' name="companyName" placeholder='Enter Companny Name'  fullWidth required  onChange={(e) => setCredential((prev) => ({ ...prev, companyName: e.target.value }))}/>       
    // <TextField  label="Email"  type='email' name="userEmail" placeholder='Enter your email'  fullWidth required onChange={(e) => setCredential((prev) => ({ ...prev, userEmail: e.target.value }))}/> 
    // <TextField  label="Password"   type='password' name="password" placeholder='Enter Your Password'  fullWidth required  onChange={(e) => setCredential((prev) => ({ ...prev, password: e.target.value }))}/>       
    // <TextField  label="Company image"  type='file' name="file"  fullWidth required onChange={(e)=>{console.log(e.target.files[0].name)
    //         setImage(e.target.files[0].name)}
    //     }/>       

    // <TextField label={"Company name"} type={'text'} placeholder={"Enter Companny Name"}  onChange={(e) => {setCredential((prev) => ({ ...prev, companyName: e.target.value }))}}/>
    // <TextField label={"Email"} type={'email'} placeholder={"Enter  your email"}  onChange={(e) => {setCredential((prev) => ({ ...prev, userEmail: e.target.value }))}}/>
    // <TextField label={"Password"} type={'password'} placeholder={"Enter your password"}  onChange={(e) => {setCredential((prev) => ({ ...prev, password: e.target.value }))}}/>
    // <TextField  type={'file'}  value={credential.email} onChange={(e)=>{console.log(e.target.files[0].name)
    // setImage(e.target.files[0].name)}}/> 

    // <Typography>{errorMsg}</Typography>
    // <Button disabled={signupButtonDisabled} color='primary' variant="contained" style={btnStyle} onClick={handleSignup} text='Sign up'/>

    // <Button disabled={signupButtonDisabled} color='primary' variant="contained" fullWidth style={btnStyle} onClick={handleSignup}>Sign up</Button> */}
    // <Typography>
    // Already have an account?
    //         <Link href='/login' >Sign in</Link>
    //     </Typography>
    // </Paper>

    // </Grid>
    // )


    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // const initialValues = {
    //     companyName: "",
    //     userEmail: "",
    //     validationSchema: signUpSchema,
    //     password: "",
    //     file: "",
    // }
    let obj = {
    }
    // const { values, handleChange, handleBlur, handleSubmit, errors, touched } = useFormik({
    //     initialValues: { initialValues },
    //     validationSchema: signUpSchema,
    //     onSubmit: (values) => {
    //         // setCredential(values.initialValues)
    //         // {...obj,companyName:values.companyName}
    //         obj.companyName = values.companyName
    //         obj.companyImage = values.companyImage
    //         obj.file = values.file
    //         obj.password = values.password
    //         obj.userEmail = values.userEmail
    //         setCredential({ ...obj });
    //         console.log("values", obj);
    //         saveData(); //this function save data in firebase

    //     }
    // })
    // console.log("errors",errors)
    // console.log("th",touched)

    let btnStyle = {
        marginTop: '10px',
        marginBottom: '10px',
    }
    // const { register, handleSubmit, formState: { errors }, trigger } = useForm({
    //     resolver: yupResolver(signUpSchema),
    // });


    // const onSubmitHandler = (data) => {

    //     console.log("formData", data)
    // }
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
        console.log("submitted ", data);
        setCredential((curr)=>({...curr,
            companyName: data.companyName,
            userEmail: data.userEmail,
            password: data.password,
            companyImage: data.file,
        }))
        saveData();
    };
    const ref = React.useRef()
    return (
        <Grid className='main-container'>
            <Paper elevation={10} className='main-subcontainer'>
                <form onSubmit={handleSubmit(data => {
                    console.log("data",data)
                    onSubmit(data)
                })}>
                    <h1 style={{ textAlign: 'center' }}> Sign up</h1>
                    {/* <TextField {...register("companyName")} label="Company name" type='text' name="companyName"   />
                    <TextField label="Email" type='email' name="userEmail" placeholder='Enter your email'       error={Boolean(errors.userEmail)} helperText={(errors.userEmail ) ? errors.userEmail : null}  />
                    <TextField label="Password" type='password' name="password" placeholder='Enter Your Password'      error={Boolean(errors.password)}  helperText={(errors.password ) ? errors.password : null}  />
                    <TextField type='file' name="file"      error={Boolean(errors.file)}  helperText={errors.file}  /> */}

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
                        name="file"
                        control={control}
                        defaultValue=""
                        render={({ field: { value, onChange, ...field }, errors, ref }) => (
                            <TextField
                                {...field}
                                onChange={({ target: { value } }) => {
                                    onChange(value);
                                    onNameChange(value);

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
