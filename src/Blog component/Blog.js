import './Blog.css';
import BlogNav from '../Nav component/BlogNav';
import Footer from '../Footer component/Footer';
import logo from '../assest/header-background.jpg';

const Blog = () => (
  <div className="Blog-container">
    <BlogNav />
    <div className="Blog-header">
      <div className="Blog-blur"></div>
      <div className="Blog-blur2"></div>
      <p>
        <span>------------</span> BLOG
      </p>
      <h2> Articles and News</h2>
    </div>
    <div className="latest">
      <h3> Latest From The Blog</h3>
      <div className="latest-note">
        <p>
        Your all-in-one affiliate marketing tracking software 
        Your all-in-one affiliate marketing tracking software 
        Your all-in-one affiliate marketing tracking software 
        </p>
        <label for="last-name">
          <img src="#" alt="click"/>
          <input className="search" type="text" id="last-name" name="last-name" placeholder="search here"/>
        </label>
      </div>
    </div>
    <div className="flex">
      <div className="box-flex">
        <img src={logo} alt="logo"/>
        <p className="flex-p1">SEPTEMBER 6, 2022 FEATURED ARTICLE. AFFILIATE</p>
        <h4>12 Popular Use Cases To Increase Conversions</h4>
        <p className="flex-p2">
        Your all-in-one affiliate marketing tracking software. 
        Your all-in-one affiliate marketing tracking software,
        Your all-in-one affiliate marketing tracking software
        Your all-in-one affiliate marketing tracking software
        </p>
        <p className="flex-p3">
          <span>----------------</span> READ MORE
        </p>
      </div>
      <div className="box-flex">
        <img src={logo} alt="logo"/>
        <p className="flex-p1">SEPTEMBER 6, 2022 FEATURED ARTICLE. AFFILIATE</p>
        <h4>12 Popular Use Cases To Increase Conversions</h4>
        <p className="flex-p2">
        Your all-in-one affiliate marketing tracking software. 
        Your all-in-one affiliate marketing tracking software,
        Your all-in-one affiliate marketing tracking software
        Your all-in-one affiliate marketing tracking software
        </p>
        <p className="flex-p3">
          <span>----------------</span> READ MORE
        </p>
      </div>
      <div className="box-flex">
        <img src={logo} alt="logo"/>
        <p className="flex-p1">SEPTEMBER 6, 2022 FEATURED ARTICLE. AFFILIATE</p>
        <h4>12 Popular Use Cases To Increase Conversions</h4>
        <p className="flex-p2">
        Your all-in-one affiliate marketing tracking software. 
        Your all-in-one affiliate marketing tracking software,
        Your all-in-one affiliate marketing tracking software
        Your all-in-one affiliate marketing tracking software
        </p>
        <p className="flex-p3">
          <span>----------------</span> READ MORE
        </p>
      </div>
      <div className="box-flex">
        <img src={logo} alt="logo"/>
        <p className="flex-p1">SEPTEMBER 6, 2022 FEATURED ARTICLE. AFFILIATE</p>
        <h4>12 Popular Use Cases To Increase Conversions</h4>
        <p className="flex-p2">
        Your all-in-one affiliate marketing tracking software. 
        Your all-in-one affiliate marketing tracking software,
        Your all-in-one affiliate marketing tracking software
        Your all-in-one affiliate marketing tracking software
        </p>
        <p className="flex-p3">
          <span>----------------</span> READ MORE
        </p>
      </div>
      <div className="box-flex">
        <img src={logo} alt="logo"/>
        <p className="flex-p1">SEPTEMBER 6, 2022 FEATURED ARTICLE. AFFILIATE</p>
        <h4>12 Popular Use Cases To Increase Conversions</h4>
        <p className="flex-p2">
        Your all-in-one affiliate marketing tracking software. 
        Your all-in-one affiliate marketing tracking software,
        Your all-in-one affiliate marketing tracking software
        Your all-in-one affiliate marketing tracking software
        </p>
        <p className="flex-p3">
          <span>----------------</span> READ MORE
        </p>
      </div>
      <div className="box-flex">
        <img src={logo} alt="logo"/>
        <p className="flex-p1">SEPTEMBER 6, 2022 FEATURED ARTICLE. AFFILIATE</p>
        <h4>12 Popular Use Cases To Increase Conversions</h4>
        <p className="flex-p2">
        Your all-in-one affiliate marketing tracking software. 
        Your all-in-one affiliate marketing tracking software,
        Your all-in-one affiliate marketing tracking software
        Your all-in-one affiliate marketing tracking software
        </p>
        <p className="flex-p3">
          <span>----------------</span> READ MORE
        </p>
      </div>
    </div>
    <div className="latest-article">
      <h3> Latest From The Blog</h3>
      <div className="article-note">
        <p>
          Your all-in-one affiliate marketing tracking software 
          Your all-in-one affiliate marketing tracking software 
          Your all-in-one affiliate marketing tracking software 
        </p>
      </div>
    </div>
    <div className="flex">
      <div className="box-flex">
        <p className="flex-p1">SEPTEMBER 6, 2022 FEATURED ARTICLE. AFFILIATE</p>
        <h4>12 Popular Use Cases To Increase Conversions</h4>
        <p className="flex-p2">
        Your all-in-one affiliate marketing tracking software. 
        Your all-in-one affiliate marketing tracking software,
        Your all-in-one affiliate marketing tracking software
        Your all-in-one affiliate marketing tracking software
        </p>
        <p className="flex-p3">
          <span>----------------</span> READ MORE
        </p>
      </div>
      <div className="box-flex">
        <p className="flex-p1">SEPTEMBER 6, 2022 FEATURED ARTICLE. AFFILIATE</p>
        <h4>12 Popular Use Cases To Increase Conversions</h4>
        <p className="flex-p2">
        Your all-in-one affiliate marketing tracking software. 
        Your all-in-one affiliate marketing tracking software,
        Your all-in-one affiliate marketing tracking software
        Your all-in-one affiliate marketing tracking software
        </p>
        <p className="flex-p3">
          <span>----------------</span> READ MORE
        </p>
      </div>
      <div className="box-flex">
        <p className="flex-p1">SEPTEMBER 6, 2022 FEATURED ARTICLE. AFFILIATE</p>
        <h4>12 Popular Use Cases To Increase Conversions</h4>
        <p className="flex-p2">
        Your all-in-one affiliate marketing tracking software. 
        Your all-in-one affiliate marketing tracking software,
        Your all-in-one affiliate marketing tracking software
        Your all-in-one affiliate marketing tracking software
        </p>
        <p className="flex-p3">
          <span>----------------</span> READ MORE
        </p>
      </div>
    </div>
    <div className="button-div">
      <button className="blog-button">LOAD MORE</button>
    </div>
    <div className="Blog-header2">
      <div className="footer-article">
        <h3> Want To Know More About Metrics ?</h3>
        <p> Learn who we are and what drives us. </p>
        <p className="contact-us">
          Contact us <span>------------</span> 
        </p>
      </div>
      <div className="Blog-blurContain">
        <div className="Blog-blur3"></div>
        <div className="Blog-blur4"></div>
      </div>
    </div>
    <Footer />
  </div>
)

export default Blog
