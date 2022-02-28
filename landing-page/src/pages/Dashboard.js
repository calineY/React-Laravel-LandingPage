import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import NavigationDashboard from '../components/NavigationDashboard';


const Dashboard = () => {
    const [name, setName]= useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');

    async function submit(e) {
        e.preventDefault();
        

        const user= {
          name,
          email,
          password,
        };
        //console.log(user);
        const url = "http://127.0.0.1:8000/api/auth/register";
        axios.post(url, user)
        .then(function (response) {
            if (response.data.message==="User successfully registered"){
                
            }
         })
         .catch(function (error) {
             console.log('Invalid credentials');
             document.getElementById("message").innerHTML = "<p style='color: red'>Invalid credentials!</p>";
         });
      }
    return (
        <div>
            <NavigationDashboard/>
        <h1>Hello {localStorage.getItem("name")}!</h1>


        <form className='container mt-5' onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal">Edit your info below</h1>

            <div className="form-floating">
                <input className="form-control" placeholder="Full name" required
                onChange={e=>setName(e.target.value)}/>
                <label htmlFor="floatingInput">{localStorage.getItem("name")}</label>
            </div>
            <div className="form-floating">
                <input type="email" className="form-control" placeholder="name@example.com" required
                onChange={e=>setEmail(e.target.value)}/>
            <label htmlFor="floatingInput">{localStorage.getItem("email")}</label>
            </div>
                <div className="form-floating">
                <input type="password" className="form-control" placeholder="Password" required
                onChange={e=>setPassword(e.target.value)}/>
            <label htmlFor="floatingPassword">Password</label>
            </div>

            <div id='message'></div>
            
            <button className="w-100 btn btn-lg btn-success" type="submit">Save</button>
        </form>
        </div>
        
  )
}

export default Dashboard