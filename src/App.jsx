import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
// import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    // <BrowserRouter>
    <div>
      <Navbar />
      <Hero />
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
