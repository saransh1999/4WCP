import React from 'react'
import EmployeeTable from './EmployeeTable';
import ManagerTable from './ManagerTable';
import Navbar from './Navbar'
import UserTable from './UserTable';
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';


const UserDashboard = ({ callLogout, employeeTimesheet, managerTimesheet, role, getManagerTimesheetdata, acessToken }) => {
    const onLogout = () => {
        callLogout();

    }
    const { collapseSidebar } = useProSidebar();
    return (
        <>
            <Navbar onLogoutclick={onLogout} />
            <div className="d-flex justify-content-start">
                <div>
                    <Sidebar>
                        <Menu>
                            <MenuItem> <main>
                                <button onClick={()=>collapseSidebar()} className="sidebar-button">
                                    <span className="dash"></span>
                                    <span className="dash"></span>
                                    <span className="dash"></span>
                                </button>
                            </main></MenuItem>
                            <MenuItem> Dashboard</MenuItem>
                            <MenuItem> Landing Page</MenuItem>
                            <MenuItem> About us</MenuItem>
                        </Menu>
                    </Sidebar>

                </div>
                <UserTable employeeTimesheet={employeeTimesheet} managerTimesheet={managerTimesheet} role={role} getManagerTimesheetdata={getManagerTimesheetdata} acessToken={acessToken} />
            </div>

        </>
    )
}

export default UserDashboard

