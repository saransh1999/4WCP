import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import logo from "./logo.png";
import image from "./images.png";
import Card from "./Cards";
import UserTable from "./UserTable";

const Sidebar1 = ({ clientInfo, profilePicture }) => {
  return (
    <div className="sidebar">
      <div className="d-flex align-items-center mb-3">
        <img
          src={profilePicture}
          alt="Profile"
          className="rounded-circle mr-2 "
          width="100"
          height="100"
        />
      </div>
      <div>
        <h6 className="mb-0">{clientInfo.name}</h6>
        <p className="text-muted mb-0">{clientInfo.email}</p>
      </div>
      {/* <ul className="list-unstyled">
        <li>
          <a href="#">Dashboard</a>
        </li>
        <li>
          <a href="#">Inbox</a>
        </li>
        <li>
          <a href="#">Settings</a>
        </li>
      </ul> */}
    </div>
  );
};

const Navigation = (onLogout) => {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="80"
              height="50"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </Container>
        <container>
          <button onClick={onLogout} className="btn btn-outline-secondary me-5">
            Logout
          </button>
        </container>
      </Navbar>
    </>
  );
};

// export default Navigation;

// const Navigation = ({ logo, onLogout, onToggleSidebar }) => {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Navbar.Brand href="#home">
//         <img
//           src={logo}
//           alt="Logo"
//           width="100"
//           height="70"
//           className="d-inline-block align-top"
//         />
//       </Navbar.Brand>
//       <Navbar.Toggle
//         aria-controls="basic-navbar-nav"
//         onClick={onToggleSidebar}
//       />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="ml-right">
//           <NavDropdown title="Account" id="basic-nav-dropdown">
//             <NavDropdown.Item onClick={onLogout}>Logout</NavDropdown.Item>
//           </NavDropdown>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// };

export default function Sidebar({employeeTimesheet,managerTimesheet, role ,getManagerTimesheetdata,acessToken}) {
  const clientInfo = {
    name: "John Doe",
    email: "john.doe@example.com",
  };

  const handleLogout = () => {
    // // Implement logout functionality here
    // event.preventDefault();
    // const response = onLogoutclick();
  };

  return (
    <div>
      <Navigation
        mainlogo={logo}
        onLogout={handleLogout}
        // onToggleSidebar={handleToggleSidebar}
      />
      <div className="container-fluid">
        <div className="row ">
          <div className={`col-md-3`} style={{ backgroundColor: "lightblue" }}>
            <Sidebar1 clientInfo={clientInfo} profilePicture={image} />
          </div>
          <div className={"col-md-9"}>
             <UserTable
              employeeTimesheet={employeeTimesheet}
              managerTimesheet={managerTimesheet}
              role={role}
              getManagerTimesheetdata={getManagerTimesheetdata}
              acessToken={acessToken}
            /> 
            

          </div>
        </div>
      </div>
    </div>
  );
}
