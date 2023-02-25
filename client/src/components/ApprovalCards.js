import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import acceptedIcon from "./acceptedicon.png"
import waiticon from "./waiticon1.png"
import rejectedicon from "./rejectedicon.png"
function ApprovalCards({ timesheet, filterApproved, filterWaiting, filterDeny }) {
    var numberApproved = 0;
    var numberWaiting = 0;
    var numberDenied = 0;
    timesheet.map(item => {
        if (item.hoursRequired <= item.hoursDone) {
            if (item.approvalStatus === "Awaiting Approval")
                numberWaiting += 1;
            else if (item.approvalStatus === "Approved")
                numberApproved += 1;
            else
                numberDenied += 1;
        }
    })
    return (
        <div className="d-flex justify-content-around">
            <div className="card-outer">
                <Card style={{ width: '18rem', backgroundColor: "green" }}>
                    <Card.Img style={{ height: '15rem' }} variant="top" src={acceptedIcon} />
                    <Card.Body>
                        <Card.Title>Approved : {numberApproved}</Card.Title>
                        <Button variant="primary" onClick={filterApproved}>Get Approved</Button>
                    </Card.Body>
                </Card></div>
            <div className="card-outer">
                <Card style={{ width: '18rem', backgroundColor: "yellow" }}>
                    <Card.Img style={{ height: '15rem' }} variant="top" src={waiticon} />
                    <Card.Body>
                        <Card.Title>Awaiting Approval : {numberWaiting}</Card.Title>
                        <Button variant="primary" onClick={filterWaiting}>Get Waiting</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="card-outer">

                <Card style={{ width: '18rem', backgroundColor: "red" }}>
                    <Card.Img style={{ height: '15rem' }} variant="top" src={rejectedicon} />
                    <Card.Body>
                        <Card.Title>Deined : {numberDenied}</Card.Title>
                        <Button variant="primary" onClick={filterDeny}>Get Denied</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default ApprovalCards