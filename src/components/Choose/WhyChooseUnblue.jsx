import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faTools, faHandshake, faSmile, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import './WhyChooseUnblue.css';

const WhyChooseUnblue = () => {
  const points = [
    {
      title: "On-Time Delivery",
      des: "We are committed to delivering projects on time, ensuring your deadlines are met.",
      icon: faClock
    },
    {
      title: "Quality Engineers",
      des: "Our team consists of experienced and skilled engineers dedicated to delivering high-quality solutions.",
      icon: faTools
    },
    {
      title: "Trustworthy Services",
      des: "We have a proven track record of providing reliable and trustworthy services to our clients.",
      icon: faHandshake
    },
    {
      title: "Customer Satisfaction",
      des: "We prioritize customer satisfaction and strive to exceed expectations in every project we undertake.",
      icon: faSmile
    },
    {
      title: "Innovation and Creativity",
      des: "We embrace innovation and creativity to provide unique and tailored solutions for our clients.",
      icon: faLightbulb
    }
  ];

  return (
    <section id="WhyChooseUnblue">
    <div className="why-choose-unblue-container">
      <h2 className="why-choose-unblue-heading">Why Choose Unblue?</h2>
      <div className="why-choose-unblue-cards">
        {points.map((point, index) => (
          <div key={index} className="why-choose-unblue-card">
            <FontAwesomeIcon icon={point.icon} className="why-choose-unblue-icon" />
            <h3 className="why-choose-unblue-title">{point.title}</h3>
            <p className="why-choose-unblue-description">{point.des}</p>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}

export default WhyChooseUnblue;
