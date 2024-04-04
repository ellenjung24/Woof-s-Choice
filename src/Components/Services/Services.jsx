import React from "react";
import "./Services.css";
import small from "../../assets/small.jpeg";
import medium from "../../assets/medium.jpeg";
import large from "../../assets/large.jpeg";

const Services = () => {
  return (
    <div className="services">
      <div className="service">
        <img src={small} alt="" />
        <div className="caption">
          <p>Small Size Dog <br></br>
          $65</p>
          </div>
      </div>
      <div className="service">
        <img src={medium} alt="" />
        <div className="caption">
          <p>Medium Size Dog <br></br>
          $80</p>
          </div>
      </div>
      <div className="service">
        <img src={large} alt="" />
        <div className="caption">
          <p>Large Size Dog <br></br>
          $99</p>
          </div>
      </div>
    </div>
  );
};

export default Services;
