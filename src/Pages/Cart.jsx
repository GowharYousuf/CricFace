import React from 'react'
import Navbar from '../components/Navbar';
import Cart from '../components/Cart';
import Footer from '../components/Footer';

const Cartpage = () => {
  return (
    <div>
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <Cart style={{ marginTop: '100px' }} />
      <Footer/>
    </div>
  )
}

export default Cartpage
