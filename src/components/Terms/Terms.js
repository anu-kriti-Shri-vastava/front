import React from 'react';
import './Terms.css';
import Footer from '../footer/Footer';

import tem from '../../images/extra/term.png';

const Terms = () => {
  return (
    <>
      <div className="termparentContainer">
        <img src={tem} width="282" alt="Terms and Conditions" />
        <div className="termcentered">
          <h1>Terms And Conditions</h1>
        </div>
        <p>These Terms and Conditions (the "Agreement") govern your use of the vegetable delivery website provided by VegEase (the "Company," "we," "us," or "our"). By accessing and using the Website, you agree to abide by these terms. If you do not agree with any part of these terms, you should not use the Website.</p>

        <h4><u>Acceptance of Terms</u></h4>
        <p>By accessing or using the Website, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use the Website.</p>

        <h4><u>Account Creation</u></h4>
        <p>To access certain features of the Website, you may need to create an account. You are responsible for maintaining the confidentiality of your account information and password. You agree to notify us immediately of any unauthorized use of your account.</p>

        <h4><u>Vegetable Orders and Deliveries</u></h4>
        <ul>
          <li>Ordering Process: You can place orders for vegetables through the Website. By placing an order, you agree to provide accurate, current, and complete information. You are responsible for reviewing your order before submitting it.</li>
          <li>Delivery: We will deliver the ordered vegetables to the address you provide during the ordering process. Delivery times are approximate and subject to change. We are not responsible for delays due to unforeseen circumstances.</li>
          <li>Cancellation and Refunds: Orders can be cancelled within a specified time frame before the scheduled delivery. Refunds for cancelled orders will be processed according to our Refund Policy.</li>
        </ul>

        <h4><u>Payment</u></h4>
        <ul>
          <li>Payment Information: You agree to provide accurate and complete payment information when placing an order. You authorize us to charge the provided payment method for the total amount of your order, including any applicable taxes and fees.</li>
          <li>Price Changes: Prices for vegetables and delivery services are subject to change without notice. However, the price you are charged will be the price listed at the time of your order.</li>
        </ul>

        <h4><u>User Conduct</u></h4>
        <p>You agree not to use the Website for any unlawful or unauthorized purpose. You shall not engage in any activities that may harm the integrity of the Website or compromise its security.</p>

        <h4><u>Intellectual Property</u></h4>
        <p>The content, graphics, logos, and other materials on the Website are protected by intellectual property laws and are owned by the Company or its licensors. You may not use, reproduce, distribute, or modify any of the content without explicit written permission.</p>

        <h4><u>Privacy</u></h4>
        <p>Your use of the Website is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information.</p>

        <h4><u>Disclaimer of Warranties</u></h4>
        <p>The Website is provided "as is" without any warranties, express or implied. We do not guarantee the accuracy, reliability, or availability of the Website.</p>

        <h4><u>Limitation of Liability</u></h4>
        <p>In no event shall the Company be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use of the Website.</p>

        <h4><u>Changes to Terms</u></h4>

        <p>We reserve the right to modify or update these Terms and Conditions at any time. It is your responsibility to review these terms periodically.</p>

        <h4><u>Governing Law</u></h4>
        <p>This Agreement shall be governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes arising from or related to this Agreement shall be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].</p>

        <p>By using the Website, you acknowledge that you have read and understood these Terms and Conditions and agree to be bound by them. If you do not agree to these terms, you should not use the Website.</p>
      </div>
      <Footer />
    </>
  );
};

export default Terms;
