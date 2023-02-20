import React from 'react'
import EmployeeTable from './EmployeeTable';
import ManagerTable from './ManagerTable';


const UserTable = ({employeeTimesheet,managerTimesheet, role,getManagerTimesheetdata,acessToken}) => {
    if(role === "Employee")
    {
        return <EmployeeTable employeeTimesheet = {employeeTimesheet}/>;
    }
    else
    {
        return <ManagerTable timesheet = {managerTimesheet} getManagerTimesheetdata={getManagerTimesheetdata} acessToken={acessToken}/>
    }
    // console.log("employeeTimesheet",employeeTimesheet);
}

export default UserTable;