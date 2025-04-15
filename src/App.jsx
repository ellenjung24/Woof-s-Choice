import React, {useEffect, useState} from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import dogAd from "./assets/dog-ad-2.png";
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
  <div className="promo-overlay">
    <div className="promo-box">
      <div className="promo-image">
        <img src={dogAd} alt="Special Offer" />
      </div>
      <div className="promo-content">
      <button className="promo-close" onClick={handleClose}>✕</button>

        <p>Enjoy an extra</p>
        <h4>10% Off</h4>
        <p>First grooming appointment in May</p>
        <a href="https://app.acuityscheduling.com/schedule.php?owner=33051599" target="_blank">
          <button className="promo-btn">Book Now</button>
        </a>
        <span className="no-thanks" onClick={handleClose}>No, Thanks</span>
      </div>
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
