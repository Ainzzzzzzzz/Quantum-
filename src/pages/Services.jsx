import React from 'react';
import BG from '../img/BG.png';
import '../styling/Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description: 'We create modern, responsive websites tailored to your needs.',
      icon: '🌐',
    },
    {
      id: 2,
      title: 'UI/UX Design',
      description: 'Beautiful and user-friendly designs to enhance user experience.',
      icon: '🎨',
    },
    {
      id: 3,
      title: 'SEO Optimization',
      description: 'Boost your online presence with our SEO strategies.',
      icon: '🚀',
    },
    {
      id: 4,
      title: 'Digital Marketing',
      description: 'Grow your business with targeted digital marketing campaigns.',
      icon: '📈',
    },
  ];

  return (
    <div className="services-container">

   {/* Short content section */}
   <div className="short-content">
        <h2>Why Choose Us?</h2>
        <p>
          Our team is dedicated to delivering top-notch solutions tailored to your business needs. Whether you're looking to improve your website's functionality, enhance user experience, or increase your online visibility, we have the expertise to help you succeed.
        </p>
      </div>

      <h1 className="services-title">Our Services</h1>
      <p className="services-intro">
        We offer a range of services to help your business grow and succeed.
      </p>

   

      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
