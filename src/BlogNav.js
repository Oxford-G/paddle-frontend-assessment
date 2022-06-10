import { Link } from 'react-router-dom';
import logo from './assest/gratis-blog-logo.png';
import './BlogNav.css';

const BlogNav = ()=> (
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
          <Link className="blog-color color-home" to="/comingsoon">CONTACT US</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default BlogNav