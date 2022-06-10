import foot1 from './assest/youtube-square-brands.svg';
import foot2 from './assest/twitter-square-brands.svg';
import foot3 from './assest/linkedin-brands.svg';
import foot4 from './assest/instagram-brands.svg';
import foot5 from './assest/facebook-brands.svg';
import './Footer.css';

const Footer = () => (
  <div className="blog-footer">
    <ul className='Blogfoot-logo'>
      <li><img src={foot1} alt="youtube logo"/></li>
      <li><img src={foot2} alt="twitter logo"/></li>
      <li><img src={foot3} alt="linkedin logo"/></li>
      <li><img src={foot4} alt="instagram logo"/></li>
      <li><img src={foot5} alt="facebook logo"/></li>
    </ul>
    <p className='first-p'>
      <span>Terms of services</span>
      <span>Privacy policy</span>
    </p>
    <p className='last-p'>Copyright 2021 @ Paddle Technologies All Rights Reserved</p>
  </div>
)

export default Footer
