import React from 'react'
import { useState } from 'react';
import axios from 'axios';


const ContactUs = () => {
  const [email, setEmail]= useState('');
  const [subject, setSubject]= useState('');
  const [content, setContent]= useState('');


  async function sendMessage(e) {
    e.preventDefault();
    let messagediv= document.getElementById("message");
    if (subject.length<2){
      messagediv.innerHTML ="<p style='color: red'>Subject is too short</p>";
      return;
    }
    if (content.length<2){
      messagediv.innerHTML = "<p style='color: red'>Message is too short</p>";
      return;
    }
    const message= {
      email,
      subject,
      content,
    };
    const url = "http://127.0.0.1:8000/api/message";
    axios.post(url, message)
    .then(function (response) {
      if (response.data.message==="Message sent"){
       messagediv.innerHTML = "<p style='color: green'>Message sent.</p>";
      }
      e.target.reset();
      setTimeout(()=>{
        messagediv.innerHTML = "";
      }, 700);
      })
     .catch(function (error) {
       console.log(error);
       messagediv.innerHTML = "<p style='color: red'>Message not sent.</p>"; 
     });
  }

  return (
    <div>
    <form className='container mt-5'  onSubmit={sendMessage}>
        <h1>Contact us</h1>
        <div className="form-floating">
            <input type="email" className="form-control" placeholder="name@example.com"  required
          onChange={e=>setEmail(e.target.value)}/>
            <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
            <input className="form-control" placeholder="Subject"  required
          onChange={e=>setSubject(e.target.value)}/>
            <label htmlFor="floatingPassword">Subject</label>
        </div>
        <div className="form-floating">
            <textarea className="form-control" placeholder="Subject"  style={{height:'120px'}}  required
          onChange={e=>setContent(e.target.value)}/>
            <label htmlFor="floatingPassword">Message</label>
        </div>
        
        <div  style={{marginTop:'10px',marginBottom:'100px'}}>
        <button className="w-100 btn btn-success" type="submit">Send</button>
        <div id="message"></div>
        </div>
    </form>
    </div>
  )
}

export default ContactUs