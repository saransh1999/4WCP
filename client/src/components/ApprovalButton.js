import Button from 'react-bootstrap/Button';
import axios from "axios";


const ApprovalButton = ({ approvalStatus , getManagerTimesheetdata,itemId}) => {
    

    const approvecall = async() =>
    {
        const id=itemId;
        const approvalStatus="Approved";
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

    if (approvalStatus === "Awaiting Approval") {
        return (
            <>
                <Button variant="success" onClick={approvecall}>Approve</Button>
                <Button variant="danger" onClick={denycall}>Deny</Button>
            </>
        );
    }
    else if (approvalStatus === "Approved") {
        return (
            <>
                <Button variant="success" disabled>Approved</Button>
            </>
        );
    }
    else if (approvalStatus === "Draft") {
        return (
            <>
                <Button variant="danger" disabled>Denied</Button>
            </>
        );
    }
}

export default ApprovalButton;