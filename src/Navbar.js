import { Link } from 'react-router-dom';
import logo from './assest/gratis-logo.png';

const Navbar = ()=> (
  <header>
    <div>
      <img src={logo} className="logo" alt="logo"/>
      <p>METRICKS</p>
    </div>
    
    <nav>
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