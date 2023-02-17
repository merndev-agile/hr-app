import * as React from 'react';
import EmployeeDetails from '../../Component/SidebarOptions/Employee/index';
import { useOutletContext } from "react-router-dom";
import { Box } from '@material-ui/core';
export default function Admin_Employee_Page() {
    const [containerState] = useOutletContext();
    console.log("-----------AdminEMp-",containerState)
    return (
        <Box>
            <Box style={{display: 'flex'}}>
                <Box style={{width: '50%'}}>AdminPAge</Box>
                <Box style={{width: '50%'}}>{EmployeeDetails}</Box>
            </Box>
        </Box>
    )
}