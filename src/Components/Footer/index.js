import React from 'react';
import footer_logo from '../Assets/logo_big.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pintester_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';
import './index.css';

const Footer = ()=> {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="footer-logo" />
        <p>UpTrendZ</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="instagram" />

        </div>
        <div className="footer-icons-container">
          <img src={pintester_icon} alt="instagram" />

        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="instagram" />

        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>copyright@2024. All rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
