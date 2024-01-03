import React from 'react';
import './Footer.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin ,faYoutube } from '@fortawesome/free-brands-svg-icons';

// Add the imported icons to the library
library.add(faFacebook, faTwitter, faInstagram, faLinkedin,faYoutube);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container_footer">
        <div className="social_icons">
          <a href="https://www.facebook.com" className="social_icon">
            <FontAwesomeIcon icon={['fab', 'facebook']} />
          </a>
          <a href="https://youtube.com/@Unblue23" className="social_icon">
            <FontAwesomeIcon icon={['fab', 'youtube']} />
          </a>
          <a href="https://www.instagram.com" className="social_icon">
            <FontAwesomeIcon icon={['fab', 'instagram']} />
          </a>
          <a href="https://www.linkedin.com" className="social_icon">
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </a>
        </div>
        <p>Email:<a className='email'> Unblue.in@gmail.com </a></p>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Unblue Consultation. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
