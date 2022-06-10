import { Link } from 'react-router-dom';
import logo from '../assest/gratis-blog-logo.png';
import './BlogNav.css';
import Contact from '../Contact component/Contact';
import React from 'react'

const BlogNav = ()=> {
  const [open, setOpen] = React.useState(false)
  const openContact = () => {
    setOpen(!open)
  }

  return (
  <header className='BlogNav-header'>
    <div>
      <Link to="/">
        <img src={logo} className="logo blog-color" alt="logo"/>
        <p className="blog-color color-home">METRICKS</p>
      </Link> 
    </div>
    
    <nav className='BlogNav-nav'>
      <ul>
        <li>
          <Link className="blog-color color-home" to="/about">ABOUT US</Link>
        </li>
        <li>
          <Link className="blog-color2 color-home" to="/blog">BLOG</Link>
        </li>
        <li className='Bloglast-list blog-color3'>
          <Link className="blog-color color-home" to="#" onClick={openContact}>CONTACT US</Link>
        </li>
      </ul>
    </nav>
    {open && <Contact />}
  </header>
)}

export default BlogNav