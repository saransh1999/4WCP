import React from 'react'
import logo from './logo4.png'
import { useState } from 'react';


const Login = ({ handleLoginSubmit }) => {


    const [employee_id, setEmployee_id] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const triggerSubmit = (event) => {
        event.preventDefault();
        const employeeID = employee_id;
        const employeePassword = password;
        const response = handleLoginSubmit({ employeeID, employeePassword });

        if (response) {
            setTimeout(() => { setError(true) }, 5000);
        }
    }

    return (
        <div className="background-img d-flex flex-column justify-content-center">
            <div className="d-flex justify-content-center login-cointainer">
                <div className="login-outer">
                        <div className="d-flex justify-content-center" style={{fontWeight: "bold",fontSize: "28px"}}>Welcome to StarApp</div>
                    <div className="d-flex justify-content-center" id="logo">
                        <img src={logo} alt="Logo" width="300em" height="200em" />
                    </div>

                    <div className="d-flex justify-content-center login-body">
                        <form onSubmit={triggerSubmit} className="form-body">


                            <div className="form-outline mb-4" >
                                <div className="loginpage-font">Employee Id :</div>
                                <input type="employee_id" id="form2Example1"
                                    className="form-control form-input" style={{backgroundColor:"white"}} placeholder="Employee Id"
                                    onChange={(event) => {
                                        setEmployee_id(event.target.value)
                                    }}
                                />
                                <label className="form-label" for="form2Example1" ></label>
                            </div>


                            <div className="form-outline mb-4">
                                <div className="loginpage-font">
                                Password :
                                </div>
                                <input type="password" id="form2Example2"
                                    className="form-control form-input" style={{backgroundColor:"white"}} placeholder="Password"
                                    onChange={(event) => {
                                        setPassword(event.target.value)
                                    }}
                                />
                                <label className="form-label" for="form2Example2" ></label>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>
                            </div>
                            <div className="d-flex justify-content-center">
                                {error && (
                                    <div className="alert alert-warning" role="alert">
                                        Invalid Credentials
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login