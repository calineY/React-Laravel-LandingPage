import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import NavigationDashboard from '../components/NavigationDashboard';


const Dashboard = () => {
    const [name, setName]= useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');

    async function save(e) {
        e.preventDefault();
        

        const user= {
          name:name,
          email:email,
          password:password,
        };
        const url = "http://127.0.0.1:8000/api/auth/edit";
        const token = localStorage.getItem('id');
        const config = {
            headers: { Authorization: `Bearer ${token}` }
          };

        axios.post(url,user,config)
        .then(function (response) {
            if (response.data.message==="Profile updated"){
                document.getElementById("message").innerHTML = "<p style='color: green'>Profile updated</p>";
            }
         })
         .catch(function (error) {
             console.log(error)
             document.getElementById("message").innerHTML = "<p style='color: red'>Failed</p>";
         });
      }
    return (
        <div>
            <NavigationDashboard/>
        <h1>Hello {localStorage.getItem("name")}!</h1>


        <form className='container mt-5' onSubmit={save}>
            <h1 className="h3 mb-3 fw-normal">Edit your info below</h1>

            <div className="form-floating">
                <input className="form-control" placeholder="Full name"
                onChange={e=>setName(e.target.value)} required/>
                <label htmlFor="floatingInput">Name</label>
            </div>
            <div className="form-floating">
                <input type="email" className="form-control" placeholder="name@example.com"
                onChange={e=>setEmail(e.target.value)} required/>
            <label htmlFor="floatingInput">Email</label>
            </div>
                <div className="form-floating">
                <input type="password" className="form-control" placeholder="Password"
                onChange={e=>setPassword(e.target.value)} required/>
            <label htmlFor="floatingPassword">Password</label>
            </div>

            <div id='message'></div>
            
            <button className="w-100 btn btn-lg btn-success" type="submit">Save</button>
        </form>
        </div>
        
  )
}

export default Dashboard