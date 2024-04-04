import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Services/Services";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="About us" context="Our Awesome Reviews" />
        <About />
        <Title subTitle="Our Services" context="What We offer" />
        <Services />
      </div>
    </div>
  );
};

export default App;
