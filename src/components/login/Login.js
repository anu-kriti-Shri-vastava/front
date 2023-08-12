import React, { useState } from 'react';
import './Login.css'; 

const Login = () => {
  const [showRegistration, setShowRegistration] = useState(true);

  const toggleForm = () => {
    setShowRegistration(prevShowRegistration => !prevShowRegistration);
  };

  return (
    <header className="registration-header">
      <main className="registration-main">
        <section className={`user-container ${showRegistration ? 'login-section--display' : ''}`}>
          <div className="registration">
            <div className="grid-two--column">
              <div className="registration-form-text">
                <h4>{showRegistration ? 'Welcome Back' : 'Hello, Friend'}</h4>
                <p>
                  {showRegistration
                    ? 'To Connect With Us Please Login With Personal Account'
                    : 'Enter Your Personal Details And Start Journey With Us'}
                </p>
                <button className="login-btn registration-form-buttom" onClick={toggleForm}>
                  {showRegistration ? 'Login Here' : 'Register Here'}
                </button>
              </div>
              <div className="registration-form">
                <h4>{showRegistration ? 'Create Account' : 'Sign in Account'}</h4>
                <div className="social-account">
                  <a href="">
                    <i className="fa-brands fa-discord"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a href="">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </div>
                <p>{showRegistration ? 'or Use Your Email For Registration' : 'or Use Your Account'}</p>
                <form>
                  {showRegistration && (
                    <div className="input-field">
                      <label htmlFor="username">
                        <input className="registration-input" type="text" name="username" id="username" placeholder="Name" />
                      </label>
                    </div>
                  )}
                  <div className="input-field">
                    <label htmlFor="Email1">
                      <input className="registration-input" type="email" name="" id="Email1" placeholder="Email" />
                    </label>
                  </div>
                  <div className="input-field">
                    <label htmlFor="Password1">
                      <input className="registration-input" type="password" name="" id="Password1" placeholder="Password" />
                    </label>
                  </div>
                  <div className="input-field">
                    <input className="registration-submit registration-input" type="submit" name="" id="submit" value={showRegistration ? 'Register' : 'Login'} />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </header>
  );
};

export default Login;
