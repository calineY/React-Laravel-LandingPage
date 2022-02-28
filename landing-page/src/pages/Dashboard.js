import React from 'react'
import { useNavigate } from 'react-router-dom'
import NavigationDashboard from '../components/NavigationDashboard';


const Dashboard = () => {
    let redirect=useNavigate();
    if (localStorage.getItem("id")===null){
        redirect("/register");
        return;
    }
    return (
        <div>
            <NavigationDashboard/>
        Dashboard
        <p>{localStorage.getItem("name")}</p>
        <p>{localStorage.getItem("email")}</p>
        </div>
  )
}

export default Dashboard