import React from 'react'
import Navbar from './Navbar'
import Table from 'react-bootstrap/Table';


const UserDashboard = ({ callLogout, timesheet }) => {
    const onLogout = () => {
        callLogout();

    }
    console.log(timesheet);
    return (
        <div>
            <Navbar onLogoutclick={onLogout} />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        {/* <th>Timesheet ID</th> */}
                        <th>Resource Name</th>
                        <th>Period Start</th>
                        <th>Period End</th>
                        <th>Hours</th>
                        <th>Approval Status</th>
                        <th>Timesheet Number</th>
                        <th>Vertical</th>
                        <th>Horizontal</th>
                        <th>Sub Horizontal</th>
                        <th>customerId</th>
                        <th>customerName</th>
                        <th>projectId</th>
                        <th>projectName</th>
                        <th>projectManager</th>

                    </tr>
                </thead>
                <tbody>
                    {timesheet.map(item => {
                        return (
                            <tr key={item.timesheetNumber}>
                                {/* <td>{item.timesheetNumber}</td> */}
                                <td>{item.resourceName}</td>
                                <td>{item.periodStart}</td>
                                <td>{item.periodEnd}</td>
                                <td>{item.hours}</td>
                                <td>{item.approvalStatus}</td>
                                <td>{item.timesheetNumber}</td>
                                <td>{item.vertical}</td>
                                <td>{item.horizontal}</td>
                                <td>{item.subHorizontal}</td>
                                <td>{item.customerId}</td>
                                <td>{item.customerName}</td>
                                <td>{item.projectId}</td>
                                <td>{item.projectName}</td>
                                <td>{item.projectManager}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>

        </div>
    )
}

export default UserDashboard

