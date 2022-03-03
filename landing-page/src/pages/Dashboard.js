import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import NavigationDashboard from '../components/NavigationDashboard';


const Dashboard = () => {
    //setting variable as input value on input change
    const [name, setName]= useState('');
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    
    let messagediv=document.getElementById("message");

    //api call to edit the name
    async function saveName(e) {
        e.preventDefault();

        //name validation
        if(name.length<2){
            messagediv.innerHTML = "<p style='color: red'>Name should be at least 2 characters</p>";
            return;
        }

        const user= {
          name:name,
        };
        const url = "http://127.0.0.1:8000/api/auth/edit";
        const token = localStorage.getItem('id');
        const config = {
            headers: { Authorization: `Bearer ${token}` }
          };

        axios.post(url,user,config)
        .then(function (response) {
            if (response.data.message==="Profile updated"){
                //updating page after name change
                messagediv.innerHTML = "<p style='color: green'>Name updated</p>";
                document.getElementById("namelabel").textContent=name;
                document.getElementById("greeting").textContent=`Hello ${name}!`;
                document.getElementById("nameinput").value='';
                setTimeout(()=>{
                    messagediv.innerHTML = "";
                  }, 1200);
            }
         })
         .catch(function (error) {
             console.log(error)
             messagediv.innerHTML = "<p style='color: red'>Name not updated</p>";
         });
      }

      //api call to edit the email
      async function saveEmail(e) {
        e.preventDefault();

        const user= {
          email:email,
        };
        const url = "http://127.0.0.1:8000/api/auth/edit";
        const token = localStorage.getItem('id');
        const config = {
            headers: { Authorization: `Bearer ${token}` }
          };

        axios.post(url,user,config)
        .then(function (response) {
            if (response.data.message==="Profile updated"){
                messagediv.innerHTML = "<p style='color: green'>Email updated</p>";
                document.getElementById("emaillabel").textContent=email;
                document.getElementById("emailinput").value='';
                //removing message after time out
                setTimeout(()=>{
                    messagediv.innerHTML = "";
                  }, 1200);
            }
         })
         .catch(function (error) {
             console.log(error)
             messagediv.innerHTML = "<p style='color: red'>Email already taken</p>";
         });
      }

      //api call to edit password
      async function savePassword(e) {
        e.preventDefault();
        if (password.length<6){
            messagediv.innerHTML = "<p style='color: red'>Password should be at least 6 characters</p>";
            return;
        }
        const user= {
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
                messagediv.innerHTML = "<p style='color: green'>Password updated</p>";
                document.getElementById("passwordinput").value='';
                setTimeout(()=>{
                    messagediv.innerHTML = "";
                  }, 1200);

            }
         })
         .catch(function (error) {
             console.log(error)
             messagediv.innerHTML = "<p style='color: red'>Password not updated</p>";
         });
      }



    return (
        <div>
            <NavigationDashboard/>
            <h1 id="greeting">Hello {localStorage.getItem("name")}!</h1>

            <form className='container mt-5 editform' onSubmit={saveName}>
                <h1 className="h3 mb-3 fw-normal">Edit your info below</h1>
                <div className="form-floating">
                    <input id="nameinput" className="form-control" placeholder="Full name"
                    onChange={e=>setName(e.target.value)} required/>
                    <label id="namelabel" htmlFor="floatingInput">{localStorage.getItem("name")}</label>
                </div>
                <button className="w-100 btn btn-lg btn-success" type="submit">Edit name</button>
            </form>

            <form className='container mt-4 editform' onSubmit={saveEmail}>
                <div className="form-floating">
                    <input id="emailinput" type="email" className="form-control" placeholder="name@example.com"
                    onChange={e=>setEmail(e.target.value)} required/>
                <label id="emaillabel" htmlFor="floatingInput">{localStorage.getItem("email")}</label>
                </div>
                <button className="w-100 btn btn-lg btn-success" type="submit">Edit email</button>
            </form>

            <form className='container mt-4 editform' onSubmit={savePassword}>
                    <div className="form-floating">
                    <input id="passwordinput" type="password" className="form-control" placeholder="Password"
                    onChange={e=>setPassword(e.target.value)} required/>
                <label htmlFor="floatingPassword">Password</label>
                </div>
                <button className="w-100 btn btn-lg btn-success" type="submit">Edit password</button>
            </form>
            <div id='message'></div>
                
        </div>
        
  )
}

export default Dashboard