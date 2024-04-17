import React from 'react';
import Navbar from '../components/Navbar.jsx';
import AboutContent from '../components/About.jsx'; // Rename the component import
import Footer from '../components/Footer';

const AboutPage = () => { // Rename the component
  return (
    <div>
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <AboutContent/> 
      <Footer />
    </div>
  );
};

export default AboutPage;
