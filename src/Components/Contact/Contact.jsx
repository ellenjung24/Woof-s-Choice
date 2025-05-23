import React from "react";
import "./Contact.scss";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/instagram";
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "040df02d-e284-4b18-b82d-f548a1a671d6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a message</h3>
        <p className="contact-description">
          We love caring for your furry friend! Call us for a meet and greet or
          to schedule any service appointment. If you have a special request
          send us a message, and we'll get back to you as soon as we can!
        </p>
        <p className="contact-title">Address</p>
        <div className="contact-info">
          2712 W 4th Ave, Vancouver, BC V6K 1R1 <br />
        </div>
        <p className="contact-title">Parking</p>
        <div className="contact-info">
          Parking is available at the back of the building
        </div>
        <p className="contact-title">Phone</p>
        <div className="contact-info">604-731-1692</div>
        <p className="contact-title">Email</p>
        <div className="contact-info">woofschoicegrooming@gmail.com</div>
        <p className="contact-title">Hours</p>
        <div className="contact-info">
          {/* <p><b>Mon</b>&nbsp; 10:00 a.m. - 06:00 p.m.</p>
          <p><b>Tue</b>&nbsp;&nbsp;&nbsp; 10:00 a.m. - 06:00 p.m.</p>
          <p><b>Wed</b>&nbsp; 10:00 a.m. - 06:00 p.m.</p>
          <p><b>Thu</b>&nbsp;&nbsp;&nbsp; 10:00 a.m. - 06:00 p.m.</p>
          <p><b>Fri</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10:00 a.m. - 06:00 p.m.</p>
          <p><b>Sat</b> &nbsp;&nbsp; 9:00 a.m. - 06:00 p.m.</p>
          <p><b>Sun</b> &nbsp;&nbsp;9:00 a.m. - 06:00 p.m.</p> */}
          <p>Mon - Sat&nbsp; 9:00 a.m. - 06:00 p.m.</p>
          <p>
            Sun
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9:00
            a.m. - 06:00 p.m.
          </p>
          {/* <p>Sat - Sun&nbsp; 09:00 a.m. - 06:00 p.m.</p> */}
        </div>
        <div className="social-icons">
          <a href="https://www.instagram.com/woofs_choice/" className="icon-instagram">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.google.com/maps/place/Woof's+Choice+Pet+Grooming/@49.2682206,-123.1693061,17z/data=!3m1!4b1!4m6!3m5!1s0x548673e9e0536ad7:0xe39436231bfdf3b7!8m2!3d49.2682206!4d-123.1667258!16s%2Fg%2F11lv86gxcm?entry=ttu&g_ep=EgoyMDI1MDQyMS4wIKXMDSoASAFQAw%3D%3D" className="icon-google" target="_blank">
            <FontAwesomeIcon icon={faGoogle} />
          </a>
        </div>
      </div>
      <div className="contact-col contact-form">
        <form onSubmit={onSubmit}>
          <label htmlFor="">Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label htmlFor="">Phone Number</label>
          <input
            type="text"
            name="phone"
            placeholder="Enter your phone number"
            required
          />
          <label htmlFor="">Email Address</label>
          <input
            type="text"
            name="email"
            placeholder="Enter your email address"
            required
          />
          <label htmlFor="">Write your messages here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
