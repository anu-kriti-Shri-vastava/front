import React, { Component } from 'react';
import './Order.css'; 
import Card1 from "../../images/extra/card1.png";
import Card2 from "../../images/extra/card2.png";

const Order = () => {
    return (
        <>
      <div>
        <header className='order-header'>
          <div className="order-container" style={{height:"40rem"}}>
            <div className="order-left">
              <h3>BILLING ADDRESS</h3>
              <form className='order-form'>
                Full name
                <input type="text" name="" placeholder="Enter name" className='order-input'/>
                Email
                <input type="text" name="" placeholder="Enter email" className='order-input'/>

                Address
                <input type="text" name="" placeholder="Enter address" className='order-input'/>

                City
                <input type="text" name="" placeholder="Enter City" className='order-input'/>
                <div id="zip">
                  <label>
                    State
                    <select>
                      <option>Choose State..</option>
                      <option>Rajasthan</option>
                      <option>Hariyana</option>
                      <option>Uttar Pradesh</option>
                      <option>Madhya Pradesh</option>
                    </select>
                  </label>
                  <label>
                    Zip code
                    <input type="number" name="" placeholder="Zip code" className='order-input'/>
                  </label>
                </div>
              </form>
            </div>
            <div className="order-right" >
              <h3 className='order-h3'>PAYMENT</h3>
              <form>
                Accepted Card <br />
                <img src={Card1} width="100" alt="Card 1" style={{margin:"1rem"}}/>
                <img src={Card2} width="50" alt="Card 2" style={{margin:"1rem"}}/>
                <br />
                <br />

                Credit card number
                <input
                  type="text"
                  name=""
                  placeholder="Enter card number"
                  className='order-input'
                  style={{margin:"1rem", height:"2rem"}}
                />
                Exp month
                <input type="text" name="" placeholder="Enter Month" className='order-input' style={{margin:"1rem", height:"2rem"}}/>
                <div id="zip">
                  <label>
                    Exp year
                    <select>
                      <option>Choose Year..</option>
                      <option>2022</option>
                      <option>2023</option>
                      <option>2024</option>
                      <option>2025</option>
                    </select>
                  </label>
                  <label>
                    CVV
                    <input type="number" name="" placeholder="CVV" className='order-input'/>
                  </label>
                </div>
              </form>
              <input type="submit" name="" value="Proceed to Checkout" className='order-input' />
            </div>
          </div>
        </header>
      </div>
      </>
    );
}

export default Order;
