import React from 'react';
import './Card.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Card = ({ item, handleClick }) => {
  if (!item) {
    return null;
  }
  const { name, price, img } = item;
  
  return (
    <div className="box">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <div className="stars">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star-half-alt"></i>
      </div>
      <div className="price-btn-container">
        <span className="price">Rs {price}</span>
        <button href="#" className="btn" onClick={() => handleClick(item)}>Add to cart</button>
      </div>
    </div>
  );
};

export default Card;
