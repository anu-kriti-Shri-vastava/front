import React from 'react';
import { Link } from 'react-router-dom';
import './Buttons.css';

import Dairy from '../../images/buttons/dairy.png';
import Fruits from '../../images/buttons/fruits.png';
import Vege from '../../images/buttons/vegetable.png';
import Orange from '../../images/buttons/orange.png';


const Buttons = () => {
  return (
    <div id="Categories">
      <div align="center" style={{ margin: "0px", marginTop: "1rem" }}>
        <Link to="/fruits-product">
          <button class="button button1">
            <div className='button-item'>
              <div>
                <img src={Fruits} width="70" height="70" alt='Fruits' />
              </div>
              <div className='button-text'>
                FRUITS
              </div>
            </div>
          </button></Link>

        <Link to="/vegetables-product">
          <button class="button button1">
            <div className='button-item'>
              <div>
                <img src={Vege} width="70" height="70" alt='Vegetables' />
              </div>
              <div className='button-text'>
                VEGETABLES
              </div>
            </div>
          </button></Link>

        <Link to="/seasonals">
          <button class="button button1">
            <div className='button-item'>
              <div>
                <img src={Orange} width="70" height="70" alt='Seasonals' />
              </div>
              <div className='button-text'>
                SEASONALS
              </div>
            </div>
          </button></Link>

        <Link to="/dairy-product">
          <button class="button button1">
            <div className='button-item'>
              <div>
                <img src={Dairy} width="70" height="70" alt='Extra' />
              </div>
              <div className='button-text'>
                Dairy
              </div>
            </div>
          </button></Link>

      </div>
    </div>
  )
}

export default Buttons