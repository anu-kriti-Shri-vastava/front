import React from 'react';
import { Link } from 'react-router-dom';
import {Link as ScrollLink} from 'react-scroll';
import "./Navbar.css";
import { useAuth0 } from "@auth0/auth0-react";

import Cart from "../../images/slider/cart.png";
import Logo from "../../images/slider/logo.jpeg";

const Navbar = ({ size, setshow }) => {

    const { loginWithRedirect } = useAuth0();
    const { logout, isAuthenticated, user } = useAuth0();

    return (
        <header className="header">
            <div className="left">
                <img src={Logo} alt="logo" />
            </div>
            <div className="mid">
                <ul className="items">
                    <li><Link to="/">Home</Link></li>
                    <li><ScrollLink to="deals" spy={true} smooth={true} offset={600} duration={500} >Deals</ScrollLink></li>
                    <li><ScrollLink to="shop" spy={true} smooth={true} offset={100} duration={500} >Shop</ScrollLink></li>
                    <li><Link to="/aboutUs">About Us</Link></li>
                    <li><Link to="/contactUs">Contact Us</Link></li>
                </ul>
            </div>
            <div className="right">
                {
                    isAuthenticated && <p style={{ marginTop: "1.7rem", fontSize: "30px", marginRight: "40px" }}> {user.name} </p>
                }
                <Link to="/cart">
                    <div className="cart" onClick={() => setshow(false)}>
                        <img src={Cart} alt="cart" />
                        <span className='size'>{size}</span>
                    </div>
                </Link>
                {
                    isAuthenticated ? (
                        <div className='login buy-now'>
                            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                Log Out
                            </button>
                        </div>
                    ) : (
                        <div className="login buy-now">
                            <button onClick={() => loginWithRedirect()}>Login</button>
                        </div>
                    )
                }
            </div>
        </header>
    );
};

export default Navbar;
