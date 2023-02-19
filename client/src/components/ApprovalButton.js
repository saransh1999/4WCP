import Button from 'react-bootstrap/Button';

const ApprovalButton = ({ approvalStatus }) => {
    if (approvalStatus === "Awaiting Approval") {
        return (
            <>
                <Button variant="success">Approve</Button>
                <Button variant="danger">Deny</Button>
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
                <Button variant="danger">Denied</Button>
            </>
        );
    }
}

export default ApprovalButton;