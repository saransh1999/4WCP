import React from 'react'
import Navbar from './Navbar'
import Table from 'react-bootstrap/Table';


const UserDashboard = ({ callLogout, timesheet }) => {
    const onLogout = () => {
        callLogout();

    }
    // console.log(timesheet);
    return (
        <div>
            <Navbar onLogoutclick={onLogout} />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Resource Name</th>
                        <th>Period Start</th>
                        <th>Period End</th>
                        <th>Hours</th>
                        <th>Approval Status</th>
                        <th>Timesheet Number</th>
                        <th>Vertical</th>
                        <th>Horizontal</th>
                        <th>Sub Horizontal</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        timesheet.map((val, key) => {
                            return (
                                <tr key={key}>
                                    <td>{val.ID}</td>
                                    <td>{val['Resource Name']}</td>
                                    <td>{val["Period Start"]}</td>
                                    <td>{val["Period End"]}</td>
                                    <td>{val["Hours"]}</td>
                                    <td>{val["Approval Status"]}</td>
                                    <td>{val["Timesheet Number"]}</td>
                                    <td>{val["Vertical"]}</td>
                                    <td>{val["Horizontal"]}</td>
                                    <td>{val["Sub Horizontal"]}</td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>

        </div>
    )
}

export default UserDashboard

