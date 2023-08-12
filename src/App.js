import React, {useState} from 'react';
import { Route,Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Navbar from './components/navbar/Navbar';
// import Footer from './components/footer/Footer';
import Home from './components/Home/Home';
import Aboutus from './components/about/Aboutus';
import Veggie from './components/Cards/vegetable/Veggie';
import Fruity from './components/Cards/fruits/Fruity';
import Dairies from './components/Cards/dairy/Dairies';
import Contactus from './components/contact/Contactus';
import Refund from './components/refund/Refund';
import Cart from './components/Cart/Cart';
import Terms from './components/Terms/Terms';
import './index.css';
import Privacy from './components/privacy/Privacy';
import Order from './components/order/Order';


const App = () => {
  const [show , setshow] = useState(true);
  const [cart , setcart] = useState([]);
  const [warning , setwarning] = useState(false);

  const handleClick = (item)=>{
		let isPresent = false;
		cart.forEach((product)=>{
			if (item.id === product.id)
			isPresent = true;
		})
		if (isPresent){
			setwarning(true);
			setTimeout(()=>{
				setwarning(false);
			}, 2000);
			return ;
		}
		setcart([...cart, item]);
	}

  const handleChange = (item, d) =>{
		let ind = -1;
		cart.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cart;
		tempArr[ind].amount += d;
		
		if (tempArr[ind].amount === 0)
			tempArr[ind].amount = 1;
		setcart([...tempArr])
	}
  
  return (
    <>
    <Navbar size={cart.length} setshow={setshow}/>
    {/* <div style={{display:"flex" , alignItems:"revert"}}> */}
      {
        warning && <div className='warning'>Item is already present to your cart</div>
      }
    {/* </div> */}
    
    <Routes>
      <Route path="/" element={<Home handleClick={handleClick}/>}/>
      <Route path="/aboutUs" element={<Aboutus/>}/>
      <Route path='/vegetables-product' element={<Veggie handleClick={handleClick}/>}/> 
      <Route path="/cart" element={<Cart cart={cart} setcart={setcart} handleChange={handleChange}/>}/>
      <Route path="/dairy-product" element={<Dairies handleClick={handleClick}/>}/>
      <Route path="/fruits-product" element={<Fruity handleClick={handleClick}/>}/>
      <Route path="/refund" element={<Refund/>}/>
      <Route path="/contactus" element={<Contactus/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/terms" element={<Terms/>}/>
      <Route path="/privacy" element={<Privacy/>}/>
      <Route path="/cart/payment" element={<Order/>}/>
    </Routes>
    </> 
  )
}

export default App;