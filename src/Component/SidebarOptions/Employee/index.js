import * as React from 'react';
import './style.css'
import { createEmployeeCollection, db, getDatafromUserCollection, getSingleEmpInfo } from '../../firebase';
import { useOutletContext } from "react-router-dom";
import EducationalInfo from './educationalInfo';
import PersonalInfo from './personalInfo';
import Designation from './designation';
import Button from '../../generic/Button';
import { Paper, Box } from '@material-ui/core';


export default function EmployeeDetails(props) {

    const [containerState] = useOutletContext();
    const [page, setPage] = React.useState(0);
    const [post, setPost] = React.useState([])
    const [allEmp, setAllEmp] = React.useState([])
    const [isDisable, setIsDisable] = React.useState(false)
    const [isDisable1, setIsDisable1] = React.useState(false)
    const [isDisable2, setIsDisable2] = React.useState(false)
    const [employeeInformation, setEmployeeInformation] = React.useState({
        personalInfo: {},
        educationalInfo: {},
        designation: {},
        uid: containerState.uid
    });
    const formHeading = ["Personal Information", "Educational Information", "Designation"];

    /**
     * 
     * @returns Form Page
     */
    const PageDisplay = () => {
        if (page == "0") {
            return <PersonalInfo employeeInformation={employeeInformation} setEmployeeInformation={setEmployeeInformation} handleFormSubmit={handleFormSubmit} setIsDisable={setIsDisable} isDisable={isDisable} page={page} />
        } else if (page == "1") {
            return <EducationalInfo employeeInformation={employeeInformation} setEmployeeInformation={setEmployeeInformation} handleFormSubmit={handleFormSubmit} setIsDisable1={setIsDisable1} isDisable1={isDisable1} page={page} />
        } else {
            return <Designation employeeInformation={employeeInformation} setEmployeeInformation={setEmployeeInformation} handleFormSubmit={handleFormSubmit} setIsDisable2={setIsDisable2} isDisable2={isDisable2} page={page} />
        }
    }

    React.useEffect(() => {
        async function fetchData() {
            if (containerState.role == 'Admin') {
                await getDatafromUserCollection(setAllEmp)
            }
            await getSingleEmpInfo(containerState.uid, setPost)
        }
        fetchData();
    }, [])

    React.useEffect(() => {
        let employeInfo = post
        if (employeInfo != undefined) {
            let obj = employeInfo[0]
            let personalInfoValue = obj && obj.personalInfo
            let designationInfoValue = obj && obj.designation
            let educationalInfoValue = obj && obj.EducationalInfo
            setEmployeeInformation((current) => ({ ...current, personalInfo: { ...personalInfoValue }, designation: { ...designationInfoValue }, educationalInfo: { ...educationalInfoValue } }))
        }

    }, [post])

    /**
     * --------------------Here we store Form data in Firebase------------------
     */
    const handleFormSubmit = () => {
        let obj = { ...employeeInformation };
        /**---------Firebase EMPLOYEE COLLECTION------------ */
        createEmployeeCollection(obj)
    }


    return (

        // **-------------------------------------------Multisteper Form----------------------------------------------------------------
        <Box>
            <Box>

                <Box style={{ borderColor: 'red' }}>
                    <Box className='progressbar' >
                        {/* <Box style={{ width: page == 0 ? "33.3%" : page == 1 ? "66.6%" : "100%", backgroundColor: page == 2 ? "blue" : "red", height: '7px' }}></Box> */}
                        <Box className='progress-step progress-step-active' data-title='Personal'></Box>
                        <Box className='progress-step ' data-title='Education'></Box>
                        <Box className='progress-step ' data-title='Designation'></Box>
                    </Box>
                    <Box >
                        <Box>
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
                        </Box>
                        <Box className='form'>

                           {/* -------------------->HEADING--------------- */}
                            <Box className='form-header'>
                                <h1>{formHeading[page]}</h1>
                            </Box>

                            {/* ------------PAGES RENDER---------- */}
                            <Box >{PageDisplay()}</Box>

                            {/* -------------FOOTER------------ */}
                            <Box className='footer' >
                                <Button disabled={page === 0} className='employee-Btn' color='primary' variant="contained" type='submit' text='PREV' onClick={() => setPage((currentPage) => currentPage - 1)} />
                                <Button disabled={page === 2} color='primary' className='employee-Btn' variant="contained" type='submit' text={'NEXT'} onClick={() => {
                                    setPage((currentPage) => currentPage + 1)
                                }} />
                            </Box>
                        </Box>
                    </Box>

                </Box>
            </Box>
        </Box>
    )
}