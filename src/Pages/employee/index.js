import { ThemeProvider } from '@material-ui/core';
import * as React from 'react';
import EmployeeDetails from '../../Component/SidebarOptions/Employee/index';
// import { customTheme } from '../customTheme';

function EmployeePage(){
    return(<div>
        {/* <ThemeProvider theme={customTheme}> */}
        <EmployeeDetails/>
        {/* </ThemeProvider> */}
        {/* EmployeeDetails */}
    </div>)
}
export default EmployeePage;