import React from 'react';
import './Footer.css';

import PhoneIcon from "../../images/login/phone.png";
import MailIcon from "../../images/footer/mail.png";
import DownloadIcon1 from "../../images/footer/appstore.png";
import DownloadIcon2 from "../../images/footer/googleplay.png";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <br /><br />
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="#">Help & Support</a></li>
              <li><a href="#"><img src={PhoneIcon} width="15" height="15" alt="phone" /> 9876******</a></li>
              <li><a href="#"><img src={MailIcon} width="18" height="15" alt="email" /> vegease@gmail.com</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link to="/aboutus">About Us</Link></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Our Services</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/refund">Refund & Cancellation</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Shop</h4>
            <ul>
              <li><Link to="/fruits-product">Fruits</Link></li>
              <li><Link to="/vegetables-product">Vegetables</Link></li>
              <li><Link to="/seasonals">Seasonals</Link></li>
              <li><Link to="/dairy-product">Dairy Product</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <ul className="download-icons">
              <li><a href="#"><img src={DownloadIcon1} width="135" alt="download1" /></a></li>
              <li><a href="#"><img src={DownloadIcon2} width="135" alt="download2" /></a></li>
            </ul>
            <br /><br />
            <h4>Get Social with us</h4>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-pinterest"></i></a>
            </div>
          </div>
        </div>
      </div>
      <br /><br />
      <hr color="white" />
      <br />
      <div className='footer-text'>
        <p className="footer-text-content" align="center"> By continuing, you agree to the Terms & Conditions of <span style={{ color: "green" }}>VegEase</span>. </p>
        <p className="footer-text-content" align="center">©2023 VegEase</p>
      </div>
      <br />
    </footer>
  );
};

export default Footer;
