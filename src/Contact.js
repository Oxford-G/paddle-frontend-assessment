import './contact.css';

const Contact = () => (
  <div className="contact-container">
    <h2 className="contact-header">Hey we are still the works, but you can 
      send us a message
    </h2>
    <form action="" className="contact-form">
    <fieldset className="contact-container">
        <label className="label-container">First name: 
          <input className="contact-input" type="text" name="first-name" required />
        </label>
        <label className="label-container">Last name: 
          <input className="contact-input" type="text" name="last-name" required />
        </label>
        <label className="label-container">Email address: 
          <input className="contact-input" type="email" name="email" required />
        </label>
        <label className="label-container">Tell us what you need help with:
          <textarea className="contact-input" name="bio" rows="3" cols="30" placeholder="I like coding on the beach..."></textarea>
			  </label>
      </fieldset>
      <input className="contact-submit" type="submit" value="Send Now" />
    </form>
    
  </div>
)

export default Contact;
