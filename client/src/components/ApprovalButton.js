import Button from 'react-bootstrap/Button';
import axios from "axios";


const ApprovalButton = ({ approvalStatus , getManagerTimesheetdata,itemId ,acessToken}) => {
    

    const approvecall = async() =>
    {
        const id=itemId;
        const status="Approved";
        const par = "?id="+id+"&status=Approved";
        try
        {
            const response = await axios.post("https://localhost:7257/api/Name/MID"+par);
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
        const status="Draft";
        try
        {
            const response = await axios.post("https://localhost:7257/api/Name/MID",{params:{id,status}});

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