import React from 'react'
import EmployeeTable from './EmployeeTable';
import ManagerTable from './ManagerTable';
import Navbar from './Navbar'
import UserTable from './UserTable';


const UserDashboard = ({ callLogout, employeeTimesheet,managerTimesheet, role ,getManagerTimesheetdata }) => {
    const onLogout = () => {
        callLogout();
        
    }

    return (
        <div>
            <Navbar onLogoutclick={onLogout} />
            <UserTable  employeeTimesheet={employeeTimesheet} managerTimesheet={managerTimesheet} role ={role} getManagerTimesheetdata={getManagerTimesheetdata}/>
        </div>
    )
}

export default UserDashboard

