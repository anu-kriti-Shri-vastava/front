import React from 'react';
import './Aboutus.css';

import Footer from '../footer/Footer';

import a1 from '../../images/aboutus/delivery.png';
import a2 from '../../images/aboutus/farmer1.png'
import a3 from '../../images/aboutus/order.png';
import a4 from '../../images/aboutus/team.jpg';
import a5 from '../../images/aboutus/tracking.png';
import a7 from '../../images/aboutus/why4.png';


function Aboutus() {
  return (
    <>
      <div style={{ margin: '7%' }}>
        <div className="parentContainer">
          <img src={a2} alt="Farmer" />
          <br />
          <div className="centered">
            <p>
              Welcome to{' '}
              <a href="index.html" style={{ textDecoration: 'none' }}>
                <span style={{ color: 'green' }}>Vegease</span>
              </a>
              ! We are passionate about providing fresh, high-quality vegetables directly to your doorstep, making it convenient for you to access nutritious and locally sourced produce.
              At VegEase, we are passionate about bringing the freshest and most flavorful vegetables directly to your doorstep. Our journey began with a simple idea: to provide our community with convenient access to locally sourced, farm-fresh produce that's not only delicious but also supports our local farmers. Our mission is to promote healthier lifestyles and support local farmers by delivering the freshest and finest vegetables to our customers. We aim to make the process of buying vegetables easy, enjoyable, and sustainable. Moreover, our mission is to make fresh, locally sourced vegetables accessible to everyone while promoting healthier living, supporting local farmers, and fostering sustainable practices. We are committed to providing our customers with the highest quality produce, delivered conveniently to their doorstep, empowering them to make nutritious choices for themselves and their families. Through our platform, we aim to strengthen communities by connecting consumers with local farmers and reducing our environmental impact by adopting eco-friendly packaging and delivery practices. Our ultimate goal is to inspire a positive change in the way people shop for vegetables and contribute to a healthier, more sustainable world.
            </p>
          </div>
        </div>
        <br /><br /><br /><br />

        <div className="parentContainer1">
          <img src={a1} width="335" height="315" alt="Fast Delivery" />
          <div className="top1">
            <h3>Fast Delivery</h3>
          </div>
          <br />
          <div className="centered1">
            <p>Experience fast delivery of fresh vegetables and fruits at your doorstep on time.</p>
          </div>
        </div>

        <div className="parentContainer2">
          <img src={a3} width="461" height="289" alt="No Minimum Order" />
          <div className="top2">
            <h3>No Minimum Order</h3>
          </div>
          <br />
          <div className="centered2">
            <p>Order the items according to your need without thinking about the minimum order required.</p>
          </div>
        </div>

        <div className="parentContainer3">
          <img src={a5} width="506" height="223" alt="Track Location" />
          <div className="top3">
            <h3>Track Location</h3>
          </div>
          <br />
          <div className="centered3">
            <p>Track your order to know how much time the order will reach your doorstep.</p>
          </div>
        </div>

        <br /><br /><br /><br />

        <div className="Container">
          <img src={a7} width="1360" height="680" alt="Why Us" />
          <div className="whytop">
            <h1>Why Us?</h1>
          </div>
          <div className="whycentered">
            <p>
              <b><i><u>Fresh and Locally Sourced Vegetables:</u></i></b> We partner with local farmers and suppliers to ensure that our vegetables are harvested at the peak of their freshness. By supporting local agriculture, we reduce our carbon footprint and contribute to the growth of the community.
            </p>
            <p>
              <b><i><u>Wide Selection:</u></i></b> Our website offers a wide variety of vegetables to cater to all your culinary needs. Whether you're looking for common favorites or unique and exotic options, we've got you covered.
            </p>
            <p>
              <b><i><u>Convenience:</u></i></b> Say goodbye to long supermarket lines and carrying heavy grocery bags. With our vegetable delivery service, you can shop from the comfort of your home and have your vegetables delivered straight to your door at a time that suits you.
            </p>
            <p>
              <b><i><u>Customizable Orders:</u></i></b> We understand that everyone's needs are different. That's why we offer the option to customize your vegetable box based on your preferences. You can also choose from various subscription plans for regular deliveries.
            </p>
            <p>
              <b><i><u>Quality Assurance:</u></i></b> We have a rigorous quality control process to ensure that only the freshest and best-quality vegetables make it to your doorstep. Our team carefully inspects each item before packing and shipping.
            </p>
            <p>
              <b><i><u>Sustainable Practices:</u></i></b> We are committed to environmental sustainability and strive to minimize waste and packaging. Our deliveries are designed to be eco-friendly, reducing plastic usage wherever possible.
            </p>
            <p>
              <b><i><u>Customer Support:</u></i></b> Our dedicated customer support team is always ready to assist you with any questions, concerns, or feedback you may have. Your satisfaction is our top priority, and we are here to make your shopping experience seamless.
            </p>
            <p>
              <b><i><u>Rewards and Loyalty Program:</u></i></b> As a token of appreciation for choosing us, we offer a rewards and loyalty program that allows you to earn points with every purchase, leading to exclusive discounts and special offers.
            </p>
          </div>

        </div>

        <div className="Container2">
          <img src={a4} width="464" height="462" alt="Our Team" />
          <div className="top">
            <h3>Our Team</h3>
          </div>
          <div className="centered4">
            <p>
              Behind every pixel, line of code, and design element of our website, there's a team of dedicated individuals who are passionate about creating the best possible online experience for you. The team members are as follows: Anukriti, Rahul, Samridhi, Satyam, and Tushar. Together, the team has poured their creativity, expertise, and passion into crafting a website that embodies the essence of VegEase. We're not just delivering vegetables; we're delivering an online experience that connects you with nature, community, and the joy of fresh, wholesome produce.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Aboutus;
