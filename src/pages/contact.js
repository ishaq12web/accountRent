import { useState } from "react";
import "./contact.css";

function Contact() {
  const [inputs, setInputs] = useState({});
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(inputs);
    }
    return (
      <section className="contact-us" onSubmit={handleSubmit}>
        <div className="contact-info">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you! Whether you have a question, suggestion, or just want to say hello, feel free to reach out using the contact form below.</p>
  
          <div className="contact-details">
            <div className="contact-item">
              <h3>Our Office</h3>
              <p>123 Business St., Suite 456</p>
              <p>City, Country</p>
            </div>
            <div className="contact-item">
              <h3>Email</h3>
              <p><a href="mailto:info@yourcompany.com">info@yourcompany.com</a></p>
            </div>
            <div className="contact-item">
              <h3>Phone</h3>
              <p><a href="tel:+1234567890">+1 (234) 567-890</a></p>
            </div>
          </div>
        </div>
  
        <div className="contact-form">
          <h2>Get In Touch</h2>
          <form action="submit-form.php" method="POST">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" required placeholder="Your Name" onChange={handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required placeholder="Your Email" onChange={handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required placeholder="Your Message" onChange={handleChange}></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </section>
    );
  }
  
  export default Contact;
  