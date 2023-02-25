import React from 'react'
// import BootstrapTable from 'react-bootstrap-table-next';


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
            {/* <BootstrapTable keyField='id' 
            data={employeeTimesheet} 
            columns={columns}
            bordered
            striped
            hover
          /> */}
        </>
    )
}

export default EmployeeTable;
