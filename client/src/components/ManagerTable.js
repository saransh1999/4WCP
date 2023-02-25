import React from 'react'
import ApprovalCards from './ApprovalCards';
import DataTable from 'react-data-table-component';
import ApprovalButton from './ApprovalButton';
import styled from 'styled-components';
import Button from './Button';
import { useState, useMemo } from 'react';
const calcExtraHours = (row) => {
  const extraHours = row.hoursDone - row.hoursRequired;

  if (extraHours < 0)
    return ("Underutilized " + -1 * extraHours + " hours");

  return extraHours;
}
const TextField = styled.input`
	height: 32px;
width: 200px;
	border-radius: 3px;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	border: 1px solid #e5e5e5;
 padding: 0 32px 0 16px;

	&:hover {
		cursor: pointer;
	}
`;

const ClearButton = styled(Button)`
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	height: 34px;
	width: 32px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <>
    <TextField
      id="search"
      type="text"
      placeholder="Filter By Name"
      aria-label="Search Input"
      value={filterText}
      onChange={onFilter}
    />
    <ClearButton type="button" onClick={onClear}>
      X
    </ClearButton>
  </>
);

const ManagerTable = ({ timesheet, getManagerTimesheetdata, acessToken }) => {

  const [filterText, setFilterText] = React.useState('');
  const [approvalFilter, setApprovalFilter] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);

  const filteredItems = timesheet.filter(
    item => {
      if(approvalFilter==="Awaiting Approval")
      {
        const extraHours = item.hoursDone - item.hoursRequired;
        return item.resourceName && item.resourceName.toLowerCase().includes(filterText.toLowerCase())
        && item.approvalStatus.toLowerCase().includes(approvalFilter.toLowerCase())&&extraHours>0
      }
      else
      {
        return item.resourceName && item.resourceName.toLowerCase().includes(filterText.toLowerCase())
        && item.approvalStatus.toLowerCase().includes(approvalFilter.toLowerCase())
      }
    },
  );

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText('');
      }
    };

    return (
      <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
    );
  }, [filterText, resetPaginationToggle]);

  const approvalcall = (row) => {
    const extraHours = row.hoursDone - row.hoursRequired;

    if (extraHours < 0)
      return (<></>)
    return (
      <ApprovalButton approvalStatus={row.approvalStatus} getManagerTimesheetdata={getManagerTimesheetdata} itemId={row.id} acessToken={acessToken} />
    )
  }
  const columns = [
    {
      selector: row => row.resourceName,
      name: 'Employee Name',
      sortable: true
    },
    {
      selector: row => row.periodStart,
      name: 'Period Start',
      sortable: true
    }, {
      selector: row => row.periodEnd,
      name: 'Period End',
      sortable: true
    }, {
      selector: row => row.customerName,
      name: 'Customer Name',
      sortable: true
    }, {
      selector: row => row.projectName,
      name: 'Project Name',
      sortable: true
    }, {
      selector: calcExtraHours,
      name: 'Extra Hours',
      sortable: true
    }, {
      cell: approvalcall,
      minWidth: "180px",
      name: 'Approval Status'
    }
  ];

  const filterApproved =() =>
  {
    setApprovalFilter("Approved");
  }
  const filterDeny =() =>
  {
    setApprovalFilter("Draft");
  }
  const filterWaiting =() =>
  {
    setApprovalFilter("Awaiting Approval");
  }
  return (
    <div>
      <ApprovalCards timesheet={timesheet}  filterApproved={filterApproved} filterWaiting={filterWaiting} filterDeny={filterDeny} />
      <DataTable
        columns={columns}
        data={filteredItems}
        pagination
        paginationResetDefaultPage={resetPaginationToggle} //a hook to reset pagination to page 1
        subHeader
        subHeaderComponent={subHeaderComponentMemo}
        persistTableHead
      />
    </div>
  )
}

export default ManagerTable;
