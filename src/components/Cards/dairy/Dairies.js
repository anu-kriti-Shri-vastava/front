import React, { useState } from 'react';
import '../../items/style.css';

import Card from '../../Cards/Card/Card';
import list from '../../data/Data';
import Footer from '../../footer/Footer';

const Dairies = ({ handleClick }) => {

  const [query, setquery] = useState("");
  const dairyitem = list[0].dairy;
  const filteredDairy = dairyitem.filter(itemdata => itemdata.name.toLowerCase().includes(query));

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}><input type="text" placeholder='Search' onChange={(e) => setquery(e.target.value)}
        style={{ width: "70%", margin: "30px", height: "3.5rem" }} />
        <button style={{ width: "8rem", height: "3.5rem", marginTop: '1.8rem' }}>Search</button>
      </div>

      <div className='card-container'>
        <div><h2>Dairies</h2></div>
        <div className="card-item" style={{ padding: "2rem" }}>
          {
            filteredDairy.length === 0 ? (
              <h1>No item found</h1>) 
              : (filteredDairy.map(item => (
                <Card item={item} key={item.id} handleClick={handleClick} />)))
          }
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Dairies