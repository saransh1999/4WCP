import React from 'react'
<<<<<<< HEAD
import BootstrapTable from 'react-bootstrap-table-next';


const EmployeeTable = ({ employeeTimesheet }) => {

    const columns = [
        {
            dataField: 'periodStart',
            text: 'Period Start',
            sort: true
        }, {
            dataField: 'periodEnd',
            text: 'Period End',
            sort: true
        }, {
            dataField: 'hours',
            text: 'Hours',
            sort: true
        }, {
            dataField: 'approvalStatus',
            text: 'Approval Status',
            sort: true
        }, {
            dataField: 'customerName',
            text: 'Customer Name',
            sort: true
        }, {
            dataField: 'projectName',
            text: 'Project Name',
            sort: true
        }, {
            dataField: 'projectManager',
            text: 'Project Manager',
            sort: true
        }
    ];

    return (

        <>
            <BootstrapTable keyField='id' 
            data={employeeTimesheet} 
            columns={columns}
            bordered
            striped
            hover
          />
        </>
    )
}

export default EmployeeTable;
=======
import Table from 'react-bootstrap/Table';
const EmployeeTable =  ({employeeTimesheet}) => {
    return (
      <div>
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
                      {employeeTimesheet.map((item,key) => {
                          return (
                              <tr key = {key} >
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

export default EmployeeTable;
>>>>>>> API1
