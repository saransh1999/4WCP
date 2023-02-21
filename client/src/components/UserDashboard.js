import React from 'react'
import EmployeeTable from './EmployeeTable';
import ManagerTable from './ManagerTable';
import Navbar from './Navbar'
import UserTable from './UserTable';
import Card from './Cards';
import Sidebar from './Sidebar';

const UserDashboard = ({ callLogout, employeeTimesheet,managerTimesheet, role ,getManagerTimesheetdata,acessToken }) => {
    const onLogout = () => {
        callLogout();
        
    }

    return (
        <div>
            <Sidebar employeeTimesheet={employeeTimesheet} managerTimesheet={managerTimesheet} role ={role} getManagerTimesheetdata={getManagerTimesheetdata} acessToken={acessToken}/>
            {/* <UserTable  employeeTimesheet={employeeTimesheet} managerTimesheet={managerTimesheet} role ={role} getManagerTimesheetdata={getManagerTimesheetdata} acessToken={acessToken}/> */}
        </div>
    )
}

export default UserDashboard

