import React from 'react';
import BG from '../img/BG.png'; 
import '../styling/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-content">
        
        <p>We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out.</p>

        {/* Contact Form */}
        <form className="contact-form">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" required />
          
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" required />
          
          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* Additional Content - Location and Business Hours */}
      <div className="contact-info">
        <h2>Our Location</h2>
        <p>1234 Business Ave, Suite 100, City, State, ZIP</p>
        <h2>Business Hours</h2>
        <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
        <p>Saturday: 10:00 AM - 2:00 PM</p>
        <p>Sunday: Closed</p>
      </div>
    </div>
  );
};

export default Contact;
