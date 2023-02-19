import Login from "./components/Login";
import axios from "axios";
import { useState, useEffect, useInsertionEffect } from 'react';
import UserDashboard from "./components/UserDashboard";
import jwt_decode from "jwt-decode";


const App = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  const [acessToken, setAcessToken] = useState("");
  const [decoded, setDecoded] = useState("");
  // const [timesheet, setTimesheet] = useState([]);
  const [employeeTimesheet, setEmployeeTimesheet] = useState([]);
  const [managerTimesheet, setManagerTimesheet] = useState([]);
  const [role, setRole] = useState("Employee"); // Two states possible emploee and manager
  // const [refreshToken, setRefreshToken] = useState("");

  const handleLoginSubmit = async ({ employee_id, password }) => {


    console.log("handle submit called");
    try {
      const response = await axios.post("http://localhost:5000/api/login", { employee_id, password });
      setLoginStatus(true);
      setAcessToken(response.data.accessToken);
      // setRefreshToken(response.data.refreshToken);
      // console.log(response.data.refreshToken);

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
      // const token = acessToken;
      // const response = await axios.get("http://localhost:5001/Timesheet/",{token});
      const response = await axios.get("http://localhost:5001/Timesheet/")
      setEmployeeTimesheet(response.data);
    }
    catch (err) {
      console.log(err);
    }
  }
  const getManagerTimesheetdata = async () => {
    try {
      // const token = acessToken;
      // const response = await axios.get("http://localhost:5001/Timesheet/",{token});
      const response = await axios.get("http://localhost:5001/Manager")
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
      if (decoded.isAdmin) {
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
    <div>
      {loginStatus ? (<UserDashboard callLogout={onLogoutclick} employeeTimesheet={employeeTimesheet} 
      managerTimesheet={managerTimesheet} role={role} getManagerTimesheetdata={getManagerTimesheetdata} />) 
      : (<Login onLoginSubmit={handleLoginSubmit} />)}
    </div>
  );
}

export default App;
