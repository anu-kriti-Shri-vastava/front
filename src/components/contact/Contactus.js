import React from 'react';
import './Contactus.css';

import heartIcon from '../../images/footer/heart.png';
import Footer from '../footer/Footer';

const Contactus = () => {
  return (
    <>
      <div style={{ margin: '3%' }}>
        <h3 className="contact-h"><i>Fill out the form or write to us at <b>info@vegease.com</b></i></h3>
        <div className="contact-container">
        
          <form action="https://formspree.io/f/mdorajke" method="POST" className="contact-form">
            <h2>We would <img src={heartIcon} width="50" height="50" alt="heart icon" /> to hear from you!</h2>

            <select required>
              <option value="select">---SELECT---</option>
              <option value="order">I need help regarding the online order from VegEase.</option>
              <option value="information">I got incorrect information on the VegEase page.</option>
              <option value="issue">The website is not working the way it should work.</option>
              <option value="feedback">I would like to give some feedback/suggestion.</option>
              <option value="other">Other</option>
            </select>

            <input type="text" name="name" id="name" placeholder="name*" required />
            <input type="email" name="email" id="email" placeholder="email id*" required />
            <input type="text" name="phone" id="phone" placeholder="phone*" required />
            <textarea id="message" name="textarea" rows="4" placeholder="type text*" />
            <button type="submit">Send Feedback</button>

          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contactus;
