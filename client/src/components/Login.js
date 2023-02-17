import React from 'react'
import logo from './logo.png'
import { useState } from 'react';


const Login = ({onLoginSubmit}) => 
{
    const [user, setUser] = useState(null);
    const [employee_id, setEmployee_id] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const triggerSubmit = (event) =>{
        event.preventDefault();
        
        const response = onLoginSubmit({employee_id,password});

        console.log(response);
        if(response)
        {
            setTimeout(()=>{setError(true)},100);
        }
    }

    return (
        <div>
            <div>
                <div className="d-flex justify-content-center" id="logo">
                    <img src={logo} alt="Logo" width="300em" height="150em" />
                </div>

                <div className="d-flex justify-content-center login-body">
                    <form onSubmit={triggerSubmit} className="form-body">


                        <div className="form-outline mb-4">
                            <input type="employee_id" id="form2Example1"
                                className="form-control" placeholder="Employee Id"
                                onChange={(event) => {
                                    setEmployee_id(event.target.value)
                                }}
                            />
                            <label className="form-label" for="form2Example1" ></label>
                        </div>


                        <div className="form-outline mb-4">
                            <input type="password" id="form2Example2"
                                className="form-control" placeholder="Password"
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
                    {error&&(
                    <div className="alert alert-warning" role="alert">
                    Invalid Credentials
                  </div>
                    )}
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login