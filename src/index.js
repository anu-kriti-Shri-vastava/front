import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Context } from './context/Context';
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../src/reducers';
import {Auth0Provider} from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(reducers, compose(applyMiddleware(thunk)));
root.render(
  <Auth0Provider
    domain="dev-84lq4qdikixm2nuq.us.auth0.com"
    clientId="LYoe0fhD9vtmkuLIi4nm58wOZliStvGc"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <BrowserRouter>
  <Context>
  <Provider store={store}>
    <App />
    </Provider>
  </Context>
  </BrowserRouter>
  </Auth0Provider>
);


