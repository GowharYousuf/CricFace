import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HomeProducts from '../components/HomeProducts';
import Footer from '../components/Footer';
const Home = () => {
    return (
      <div>
         <Navbar/>
        <Hero/>
        <HomeProducts/>
        <Footer/>
      </div>
    );
  };
  
  export default Home;
