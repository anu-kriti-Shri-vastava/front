import React, {useState} from 'react';
import './style.css';
import Card from '../Cards/Card/Card';
import list from '../data/Data';

const Homeitems = ({handleClick}) => {
    const vegeitem = list[0].veggi;
    const fruititem = list[0].fruits;
    const [query , setquery] = useState("");
    const filteredFruits = fruititem.filter(itemdata => itemdata.name.toLowerCase().includes(query));
    const filteredVeggitable = vegeitem.filter(itemdata => itemdata.name.toLowerCase().includes(query));

    return (
        <>
        <div style={{display:"flex",justifyContent:"center"}}><input type="text" placeholder='Search' 
    onChange={(e) => setquery(e.target.value)}
    style={{width: "70%", margin: "30px", height:"3.5rem"}}/>
    <button style={{width:"8rem", height:"3.5rem",marginTop:'1.8rem'}}>Search</button>
    </div>
            <div className='card-container'>
                <div><h2>Vegetables</h2></div>
                <div className="card-item" style={{ padding: "2rem" }}>
                    {
                        filteredVeggitable.length === 0 ? (
              <h1>No item found</h1>
            ) : (
                filteredVeggitable.map(item => (
                <Card item={item} key={item.id} handleClick={handleClick} />
              ))
            )
                    }
                </div>
            </div>

            <div className='card-container'>
                <div><h2>Fruits</h2></div>
                <div className="card-item" style={{ padding: "2rem" }}>
                    {
                        filteredFruits.length === 0 ? (
              <h1>No item found</h1>
            ) : (
              filteredFruits.map(item => (
                <Card item={item} key={item.id} handleClick={handleClick} />
              ))
            )
                    }
                </div>
            </div>
        </>

    )
}

export default Homeitems