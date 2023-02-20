import React from 'react'
import Table from 'react-bootstrap/Table';
import ManagerTableRow from './ManagerTableRow';



const ManagerTable = ({ timesheet, getManagerTimesheetdata,acessToken}) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            {/* <th>Timesheet ID</th> */}
            <th>Resource Name</th>
            <th>Period Start</th>
            <th>Period End</th>
            <th>Extra Hours</th>
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
          {timesheet.map((item, key) => {
            return (
              <tr key={key} >
                <ManagerTableRow item={item} getManagerTimesheetdata={getManagerTimesheetdata} acessToken={acessToken}/>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  )
}

export default ManagerTable;