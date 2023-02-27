import Login from "./components/Login";
import axios from "axios";
import { useState, useEffect, useInsertionEffect } from 'react';
import UserDashboard from "./components/UserDashboard";
import jwt_decode from "jwt-decode";
const address = "http://localhost:5000";

const App = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  const [acessToken, setAcessToken] = useState("");
  const [decoded, setDecoded] = useState("");

  const [employeeTimesheet, setEmployeeTimesheet] = useState([]);
  const [managerTimesheet, setManagerTimesheet] = useState([]);
  const [role, setRole] = useState("Employee"); // Two states possible emploee and manager

  const handleLoginSubmit = async ({ employeeID, employeePassword }) => {

    const employee_id =employeeID;
    const password = employeePassword;
    // console.log("handle submit called");
    try {
      const response = await axios.post("https://localhost:7050/api/Auth", { employee_id, password });
      // console.log(response);
      setLoginStatus(true);
      setAcessToken(response.data.accessToken);

    } catch (err) {
      console.log(err)
    }
  }

  const onLogoutclick = async () => {
    localStorage.setItem("acessToken", "");
    setAcessToken("");
    setLoginStatus(false);
  }


  const getEmployeeTimesheetdata = async () => {
    try {
      const token = acessToken;
      const response = await axios.post("https://localhost:7257/api/Name/EmployeeDashboard",{token});
      // console.log(response);
      setEmployeeTimesheet(Object.values(response.data));
    }
    catch (err) {
      console.log(err);
    }
  }
  const getManagerTimesheetdata = async () => {
    try {
      console.log("new timesheet rendered")
      const token=acessToken;
      const response = await axios.post("https://localhost:7257/api/Name/ManagerDashboard",{token})
      console.log(response);
      setManagerTimesheet(response.data);
    }
    catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {

    if (localStorage.getItem("acessToken") !== null && localStorage.getItem("acessToken") !== "") {
      setAcessToken(localStorage.getItem("acessToken"));
      setLoginStatus(true);
    }

    if (acessToken !== "") {
      setDecoded(jwt_decode(acessToken));

      //set local storage object
      localStorage.setItem("acessToken", acessToken);


    }
  }, [acessToken]);

  useEffect(() => {
    if (decoded !== "") {
      if (decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]==="manager") {
        setRole("Manager");

        //generate Manager Timesheet

        getManagerTimesheetdata();
      }
      else {

        setRole("Employee");

        //generate Timesheet
        getEmployeeTimesheetdata();
      }
    }
  }, [decoded])

  return (
    <div id="app">
      {loginStatus ? (<UserDashboard callLogout={onLogoutclick} employeeTimesheet={employeeTimesheet} 
      managerTimesheet={managerTimesheet} role={role} getManagerTimesheetdata={getManagerTimesheetdata} acessToken={acessToken}/>) 
      : (<Login handleLoginSubmit={handleLoginSubmit} />)}
    </div>
  );
}

export default App;
