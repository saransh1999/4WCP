import React from 'react'
import EmployeeTable from './EmployeeTable';
import ManagerTable from './ManagerTable';


<<<<<<< HEAD
const UserTable = ({ employeeTimesheet, managerTimesheet, role, getManagerTimesheetdata, acessToken }) => {
    if (role === "Employee") {
        return (
            <div className = "tableOuter">
                <EmployeeTable employeeTimesheet={employeeTimesheet} />;
            </div>
        )
    }
    else {
        return (
            <div className = "table-Outer">
                <ManagerTable timesheet={managerTimesheet} getManagerTimesheetdata={getManagerTimesheetdata} acessToken={acessToken} />
            </div>
        )
=======
const UserTable = ({employeeTimesheet,managerTimesheet, role,getManagerTimesheetdata,acessToken}) => {
    if(role === "Employee")
    {
        return <EmployeeTable employeeTimesheet = {employeeTimesheet}/>;
    }
    else
    {
        return <ManagerTable timesheet = {managerTimesheet} getManagerTimesheetdata={getManagerTimesheetdata} acessToken={acessToken}/>
>>>>>>> API1
    }
    // console.log("employeeTimesheet",employeeTimesheet);
}

export default UserTable;