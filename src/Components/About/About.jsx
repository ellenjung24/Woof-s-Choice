import React from "react";
import "./About.css";
import dog1 from "../../assets/grooming_dog1.jpg";
import dog2 from "../../assets/grooming_dog2.jpg";
import dog3 from "../../assets/mongle1.jpeg";
// import next_icon from "../../assets/next_icon.png";
// import back_icon from "../../assets/back_icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="gallery">
        <img src={dog1} alt="" />
        <img src={dog2} alt="" />
        <img src={dog3} alt="" />
      </div>
    </div>
  );
};

export default About;
