import React, {useEffect, useState} from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
// import Promotion from "./Components/Promotion/Promotion";
// import { BrowserRouter } from 'react-router-dom'

const App = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true); // Show popup on page load
  }, []);

  const handleClose = () => setShow(false);
  
  return (
    // <BrowserRouter>
    <div>
      <Navbar />
      <Hero />
      {show && (
  <div className="custom-popup-overlay">
    <div className="custom-popup">
      <button onClick={handleClose} className="custom-popup-close">
        ✕
      </button>
      <h2>🎉 Special Offer!</h2>
      <p>Get 10% off your first grooming appointment.</p>
      <button onClick={handleClose} className="custom-popup-btn">
        Got it!
      </button>
    </div>
  </div>
)}
      {/* <Promotion /> */}
      <div className="container">
        {/* <Title subTitle="About us" context="When it comes to pet grooming we believe that:" /> */}
        <About />
        <Title subTitle="Our Services" context="What We offer" />
        <Services />
        <Title subTitle="Contact Us" context="Store Info" />
        <Contact />
      </div>
      <Footer />
    </div>
    // </BrowserRouter>
  );
};

export default App;
