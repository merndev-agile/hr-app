import * as React from 'react';
// import './index.css';
import './style.css'
import { createEmployeeCollection, db, getDatafromUserCollection, getSingleEmpInfo } from '../../firebase';

import SideBar from '../../Menu/sideBar';
// import { useLocation } from 'react-router-dom';
import { useOutletContext } from "react-router-dom";
import EducationalInfo from './educationalInfo';
import PersonalInfo from './personalInfo';
import Designation from './designation';
import Button from '../../generic/Button';
import { Grid, Paper } from '@material-ui/core';


export default function EmployeeDetails(props) {
    // const { containerState}=useLocation();
    const [containerState] = useOutletContext();
    const [page, setPage] = React.useState(0);
    const [post, setPost] = React.useState([])
    const [allEmp, setAllEmp] = React.useState([])



    const [employeeInformation, setEmployeeInformation] = React.useState({
        personalInfo: {},
        educationalInfo: {},
        designation: {},
        uid: containerState.uid
    });
    console.log("containerState----------------->", containerState)
    const formHeading = ["Personal Information", "Educational Information", "Designation"];
    const PageDisplay = () => {
        console.log("pageDisplay")
        if (page == "0") {
            console.log("000")
            return <PersonalInfo employeeInformation={employeeInformation} setEmployeeInformation={setEmployeeInformation} handleFormSubmit={handleFormSubmit} />
        } else if (page == "1") {
            return <EducationalInfo employeeInformation={employeeInformation} setEmployeeInformation={setEmployeeInformation} handleFormSubmit={handleFormSubmit} />
        } else {
            return <Designation employeeInformation={employeeInformation} setEmployeeInformation={setEmployeeInformation} handleFormSubmit={handleFormSubmit} />
        }
    }
    console.log("containerStatein employe------", containerState)
    //    console.log("empUidOutlet---",employeeInformation.uid)

    React.useEffect(() => {
        // setEmployeeInformation((current)=>({...current,uid:containerState.uid}))
        async function fetchData() {
            console.log("EMPLOYEE USEFFECT--")
            if (containerState.role == 'Admin') {

                await getDatafromUserCollection(setAllEmp)
            }
            await getSingleEmpInfo(containerState.uid, setPost)


        }
        fetchData();

    }, [])
    React.useEffect(() => {
        console.log("POST___", post)
        let employeInfo = post
        console.log("employeInfo-----------", employeInfo)
        if (employeInfo != undefined) {
            let obj = employeInfo[0]
            let personalInfoValue = obj && obj.personalInfo
            let designationInfoValue = obj && obj.designation
            let educationalInfoValue = obj && obj.EducationalInfo
            console.log("EmployeeSingleInfo============", obj)
            setEmployeeInformation((current) => ({ ...current, personalInfo: { ...personalInfoValue }, designation: { ...designationInfoValue }, educationalInfo: { ...educationalInfoValue } }))
            // setEmployeeInformation({ personalInfo:personalInfoValue,designation:designationInfoValue ,educationalInfo:educationalInfoValue})
        }

    }, [post])


    const handleFormSubmit = () => {
        // e.preventDefault();
        console.log("handleFormSubmit", employeeInformation);
        // setEmployeeInformation((prevState) => ({ ...prevState, uid: containerState.uid }));
        let obj = { ...employeeInformation };
        console.log("obj", obj)
        createEmployeeCollection(obj)
        // setEmployeeInformation({})
    }


    return (

        // -------------------------------------------Multisteper Form----------------------------------------------------------------
        <Grid>
            {/* <Grid>
                emp list
            </Grid> */}
            <Grid>

                <Paper>
                    <div className='progressbar' >
                        <div style={{ width: page == 0 ? "33.3%" : page == 1 ? "66.6%" : "100%", backgroundColor: page == 2 ? "blue" : "red", height: '7px' }}></div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <div>
                            {containerState.role == 'Admin' &&
                                <Paper>
                                    <h2>Employee names</h2>
                                    <ul>
                                        {
                                            containerState.role == 'Admin' && allEmp.map((obj) => {
                                                return <li>{obj.personalInfo.name}</li>
                                            })
                                        }
                                    </ul>
                                </Paper>
                            }
                        </div>
                        <div className='form'>
                            <div className='header'>
                                <h1>{formHeading[page]}</h1>
                            </div>
                            <select name="cars" id="cars"
                                onChange={(e) => {
                                    console.log("selectedVal", e.target.value)
                                    setPage(e.target.value)

                                }}>

                                <option value="0">personalInfo</option>
                                <option value="1">educationalInfo</option>
                                <option value="2">desiganation</option>
                            </select>
                            <div className='body' style={{ marginRight: '30%' }}>{PageDisplay()}</div>
                            {/* <div className='footer' >
                                <Button disabled={page === 0} className='employee-Btn' color='primary' variant="contained" type='submit' text='PREV' onClick={() => setPage((currentPage) => currentPage - 1)} />
                                <Button type='submit' color='primary' className='employee-Btn' variant="contained" text={page === (formHeading.length - 1) ? 'SUBMIT' : 'NEXT'} onClick={() => {
                                    if (page === (formHeading.length - 1)) {
                                        handleFormSubmit();
                                    } else {
                                        setPage((currentPage) => currentPage + 1)
                                    }
                                }} />
                            </div> */}
                            <button onClick={() => console.log("firebaseDatain emp=>", employeeInformation)}>data</button>
                        </div>
                    </div>

                </Paper>
            </Grid>
        </Grid>
    )
}