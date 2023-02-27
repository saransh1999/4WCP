import React from 'react'
import EmployeeTable from './EmployeeTable';
import ManagerTable from './ManagerTable';
import MyNavbar from './MyNavbar'
import UserTable from './UserTable';
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import Footer from './Footer';


const UserDashboard = ({ callLogout, employeeTimesheet, managerTimesheet, role, getManagerTimesheetdata, acessToken }) => {
    const onLogout = () => {
        callLogout();

    }
    const { collapseSidebar } = useProSidebar();
    return (
        <div>
            <MyNavbar onLogoutclick={onLogout} />
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
            <Footer/>

        </div>
    )
}

export default UserDashboard

