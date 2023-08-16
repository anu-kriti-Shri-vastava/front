import React, { useState } from 'react';
import { useEffect } from 'react';
import "./Cart.css";
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const Cart = ({ cart, setcart, handleChange }) => {
    const [price, setPrice] = useState(0);
    const {isAuthenticated} = useAuth0();

    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (
            ans += item.amount * item.price
        ))
        setPrice(ans);
    }

    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setcart(arr);
        // handlePrice();
    }

    useEffect(() => {
        handlePrice();
    })

    return (
        <div className='crt'>
            <article>
                {cart?.map((item) => (
                        <div className="cart_box" key={item.id}>
                            <div className="cart_img">
                                <img src={item.img} />
                                <p style={{marginLeft:"5rem",marginTop:"1rem", fontSize:"1.5rem" ,color:"#192a56"}}>{item.name}</p>
                            </div>
                            <div>
                                <button onClick={() => handleChange(item, +1)}> + </button>
                                <button>{item.amount}</button>
                                <button onClick={() => handleChange(item, -1)}> - </button>
                            </div>
                            <div>
                                <span>{item.price}</span>
                                <button onClick={() => handleRemove(item.id)} >Remove</button>
                            </div>
                        </div>
                ))}

                <div className='total' style={{ margin: "1rem 0rem" }}>
                    <span>Total Price of your Cart</span>
                    <span>Rs - {price}</span>
                </div>
                {
                    isAuthenticated?<div className='buy-now' style={{ display: "flex", justifyContent: "end" }}>
                    <Link to="/cart/payment"><button style={{ width: "150px", height: "3rem", }}>Place Order</button></Link>
                </div>:<div className='buy-now' style={{ display: "flex", justifyContent: "end" }}>
                    <Link to="/"><button style={{ width: "150px", height: "3rem", }}>Login to Buy</button></Link>
                </div>
                }
                
            </article>
        </div>
    )
}

export default Cart