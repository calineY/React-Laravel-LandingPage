import React from 'react'
import { useNavigate } from 'react-router-dom'


const Dashboard = () => {
    let redirect=useNavigate();
    if (localStorage.getItem("id")===null){
        redirect("/register");
        return;
    }
    return (
        <div>Dashboard
        <p>{localStorage.getItem("name")}</p>
        <p>{localStorage.getItem("email")}</p>
        </div>
  )
}

export default Dashboard