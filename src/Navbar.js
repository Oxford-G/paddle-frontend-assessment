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
          <Link>ABOUT US</Link>
        </li>
        <li>
          <Link>BLOG</Link>
        </li>
        <li className='last-list'>
          <Link>CONTACT US</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Navbar