import { Link } from 'react-router-dom';
import logo from './assest/gratis-logo.png';
import './Navbar.css';

const Navbar = ()=> (
  <header className='Nav-header'>
    <div>
      <Link to="/">
        <img src={logo} className="logo" alt="logo"/>
        <p>METRICKS</p>
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
          <Link to="/comingsoon">CONTACT US</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Navbar