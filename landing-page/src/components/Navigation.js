import React from 'react'
import { Link } from 'react-router-dom'


const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-successs navbar-custom">
    <div className="container">
      {/* redirects to home page */}
      <Link to="/" className="navbar-brand logo">HireUp</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item">
                {/* redirects to login page */}
                  <Link to="/login" className="nav-link active" aria-current="page">Log In</Link>
              </li>
              <li className="nav-item">
                {/* redirects to sign up page */}
                  <Link to="/register" className="nav-link active">Sign Up</Link>
              </li>
            </ul>
          </div>
      </div>
  </nav>
  )
}

export default Navigation