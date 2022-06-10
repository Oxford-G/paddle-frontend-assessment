import { Link } from 'react-router-dom';
import logo from '../assest/gratis-logo.png';
import './Navbar.css';
import React from 'react'
import './Navbar.css';
const Navbar = ()=> {

  return (
  <header className='Nav-header'>
    <div>
      <Link to="/">
        <img src={logo} className="logo blog-color" alt="logo"/>
        <p className="blog-color color-home">METRICKS</p>
      </Link> 
    </div>
    
    <nav className='Nav-nav'>
      <ul>
        <li>
          <Link to="/about">ABOUT US</Link>
        </li>
        <li>
          <Link to="/blog">BLOG</Link>
        </li>
        <li className='last-list'>
          <Link className="blog-color color-home" to="/comingsoon" >
            CONTACT US
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)}

export default Navbar