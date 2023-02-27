import React from 'react'
import ApprovalCards from './ApprovalCards';
import EmployeeTable from './EmployeeTable';
import ManagerTable from './ManagerTable';

const UserTable = ({ employeeTimesheet, managerTimesheet, role, getManagerTimesheetdata, acessToken }) => {
    if (role === "Employee") {
        var employee;
        if(employeeTimesheet[0])
            employee=employeeTimesheet[0].resourceName;
        return (
            <div className = "tableOuter">
                <div className="hellouser">
                    Hello {employee}
                </div>
                <EmployeeTable employeeTimesheet={employeeTimesheet} />;
            </div>
        )
    }
    else {
        var manager;
        if(managerTimesheet[0])
            manager =managerTimesheet[0].projectManager
        return (
            <div className = "table-Outer">
                <div className="hellouser">
                    Hello {manager}
                </div>
                <ManagerTable timesheet={managerTimesheet} getManagerTimesheetdata={getManagerTimesheetdata} acessToken={acessToken} />
                </div>
        )
    }
    // console.log("employeeTimesheet",employeeTimesheet);
}

export default UserTable;