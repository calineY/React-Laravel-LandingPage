import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const NavigationDashboard = () => {
    let redirect = useNavigate();
    const token = localStorage.getItem('id');
    const url = "http://127.0.0.1:8000/api/auth/logout"

    async function logout(){

    const config = {
      headers: { Authorization: `Bearer ${token}` }
    }
    const bodyParameters = {};
    
    axios.post(url,bodyParameters,config)
    .then(function(response){
      console.log(response.data.message);
      if (response.data.message==="User successfully signed out"){
        localStorage.clear();
        redirect('/login');
      }
    })
    .catch(function (error) {
      console.log('Failed to logout');
  });
}
  return (
  <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-successs navbar-custom">
    <div className="container">
      <div className="navbar-brand logo">HireUp</div>
      <div style={{color:"#FF2400",cursor:"pointer"}} onClick={logout}>Log Out</div>
      </div>
  </nav>
  )
}

export default NavigationDashboard