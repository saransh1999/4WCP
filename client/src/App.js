import Login from "./components/Login";
import axios from "axios";
import { useState , useEffect } from 'react';
import UserDashboard from "./components/UserDashboard";
import jwt_decode from "jwt-decode";



function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  const [acessToken, setAcessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [decoded, setDecoded] = useState("");
  const [timesheet, setTimesheet] = useState([]);

  console.log(localStorage.getItem("acessToken"));

  const handleLoginSubmit = async({employee_id,password}) =>{


    console.log("handle submit called");
    try{
      const response = await axios.post("http://localhost:5000/api/login", {employee_id,password});
      setLoginStatus(true);
      setAcessToken(response.data.accessToken);
      setRefreshToken(response.data.refreshToken);
      // console.log(response.data.refreshToken);

    }catch(err){
      console.log(err)
    }
  }

    const onLogoutclick = async() =>
    {
      setAcessToken("");
      setLoginStatus(false);
    }
  

    const getTimesheetdata = async() =>{
      try{
        const response = await axios.get("http://localhost:5001/Timesheet/")
        setTimesheet(response.data);
        console.log("timesheet updated");
        // console.log(response.data);
      }
      catch(err){
        console.log(err);
      }
    }
  useEffect(()=>{

    // if(acessToken !== localStorage.getItem("acessToken"))
    // {

    // }

    if(acessToken !== "")
    {
      setDecoded(jwt_decode(acessToken));
      // localStorage.setItem("acessToken",acessToken);
      getTimesheetdata();
    }
  },[acessToken])

  return (
    <div>
      {loginStatus ? (<UserDashboard  callLogout={onLogoutclick} timesheet ={timesheet}/>) : (<Login onLoginSubmit = {handleLoginSubmit}/>)}
    </div>
  );
}

export default App;
