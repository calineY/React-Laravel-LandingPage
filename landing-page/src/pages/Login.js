import React from 'react'

const Login = () => {
  return (
    <form className='container mt-5'>
    <h1 className="h3 mb-3 fw-normal">Login</h1>

    <div className="form-floating">
      <input type="email" className="form-control" placeholder="name@example.com" required/>
      <label htmlFor="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control" placeholder="Password" required/>
      <label htmlFor="floatingPassword">Password</label>
    </div>

    <div className="checkbox mb-3">
    </div>
    <button className="w-100 btn btn-lg btn-success" type="submit">Login</button>
   
  </form>
  )
}

export default Login