import React from 'react';
import './Contact.css';
const Contact = () => {
    return <>

<div className="contact">
  <div className="contact-form">
    <h2>Contact Us</h2>
    <form action="#">
      <input type="text" name="name" placeholder="Your Name" required="" />
      <input type="email" name="email" placeholder="Your Email" required="" />
      <textarea
        name="message"
        rows={5}
        placeholder="Your Message"
        required=""
        defaultValue={""}
      />
      <button type="submit">Send Message</button>
    </form>
  </div>
  <div className="design">
    <img src="assets/contact.jpg" />
    <div className="info">
      <h2>Get in touch with us</h2>
      <h4>
        Email: <p>Jobact@gmail.com</p>
      </h4>
      <h4>
        Contact: <p>+91 89810809930</p>{" "}
      </h4>
    </div>
  </div>
</div>

    </>
}
export default Contact;