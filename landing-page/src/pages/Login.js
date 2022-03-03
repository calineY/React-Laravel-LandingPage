import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Navigation from '../components/Navigation';

const Login = () => {
  //useState to set variable to input value on change
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');

  let redirect = useNavigate();

  // log in using axios
  async function login(e) {
    e.preventDefault();
    let messagediv= document.getElementById("message");
    if (password.length<6){
      document.getElementById("message").innerHTML = "<p style='color: red'>Password should be at least 6 characters</p>";
      return;
    }
    const user= {
      email,
      password,
    };
    //message will appear while loading
    messagediv.innerHTML = "<p style='color: black'>...</p>";
    const url = "http://127.0.0.1:8000/api/auth/login";
    axios.post(url, user)
    .then(function (response) {
        //save user info in local storage
        localStorage.setItem("id", response.data.access_token);
        localStorage.setItem("name", response.data.user.name);
        localStorage.setItem("email", response.data.user.email);
        redirect("/dashboard");
      })
     .catch(function (error) {
        messagediv.innerHTML = "<p style='color: black'>...</p>";
        setTimeout(()=>{
          messagediv.innerHTML = "<p style='color: red'>User not found.</p>";
        }, 100);
        
     });
  }

  return (
    <div>
      <Navigation/>
    
      <form className='container mt-5' onSubmit={login}>
        <h1 className="h3 mb-3 fw-normal">Login</h1>

        <div className="form-floating">
          <input type="email" className="form-control" placeholder="name@example.com" required
          onChange={e=>setEmail(e.target.value)}/>  
          {/* updating email on change */}
          <label htmlFor="floatingInput">Email address</label>
        </div>

        <div className="form-floating">
          <input type="password" className="form-control" placeholder="Password" required
          onChange={e=>setPassword(e.target.value)}/>
          {/* updating password on change */}
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <button className="w-100 btn btn-lg btn-success" type="submit">Login</button>
        {/* div to display message */}
        <div id="message"></div>
      </form>
    </div>
  )
}

export default Login