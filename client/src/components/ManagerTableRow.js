import React from 'react'
import ApprovalButton from './ApprovalButton';


const ManagerTableRow = ({ item, getManagerTimesheetdata}) => {

    var extrahours = item.hoursDone - item.hoursRequired;
    if(extrahours<0)
    {
        extrahours = -1*extrahours;
        extrahours = "Resource Uderutilized "+extrahours+" hours";
    }
    
    return (
        <>
            <td>{item.resourceName}</td>
            <td>{item.periodStart}</td>
            <td>{item.periodEnd}</td>
            <td>{extrahours}</td>
            <td>
                <ApprovalButton approvalStatus={item.approvalStatus} getManagerTimesheetdata={getManagerTimesheetdata} itemId={item.id}/>
            </td>
            <td>{item.timesheetNumber}</td>
            <td>{item.vertical}</td>
            <td>{item.horizontal}</td>
            <td>{item.subHorizontal}</td>
            <td>{item.customerId}</td>
            <td>{item.customerName}</td>
            <td>{item.projectId}</td>
            <td>{item.projectName}</td>
            <td>{item.projectManager}</td>
        </>
    )
}

export default ManagerTableRow;