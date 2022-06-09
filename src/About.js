
const About = () => (
  <div className="about-container">
    <div className="about-container2">
      <div className="about-blur about-blurAll"></div>
      <div className="about-shade about-shadeAll"></div>

      <p className="about-us about-all">
        <span className="dash">------------</span>
        <span>ABOUT US</span>
      </p>
      <h1>
        <span>Built for Saas</span>
        <span>and E-commerce</span>
      </h1>
      <div className="about-us2d">
        <p className="about-us2">
        Our tools are easy to setup and use with a user friendly 
        dashboard. Our tools are easy to setup and use with a user
        friendly dashboard. Our tools are easy to setup and use with 
        a user friendly dashboard.
        </p>
      </div>
      <h2>
        Metrix was developed because just like you, we 
        needed a product that could give us <strong>good value</strong>
      </h2>

      <div className="about-us3d">
        <p className="why-us about-all">
          <span className="dash">------------</span>
          <span>WHY US?</span>
        </p>
        <p className="about-us2">
          We pride ourselves in our ability to innovate
          and create world-class tools that provide reliable and efficient touchpoints
          between advitisers and affliates
        </p>
        <p className="about-dots">
          <span>.............</span>
          <span>.............</span>
          <span>.............</span>
          <span>.............</span>
          <span>.............</span>
        </p>
      </div>
      
      <div className="about-blur2 about-blurAll"></div>
      <div className="about-shade2 about-shadeAll">
        <p className="why-us about-all">
          <span className="dash">------------</span>
          <span>GROWING WITH YOU</span>
        </p>

        <p>Leveraging the best technology, we have developed an all in one
           affliate tracking marketing software, a geneius tool to help us track, automate and
           optimize your influencial campaigns, all from one dashboard</p>
        <p>
          Leveraging the best technology, we have developed an all in one
          affliate tracking marketing software, a geneius tool to help us track, automate and
          optimize your influencial campaigns, all from one dashboard
        </p>
      </div>
    </div>
    <div className="aboutUs-header2">
      <div className="footer-article">
        <h3> Got a Question?</h3>
        <p className="aboutContact-us1">See how Metrix can help your business grow with the
          best affliate tracking software.</p>
        <p className="aboutContact-us">
          Contact us <span className="dash">------------</span> 
        </p>
      </div>
      <div className="about-blur3 about-blurAll"></div>
    </div>
    <div className="about-footer">
      <ul className='aboutfoot-logo'>
        <li><img src={foot1} alt="youtube logo"/></li>
        <li><img src={foot2} alt="twitter logo"/></li>
        <li><img src={foot3} alt="linkedin logo"/></li>
        <li><img src={foot4} alt="instagram logo"/></li>
        <li><img src={foot5} alt="facebook logo"/></li>
      </ul>
      <p className='aboutFirst-p'>
        <span>Terms of services</span>
        <span>Privacy policy</span>
      </p>
      <p className='aboutLast-p'>Copyright 2021 @ Paddle Technologies All Rights Reserved</p>
    </div>
  </div>
)

export default About
