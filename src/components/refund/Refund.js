import React from 'react';
import './Refund.css';
import rupee from '../../images/extra/rupee.png';
import Footer from '../footer/Footer';

function Refund() {
    return (
        <>
            <div style={{ margin: '10%' }}>
                <div className="refundparentContainer">
                    <img src={rupee} width="256" alt="Rupee Symbol" />
                    <div className="refundcentered">
                        <h1>Refund and Cancellation Policy</h1>
                    </div>
                    <p><i> Here, Customer means the person who is buying the stuff and We/Us would mean the 'VegEase' website. </i></p>
                    <h3><u>Customer Cancellation </u></h3>
                    <p>As per the rules, the Customer cannot cancel the order once it is confirmed. Customer can cancel the order only within one minute after placing it. However, after looking at the Customer's cancellation history, VegEase will decide whether to provide with a refund or not, because if a Customer is frequently doing this, then he/she is held accountable to degrade VegEase. </p>
                    <p> After one minute of placing the order, VegEase has the right to put 100% cancellation fees and no refund will be provided. If the order is prepaid, then no refund will be provided and incase the order is postpaid, then it will be adjusted in their subsequent placed order. </p>
                    <h3><u>Other situations that may lead to Cancellation of order </u> </h3>
                    <p> VegEase will not be held responsible and has the right to apply penalty for the cases like: </p>
                    <ul>
                        <li> the address provided by the customer is wrong </li>
                        <li> the customer is not replying to the phone calls or the emails while our delivery partner is trying to contact them </li>
                        <li> the customer does not explain the exact location to the delivery partner and due to this our employee fails to deliver the order to you </li>
                        <li> the customer books all those the items that are currently unavailable. In this case, our team will try to reach out to you through calls and 100% refund will be provided to the customer. </li>
                    </ul>
                    <p> In case, the order gets cancelled from the merchant's side or due to some issues at VegEase, 100% cancellation will be provided to the customer. </p>
                    <h3><u>Refunds </u></h3>
                    <p> VegEase will provide refund on the orders that are prepaid. No refunds are provided for the postpaid orders.</p>
                    <p> Incase the order gets cancelled from the merchant's side or due to some issues at VegEase, 100% cancellation will be provided to the customer. </p>
                    <p> The refund will be provided only through online mode, no cash is being provided. The estimated time that be taken to provide with refunds is given below: </p>
                    <ul>
                        <li> UPI: 5-7 days </li>
                        <li> Net Banking: 5-7 days </li>
                        <li> PhonePe: 5-7 days </li>
                        <li> Debit Card/Credit Card: 5-7 days </li>
                    </ul>
                    <p> The Customer will be provided with full refund if the order takes more than two hours to be delivered. </p>
                    <p>In case of postpaid orders, the Customer does not need to pay for the order if: </p>
                    <ul>
                        <li> he receives an open order/ the seal of the order is broken </li>
                        <li> the items are missing from the order that he ordered for </li>
                        <li> wrong order is being delivered </li>
                    </ul>
                    <p> The Customer will not have to pay for the order in these cases only if he reports about this to the Customer Care prior to the order is being delivered is marked on the site. </p>
                    <p> <b> Important Note: </b> VegEase is not responsible for the quality of the food that is being provided by the merchant to the Customer. We are only responsible for delivery of vegetables on time. In case any vendor is providing with extremely bad quality vegetables, you can complain to us and we will try our best to take action against them. </p>
                    <br />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Refund;
