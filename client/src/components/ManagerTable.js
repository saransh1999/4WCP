import React from 'react'
<<<<<<< HEAD
import BootstrapTable from 'react-bootstrap-table-next';
import Button from 'react-bootstrap/Button';
import axios from "axios";



const ManagerTable = ({ timesheet, getManagerTimesheetdata, acessToken }) => {

  const getExtraHours = (cell, row) => {
    var extrahours = row.hoursDone - row.hoursRequired;
    if (extrahours < 0) {
      extrahours = -1 * extrahours;
      extrahours = "Resource Uderutilized by " + extrahours + " hours";
      return (
        <>
          {extrahours}
        </>
      )
    }
      else {
      return (
        <>
          {extrahours}
        </>
      )
    }
  
  }
  
  const getApproval = (cell, row) => {
    const itemId = row.id;
    const approvecall = async() =>
      {
          const id=itemId;
          const approvalStatus="Approved";
          try
          {
              const response = await axios.post("http://localhost:5001/Manager",{id,approvalStatus,acessToken});
              getManagerTimesheetdata();
          }
          catch (err)
          {
              console.log("aprove call error called");
              console.log(err.response);
          }
      }
      const denycall = async() =>
      {
          const id=itemId;
          const approvalStatus="Draft";
          try
          {
              const response = await axios.post("http://localhost:5001/Manager",{id,approvalStatus});
              getManagerTimesheetdata();
          }
          catch (err)
          {
              console.log(err);
          }
      }
      var extrahours = row.hoursDone - row.hoursRequired;
    if (extrahours < 0) {
      extrahours = -1 * extrahours;
      extrahours = "Resource Uderutilized by " + extrahours + " hours";
      return (
        <>
        </>
      )
    }
      if (row.approvalStatus === "Awaiting Approval") {
          return (
              <>
                  <Button variant="success" onClick={approvecall}>Approve</Button>
                  <Button variant="danger" onClick={denycall}>Deny</Button>
              </>
          );
      }
      else if (row.approvalStatus === "Approved") {
          return (
              <>
                  <Button variant="success" disabled>Approved</Button>
              </>
          );
      }
      else if (row.approvalStatus === "Draft") {
          return (
              <>
                  <Button variant="danger" disabled>Denied</Button>
              </>
          );
      }
  }

  const columns = [
    {
      dataField: 'resourceName',
      text: 'Resource Name',
      sort: true,
      style: (cell, row, rowIndex, colIndex) => {
        if (rowIndex % 2 === 0) {
          return {
            backgroundColor: '#d9d9d9'
          };
        }
      }
    },
    {
      dataField: 'periodStart',
      text: 'Week Start Time',
      sort: true,
      style: (cell, row, rowIndex, colIndex) => {
        if (rowIndex % 2 === 0) {
          return {
            backgroundColor: '#d9d9d9'
          };
        }
      }
    }, {
      dataField: 'customerName',
      text: 'Customer Name',
      sort: true,
      style: (cell, row, rowIndex, colIndex) => {
        if (rowIndex % 2 === 0) {
          return {
            backgroundColor: '#d9d9d9'
          };
        }
      }
    }, {
      dataField: 'projectName',
      text: 'Project Name',
      sort: true,
      style: (cell, row, rowIndex, colIndex) => {
        if (rowIndex % 2 === 0) {
          return {
            backgroundColor: '#d9d9d9'
          };
        }
      }
    },{
      dataField: 'hours',
      text: 'Extra Hours',
      sort: true,
      formatter: getExtraHours,
      style: (cell, row, rowIndex, colIndex) => {
        if (rowIndex % 2 === 0) {
          return {
            backgroundColor: '#d9d9d9'
          };
        }
      }
    }, {
      dataField: 'approvalStatus',
      text: 'Approval Status',
      sort: true,
      formatter: getApproval,
      style: (cell, row, rowIndex, colIndex) => {
        if (rowIndex % 2 === 0) {
          return {
            backgroundColor: '#d9d9d9'
          };
        }
      }
    }
  ];

  return (
    <>
      <BootstrapTable keyField='id' data={timesheet} columns={columns} />
    </>
  )
}

export default ManagerTable;
  // <div>
  //   <Table striped bordered hover>
  //     <thead>
  //       <tr>
  //         {/* <th>Timesheet ID</th> */}
  //         <th>Resource Name</th>
  //         <th>Period Start</th>
  //         <th>Period End</th>
  //         <th>Extra Hours</th>
  //         <th>Approval Status</th>
  //         <th>Timesheet Number</th>
  //         <th>Vertical</th>
  //         <th>Horizontal</th>
  //         <th>Sub Horizontal</th>
  //         <th>customerId</th>
  //         <th>customerName</th>
  //         <th>projectId</th>
  //         <th>projectName</th>
  //         <th>projectManager</th>

  //       </tr>
  //     </thead>
  //     <tbody>
  //       {timesheet.map((item, key) => {
  //         return (
  //           <tr key={key} >
  //             <ManagerTableRow item={item} getManagerTimesheetdata={getManagerTimesheetdata} acessToken={acessToken}/>
  //           </tr>
  //         );
  //       })}
  //     </tbody>
  //   </Table>
  // </div>
=======
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
>>>>>>> API1
