import React, { Component, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth0 } from "@auth0/auth0-react";
import './Order.css';

import Card1 from "../../images/extra/card1.png";
import Card2 from "../../images/extra/card2.png";
import { createPost } from '../../actions/posts';

const Order = ({ clearCart, cart }) => {
  const itemNameAndAmount = cart.map(item => ({
    productName: item.name,
    quantity: item.amount
  }));

  const { user } = useAuth0();
  const dispatch = useDispatch();
  const email=user.email;
  const [payment, setPayment] = useState({ name: '', email: email, address: '', city: '', state: '', zipcode: '', creditNo: '', expMonth: '', expYear: '', CVV: '', orderedItems: itemNameAndAmount });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(createPost(payment));
      console.log("Hi");
      clearCart();
    } catch (error) {
      console.error('Error dispatching action:', error);
    }
  }

  return (
    <>
      <div>
        <header className='order-header'>
          <div className="order-container" style={{ height: "40rem" }}>
            <div className="order-left">
              <h3>BILLING ADDRESS</h3>
              <form className='order-form'  >
                Full name
                <input type="text" name="" placeholder="Enter name" className='order-input' onChange={(e) => setPayment({ ...payment, name: e.target.value })} />
                Email
                <input type="text" name="" placeholder="Enter email" className='order-input' value={email} onChange={(e) => setPayment({ ...payment, email: e.target.value })} />
                Address
                <input type="text" name="" placeholder="Enter address" className='order-input' onChange={(e) => setPayment({ ...payment, address: e.target.value })} />
                City
                <input type="text" name="" placeholder="Enter City" className='order-input' onChange={(e) => setPayment({ ...payment, city: e.target.value })} />
                <div id="zip">
                  <label>
                    State
                    <select onChange={(e) => setPayment({ ...payment, state: e.target.value })}>
                      <option>Choose State..</option>
                      <option>Rajasthan</option>
                      <option>Hariyana</option>
                      <option>Uttar Pradesh</option>
                      <option>Madhya Pradesh</option>
                    </select>
                  </label>
                  <label>
                    Zip code
                    <input type="number" name="" placeholder="Zip code" className='order-input' onChange={(e) => setPayment({ ...payment, zipcode: e.target.value })} />
                  </label>
                </div>
              </form>
            </div>
            <div className="order-right" >
              <h3 className='order-h3'>PAYMENT</h3>
              <form>
                Accepted Card <br />
                <img src={Card1} width="100" alt="Card 1" style={{ margin: "1rem" }} />
                <img src={Card2} width="50" alt="Card 2" style={{ margin: "1rem" }} />
                <br />
                <br />
                Credit card number
                <input
                  type="text"
                  name=""
                  placeholder="Enter card number"
                  className='order-input'
                  style={{ margin: "1rem", height: "2rem" }}
                  onChange={(e) => setPayment({ ...payment, creditNo: e.target.value })}
                />
                Exp month
                <input type="text" name="" placeholder="Enter Month" className='order-input' style={{ margin: "1rem", height: "2rem" }} onChange={(e) => setPayment({ ...payment, expMonth: e.target.value })} />
                <div id="zip">
                  <label>
                    Exp year
                    <select onChange={(e) => setPayment({ ...payment, expYear: e.target.value })}>
                      <option>Choose Year..</option>
                      <option>2022</option>
                      <option>2023</option>
                      <option>2024</option>
                      <option>2025</option>
                    </select>
                  </label>
                  <label>
                    CVV
                    <input type="number" name="" placeholder="CVV" className='order-input' onChange={(e) => setPayment({ ...payment, CVV: e.target.value })} />
                  </label>
                </div>
              </form>
              <input type="submit" name="" value="Proceed to Checkout" className='order-input' onClick={handleSubmit} />
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default Order;
