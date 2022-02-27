import React from 'react'

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div className="container">
      <a className="navbar-brand">HireUp</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
              <li className="nav-item">
                  <a className="nav-link active" aria-current="page">Log In</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link active">Sign Up</a>
              </li>
            </ul>
          </div>
      </div>
  </nav>
  )
}

export default Navigation