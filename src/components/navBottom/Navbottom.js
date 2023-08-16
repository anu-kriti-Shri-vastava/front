import React from 'react';
import "./Navbottom.css";


const Navbottom = () => {
  
  return (

    <div className="nav-bottom" style={{marginBottom:"3rem"}} id='deals' >
      <div className="lef"> 
        <h3 style={{ color: '#55f358', padding: '10px'}}>Save upto 50%off</h3>
        <h1 style={{ color: 'white', padding: '10px' }}>BUY FRESH <br />ORGANIC FOOD!</h1>
        <h5 style={{ color: 'white', padding: '10px' }}>Indulge in Nature's Bounty:<br />Farm-Fresh Fruits and vegies to Your Doorstep!</h5><br />
        <div className="buy-now"><button>Buy Now</button></div>
      </div>
    </div>
    
  );
};

export default Navbottom;
