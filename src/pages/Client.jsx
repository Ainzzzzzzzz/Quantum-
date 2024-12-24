import React from 'react';
import BG from '../img/BG.png'; 
import dfImage from '../img/df.jpg'; 
import '../styling/Client.css';

const Client = () => {
  return (
    <div className="client-container">
      <h1 className="client-title">Our Valued Clients</h1>
      <p className="client-intro">
        We take pride in working with a diverse range of clients across various industries. Our goal is to help businesses succeed by providing tailored solutions that meet their unique needs. Below are some of the testimonials from our satisfied clients.
      </p>

      <div className="client-testimonials">
        <div className="testimonial">
          <div className="testimonial-profile">
            <img src={dfImage} alt="John Doe" className="testimonial-avatar" />
            <h2 className="testimonial-name">John Doe</h2>
          </div>
          <p className="testimonial-text">
            "The team at [Your Company Name] transformed our online presence. Their expertise in web development and digital marketing helped us reach new heights. We couldn't be happier with the results!"
          </p>
        </div>

        <div className="testimonial">
          <div className="testimonial-profile">
            <img src={dfImage} alt="Jane Smith" className="testimonial-avatar" />
            <h2 className="testimonial-name">Jane Smith</h2>
          </div>
          <p className="testimonial-text">
            "Working with [Your Company Name] was a fantastic experience. Their attention to detail and commitment to excellence ensured our project was completed on time and exceeded our expectations."
          </p>
        </div>

        <div className="testimonial">
          <div className="testimonial-profile">
            <img src={dfImage} alt="Mike Johnson" className="testimonial-avatar" />
            <h2 className="testimonial-name">Mike Johnson</h2>
          </div>
          <p className="testimonial-text">
            "The digital marketing campaign they designed for us boosted our visibility and increased customer engagement. We've seen a significant improvement in our sales and brand recognition."
          </p>
        </div>
      </div>

      <p className="client-conclusion">
        These are just a few examples of how we've helped businesses thrive. If you're ready to take your business to the next level, let's work together!
      </p>
    </div>
  );
};

export default Client;
