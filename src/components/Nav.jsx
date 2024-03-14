import React from 'react'
import logo from '../Images/logo.jpg'
import './Nav.css'
import {Link, Outlet} from "react-router-dom";

const Nav = () => {
  return (
    <div className='main-container'>
      <nav>
      <ul className='Nav-container'>
        <img src={logo} alt="" height="150px"/>
        <li><Link to= "/">Home</Link></li>
        <li><Link to= "/services">Services</Link></li>
        <li><Link to= "/branches">Branches</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      </nav> 

      <Outlet/>
      
    </div>
  )
}

export default Nav
