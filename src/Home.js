import foot1 from './assest/youtube-square-brands.svg';
import foot2 from './assest/twitter-square-brands.svg';
import foot3 from './assest/linkedin-brands.svg';
import foot4 from './assest/instagram-brands.svg';
import foot5 from './assest/facebook-brands.svg';
import Navbar from './Navbar';
import './Home.css';

const Home = () => (
  <div className="home">
    <Navbar />
    <div className='container'>
      <h1 className="header-name">SOMETHING AWESOME IS COMING SOON</h1>
      <p className="header-name">Your all-in-one affiliate marketing tracking software 
        <span> track, automate</span> and <span> optimize </span>
        your campaigns
      </p>
      <div className="date-container">
        <div>
          <h3>7</h3>
          <p>Days</p>
        </div>
        <div>
          <h3>24</h3>
          <p>Hours</p>
        </div>
        <div>
          <h3>54</h3>
          <p>minutes</p>
        </div>
        <div>
          <h3>11</h3>
          <p>Seconds</p>
        </div>
      </div>
      <form action="#">
        <fieldset className="field-1">
          <label for="first-name">
            <input className="text" type="text" id="first-name" name="first-name" placeholder="First name.." required/>
          </label>
          <label for="last-name">
            <input className="text" type="text" id="last-name" name="last-name" placeholder="Last name.." required/>
          </label>
        </fieldset>
        <fieldset className="field-2">
          <label for="email">
            <input className="email" type="email" id="email" name="email"  placeholder="Enter your email address" required/>
          </label>
          <input className="submit" type="submit" value="Join our waiting list"/>
        </fieldset>
      </form>
      <div className="footer">
        <div className="footer-shade">
          <ul className='foot-logo'>
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
      </div>
    </div>
  </div>
)

export default Home