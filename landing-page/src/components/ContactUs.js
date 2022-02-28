import React from 'react'


const ContactUs = () => {
  return (
    <div>
    <form className='container mt-5'>
        <h1>Contact us</h1>
        <div className="form-floating">
            <input type="email" className="form-control" placeholder="name@example.com" required/>
            <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
            <input className="form-control" placeholder="Subject" required/>
            <label htmlFor="floatingPassword">Subject</label>
        </div>
        <div className="form-floating">
            <textarea className="form-control" placeholder="Subject"  style={{height:'120px'}} required/>
            <label htmlFor="floatingPassword">Message</label>
        </div>
        <div  style={{marginTop:'10px',marginBottom:'100px'}}>
        <button className="w-100 btn btn-success" type="submit">Send</button>
        </div>
    </form>
    </div>
  )
}

export default ContactUs