import React from "react";
import "./Contact.css";

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "10a00fd1-fa9f-46fc-b6a0-bdce0d51c35e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
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
        <p className="contact-description">We love caring for your furry friend! Call us for a meet and greet or to schedule any service appointment. If you have a special request send us a message, and we'll get back to you as soon as we can!</p>
        <p className="contact-title">Address</p>
        <div className="contact-info">
          2712 W 4th Ave, Vancouver, BC V6K 1R1
        </div>
        <p className="contact-title">Phone</p>
        <div className="contact-info">778-874-9221</div>
        <p className="contact-title">Email</p>
        <div className="contact-info">woofschoicepetgrooming@gmail.com</div>
        <p className="contact-title">Hours</p>
        <div className="contact-info">
          <p><b>Mon</b>&nbsp; 10:00 a.m. - 06:00 p.m.</p>
          <p><b>Tue</b>&nbsp;&nbsp;&nbsp; 10:00 a.m. - 06:00 p.m.</p>
          <p><b>Wed</b>&nbsp; 10:00 a.m. - 06:00 p.m.</p>
          <p><b>Thu</b>&nbsp;&nbsp;&nbsp; 10:00 a.m. - 06:00 p.m.</p>
          <p><b>Fri</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10:00 a.m. - 06:00 p.m.</p>
          <p><b>Sat</b> &nbsp;&nbsp; 10:00 a.m. - 06:00 p.m.</p>
          <p><b>Sun</b> &nbsp;&nbsp;10:00 a.m. - 06:00 p.m.</p>
        </div>
      
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label htmlFor="">Your Name</label>
            <input type="text" name="name" placeholder="Enter your name"  required/>
            <label htmlFor="">Phone Number</label>
            <input type="text" name="phone" placeholder="Enter your phone number"  required/>
            <label htmlFor="">Email Address</label>
            <input type="text" name="email" placeholder="Enter your email address"  required/>
            <label htmlFor="">Write your messages here</label>
            <textarea name="message" rows="6" placeholder="Enter your message"  required/>
            <button type="submit" className="submit-button">Submit</button>
        </form> 
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
