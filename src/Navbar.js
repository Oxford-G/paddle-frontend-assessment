import { Link } from 'react-router-dom';
import logo from './assest/gratis-logo.png';
import './Navbar.css';

const Navbar = ()=> (
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
          <Link className="blog-color color-home" to="/about">ABOUT US</Link>
        </li>
        <li>
          <Link className="blog-color2 color-home" to="/blog">BLOG</Link>
        </li>
        <li className='last-list blog-color3'>
          <Link className="blog-color color-home" to="/comingsoon">CONTACT US</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Navbar