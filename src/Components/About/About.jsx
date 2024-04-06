import React from "react";
import "./About.css";
// import dog1 from "../../assets/grooming_dog1.jpg";
import dog2 from "../../assets/dog.png";
// import dog3 from "../../assets/mongle1.jpeg";
// import next_icon from "../../assets/next_icon.png";
// import back_icon from "../../assets/back_icon.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        {/* <img src={dog1} alt="" /> */}
        <img src={dog2} alt="" className="about-img"/>
        {/* <img src={dog3} alt="" /> */}
      </div>
      <div className="about-right">
        <h3>ABOUT US</h3>
        <h2>When it comes to pet grooming we believe that:</h2>
        <p>At <b className="name_emp">Woof's Choice</b> we ensure that all grooming services are focused on the safety and needs of the dog as well as quality of the service. We book wider appointment slots so that our professional groomers can provide the personal service required for your pet.</p>
        <p>All pets should receive a high quality and professional service. Also all our fur friends should be groomed in a comfortable and safe environment.</p>
        <p>Keeping your pet safe, healthy and happy is our biggest concern. <b className="name_emp">Woof's Choice</b> will groom your pet with the very best care while providing an exceptional service.</p>
      </div>
    </div>
  );
};

export default About;
