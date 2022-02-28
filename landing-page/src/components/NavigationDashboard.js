import React from 'react'
import { useNavigate } from 'react-router-dom';

const NavigationDashboard = () => {
    let redirect = useNavigate();
    function logout(){
        localStorage.clear();
        redirect('/login');
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