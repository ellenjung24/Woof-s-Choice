import React from "react";
import "./About.scss";
import dog2 from "../../assets/dog4.png";


const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={dog2} alt="" className="about-img"/>
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
