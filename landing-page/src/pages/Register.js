import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Navigation from '../components/Navigation';

const Register = () => {
    const [name, setName]= useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    const [password_confirmation, setPasswordConfirmation]= useState('');

    let redirect = useNavigate();

    async function submit(e) {
        e.preventDefault();
        if(name.length<2){
            document.getElementById("message").innerHTML = "<p style='color: red'>Name should be at least 2 characters</p>";
            return;
        }
        if (password.length<6){
            document.getElementById("message").innerHTML = "<p style='color: red'>Password should be at least 6 characters</p>";
            return;
        }
        if (password!=password_confirmation){
            document.getElementById("message").innerHTML = "<p style='color: red'>Password and Password Confirmation don't match</p>";
            return;
          }

        const user= {
          name,
          email,
          password,
          password_confirmation,
        };
        //console.log(user);
        const url = "http://127.0.0.1:8000/api/auth/register";
        axios.post(url, user)
        .then(function (response) {
            if (response.data.message==="User successfully registered"){
                redirect("/login");
            }
         })
         .catch(function (error) {
             console.log('Invalid credentials');
             document.getElementById("message").innerHTML = "<p style='color: red'>Invalid credentials!</p>";
         });
      }

    return (
    <div>
        <Navigation/>
        <form className='container mt-5' onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal">Sign Up</h1>

            <div className="form-floating">
                <input className="form-control" placeholder="Full name" required
                onChange={e=>setName(e.target.value)}/>
                <label htmlFor="floatingInput">Full name</label>
            </div>
            <div className="form-floating">
                <input type="email" className="form-control" placeholder="name@example.com" required
                onChange={e=>setEmail(e.target.value)}/>
            <label htmlFor="floatingInput">Email address</label>
            </div>
                <div className="form-floating">
                <input type="password" className="form-control" placeholder="Password" required
                onChange={e=>setPassword(e.target.value)}/>
            <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="form-floating">
                <input type="password" className="form-control" placeholder="Confirm Password" required
                onChange={e=>setPasswordConfirmation(e.target.value)}/>
                <label htmlFor="floatingPassword">Confirm password</label>
            </div>
            <div id='message'></div>
            
            <button className="w-100 btn btn-lg btn-success" type="submit">Sign Up</button>
        </form>
   </div>
  )
}

export default Register