import React, {useState} from 'react';
import Navbottom from '../navBottom/Navbottom';
import Buttons from '../buttons/Buttons';
import Carousel from '../carousel/Carousel';
import Homeitems from '../items/Homeitems';
import Footer from "../footer/Footer";

const Home = ({handleClick}) => {
  return (
    <>
      <div>
        <Navbottom/>
        <Buttons/> 
        <Carousel/>
        <Homeitems handleClick={handleClick}/>
        <Footer/>
      </div>
    </>
  )
}

export default Home