import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p className="col-md-4 mb-0 text-muted">© 2023 URBAN OUTFITs. , NAGPUR</p>
    <NavLink className="navbar-brand  mx-auto fw-bold" to="/">
    URBAN OUTFITs.
          </NavLink>

    <ul className="nav col-md-4 justify-content-end">
      <li className="nav-item"><NavLink to='/' className="nav-link px-2 text-muted">Home</NavLink></li>
      <li className="nav-item"><NavLink to="/products" className="nav-link px-2 text-muted">Products</NavLink></li>
      <li className="nav-item"><NavLink to="/about" className="nav-link px-2 text-muted">About</NavLink></li>
      <li className="nav-item"><NavLink to="/contact" className="nav-link px-2 text-muted">Contact</NavLink></li>
    </ul>
  </footer>
</div>
    </>
  )
}

export default Footer