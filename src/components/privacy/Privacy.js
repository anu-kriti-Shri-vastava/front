import React from 'react';
import './Privacy.css';

import pri from '../../images/extra/privacy.png';
import Footer from '../footer/Footer';

const Privacy = () => {

  return (
    <>
      <div className="privacyparentContainer">
        <img src={pri} width="340" alt="Privacy Policy" />
        <div className="privacycentered">
          <h1>Privacy Policy</h1>
        </div>
        <p>Last Updated: 09th August 2023.</p>
        <p>At VegEase, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use our website and services. By accessing or using our website, you agree to the practices described in this Privacy Policy.</p>

        <h4><u>Information We Collect</u></h4>
        <p>We may collect various types of information from you, including but not limited to:</p>
        <ul>
          <li>Personal Information: This includes your name, email address, phone number, and shipping address. We collect this information when you create an account, place an order, or communicate with us.</li>
          <li>Payment Information: When you make a purchase on our website, we collect your payment details, including credit card information. This information is securely transmitted and processed by third-party payment processors.</li>
          <li>Usage Data: We gather information about how you interact with our website. This may include your IP address, browser type, device information, pages visited, and actions taken.</li>
        </ul>

        <h4><u>How We Use Your Information:</u></h4>
        <p>We use the collected information for various purposes, including:</p>

        <ul>
          <li>Order Processing: We use your personal and payment information to process and fulfill your orders, send order confirmations, and provide customer support related to your purchases.</li>
          <li>Account Management: Your personal information is used to create and manage your account on our website.</li>
          <li>Communication: We may use your contact information to send you updates about your orders, promotions, newsletters, and other relevant information. You can opt-out of these communications at any time.</li>
          <li>Improving Our Services: We analyze usage data to understand how our website is used, identify trends, and improve user experience.</li>
        </ul>

        <h4><u>Data Sharing and Disclosure:</u></h4>
        <p>We may share your information with third parties under the following circumstances:</p>

        <ul>
          <li>Service Providers: We may share your information with third-party service providers who help us with payment processing, order fulfillment, website analytics, and other operational functions.</li>
          <li>Legal Requirements: We may disclose your information if required by law or in response to valid legal requests, such as court orders or government investigations.</li>
          <li>Business Transfers: If we undergo a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.</li>
        </ul>

        <h4><u>Data Security:</u></h4>
        <p>We take data security seriously and implement various measures to protect your information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.</p>

        <h4><u>Your Choices:</u></h4>
        <p>You have the right to access, update, or delete your personal information. You can do this by logging into your account or contacting our customer support. You can also choose to unsubscribe from marketing communications.</p>

        <h4><u>Cookies and Tracking Technologies:</u></h4>
        <p>We use cookies and similar tracking technologies to enhance your browsing experience and collect usage data. You can manage your cookie preferences through your browser settings.</p>

        <h4><u>Children's Privacy:</u></h4>
        <p>Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us to have it removed.</p>

        <h4><u>Changes to this Privacy Policy:</u></h4>
        <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The "Last Updated" date at the beginning of the policy will indicate when the policy was last revised.</p>

        <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at [9876******].</p>

        <p>By using our website, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.</p>
      </div>
      <Footer />
    </>
  );
};

export default Privacy;
