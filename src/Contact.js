// import './contact.css';

const Contact = () => (
  <div className="contact-container">
    <h2>Hey we are still the works, but you can 
      send us a message
    </h2>
    <form action="">
    <fieldset>
        <label>First name: <input type="text" name="first-name" required /></label>
        <label>Last name: <input type="text" name="last-name" required /></label>
        <label>Email address: <input type="email" name="email" required /></label>
        <label>Create a New Password: <input type="password" name="password" pattern="[a-z0-5]{8,}" required /></label>
        <label>Tell us what you need help with:
          <textarea name="bio" rows="3" cols="30" placeholder="I like coding on the beach..."></textarea>
			  </label>
      </fieldset>
      <input type="submit" value="Send Now" />
    </form>
    
  </div>
)

export default Contact;
