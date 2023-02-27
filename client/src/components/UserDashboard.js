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
                <div
                className="align-self-stretch"
                    style={{

                        display: 'flex',
                        height: '100%',
                        minHeight: '800px',
                    }}
                >
                    <Sidebar defaultCollapsed rootStyles={{
                        background:
                            'linear-gradient(180deg, rgba(255, 150, 0,1) 0%, rgba(255, 255, 255,1) 100%)',
                    }}>
                        <Menu>
                            <MenuItem> <main>
                                <button onClick={() => collapseSidebar()} className="sidebar-button">
                                    <span className="dash"></span>
                                    <span className="dash"></span>
                                    <span className="dash"></span>
                                </button>
                            </main></MenuItem>
                            <MenuItem><div className ="sidenavelement"> Dashboard</div></MenuItem>
                            <MenuItem> <div className ="sidenavelement">Landing Page</div></MenuItem>
                            <MenuItem> <div className ="sidenavelement">About us</div></MenuItem>
                        </Menu>
                    </Sidebar>

                </div>
                <UserTable employeeTimesheet={employeeTimesheet} managerTimesheet={managerTimesheet} role={role} getManagerTimesheetdata={getManagerTimesheetdata} acessToken={acessToken} />
            </div>
            <Footer />

        </div>
    )
}

export default UserDashboard

