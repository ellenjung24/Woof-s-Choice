import React from "react";
import "./Services.css";
import small from "../../assets/small.jpeg";
import medium from "../../assets/medium.jpeg";
import large from "../../assets/large.jpeg";
import bath from "../../assets/bathtub.png";
import comb from "../../assets/comb.png";
import bar from "../../assets/bar.png";

const Services = () => {
  return (
    <>
    <div className="services">
      <div className="service">
        <img src={small} alt="" />
        <div className="caption">
          <img src={comb} alt="" />
          <p>Full Grooming</p> 
        </div>
      </div>
      <div className="service">
        <img src={medium} alt="" />
        <div className="caption">
          <img src={bath} alt="" />
          <p>Bath & Tidy</p>
        </div>
      </div>
      <div className="service">
        <img src={large} alt="" />
        <div className="caption">
          <img src={bar} alt="" />
          <p>A la carte Services</p>
        </div>
      </div>
    </div>

    {/* <h1 className="prices-title">Prices</h1>` */}

    <div className="prices">
      <div className="all-services">
        <div className="price">
          <h2>FULL GROOMING</h2>
          <p className="description"><i>Full clipping, hand scissoring to finish,, face trim, bath and blow dry, brush out, pads and paws shaping, nail trim, ear cleaning, sanitary trim, Anal glands</i></p>
          <ul>
            <li>$85 - up to 30lbs</li>
            <li>$120 - up to 49 lbs</li>
            <li>$140 - 50 lbs +</li>
          </ul>
        </div>
        <div className="price">
          <h2>BATH AND TIDY</h2>
          <p className="description"><i>Face trim, Pad trim and Paws shaping, Sanitary trim,  bath and heat blow dry, nail trim, ear cleaning</i></p>
          <ul>
            <li>$70 and up depending on breed and style</li>
          </ul>
        </div>
        <div className="price">
          <h2 style={{ 'margin-bottom': '20px' }}>A-LA-CARTE SERVICES <br />(WALK-INS ARE WELCOMED)</h2>
          <ul>
            <li>Nail trim : $20</li>
            <li>Sanitary trim : $15</li>
            <li>Pad shaving and Paw shaping : $15</li>
            <li>Anal glands : $20</li>
            <li>Ear cleaning : $15</li>
            <li>Teeth brushing : $10</li>
          </ul>
        </div>
      </div>
      <div className="price">
        <h2>THE FINE PRINT (PLEASE READ!)</h2>
        <p className="description"><i>Prices depend on size of dog, breed of dog, condition of the coat, type of coat and behaviour of dog</i></p>
        <div>
          <p className="policy-title">Cancellation/Rescheduling Policy:</p>
          <p className="policy-description">Cancellation notice of 24 hours is required.  Notice of less than 24 hours is subjected to a $15 cancellation fee for dogs 30lb and under, or $20 for dogs over 30lb.  You may choose to reschedule your appointment with at least 24 hours notice at no charge.</p>
        </div>
        <div>
          <p className="policy-title">Late Policy:</p>
          <p className="policy-description">We appreciate a call if you are anticipating to be late.  If you are more than 10 minutes late without notification, a fee may be applied at our discretion. We may also chose to reschedule you due to time restraints.  Late Pick ups: please pick up your pets at the notified time.  Dogs not picked up within a reasonable time will be subjected to a $1/minute fee or at end of day, a $50/night boarding fee after 30 minutes of no notification.</p>
        </div>
        <div>
          <p className="policy-title">No Show Policy:</p>
          <p className="policy-description">Clients who are no-show will not be allowed to book online moving forward.  Please call 604-682-1899 to make future appointments.  There will also be a $20 charge towards your next appointment.</p>
        </div>
      </div>
    </div>

    <div className="booking">
      <h1>Book Online below or call 778-874-9221</h1>
      <div className="book-online">
      <iframe src="https://app.acuityscheduling.com/schedule.php?owner=32025918" title="Schedule Appointment" width="50%" height="800" frameBorder="0"></iframe><script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script>
      </div>
    </div>

    </>
  );
};

export default Services;
