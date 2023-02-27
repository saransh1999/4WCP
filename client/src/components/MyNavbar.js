import React from 'react'
import logo from './logo.png'
import bootstrap from 'bootstrap'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const MyNavbar = ({ onLogoutclick }) => {
    const callLogout = (event) => {
        event.preventDefault();
        const response = onLogoutclick();
    }
    return (
        <div>
            <Navbar expand="lg" bg="primary" variant="dark">
                    <img src={logo} alt="Logo" width="60em" height="45em" className="logo"/>
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                    </Nav>
                        <div>
                            <button onClick={callLogout} className="btn btn-danger">Logout</button>
                        </div>
                </Container>
            </Navbar>
        </div>
    )
}

export default MyNavbar