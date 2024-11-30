import React, { useState, useEffect } from "react";
import "./Services.scss";
import small from "../../assets/small.jpeg";
import medium from "../../assets/medium.jpeg";
import large from "../../assets/large.jpeg";
import bath from "../../assets/bathtub.png";
import comb from "../../assets/comb.png";
import bar from "../../assets/bar.png";

const Services = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 780px)");

    const handleResize = (e) => {
      setIsMobile(e.matches);
    };

    // Attach listener for media query change
    mediaQuery.addEventListener("change", handleResize);

    // Set initial value
    setIsMobile(mediaQuery.matches);

    // Clean up listener on unmount
    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

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

      {/* <div className="warning">Prices depend on * size of dog, breed of dog, condition of the coat, type of coat and behaviour of dog *</div> */}
      <div className="warning">LARGE DOGS ARE WELCOME! *THESE ARE STARTING PRICES & SUBJECT TO CHANGE</div>
      <div className="prices">
        <div className="all-services">
          <div className="price">
            <h2>FULL GROOMING</h2>
            <p className="description">
              <i>
                Includes full clipping, hand scissoring to finish, bath with premium shampoo & conditioner and
                blow dry, brush out, pads and paws & nail trim, ear
                cleaning, sanitary trim, anal glands. Any extra de-matting is additional charge ($10).
              </i>
            </p>
            <ul>
              <li>X-Small (under 10lbs) - $75 ~</li>
              <li>Small (11-20lbs) - $85 ~</li>
              <li>Medium (21-30lbs) - $95 ~</li>
              <li>Large (31-40lbs) - $120 ~</li>
              <li>X-Large (41-60lbs) - $150 ~</li>
              <li>XX-Large (61-80lbs) - $170 ~</li>
              <li>Giant (over 81lbs) - Contact us</li>
            </ul>
          </div>
          <div className="price">
            <h2>BATH AND TIDY</h2>
            <p className="description">
              <i>
              Includes bath with premium shampoo & conditioner and
                blow dry, brush out, pads and paws & nail trim, ear
                cleaning, sanitary trim, anal glands. Any extra de-matting is additional charge ($10).
              </i>
            </p>
            <ul>
              <li>X-Small (under 12lbs) - $60 ~</li>
              <li>Small (13-20lbs) - $70 ~</li>
              <li>Medium (21-30lbs) - $80 ~</li>
              <li>Large (31-40lbs) - $90 ~</li>
              <li>X-Large (41-60lbs) - $110 ~</li>
              <li>XX-Large (61-80lbs) - $125 ~</li>
              <li>Giant (over 81lbs) - Contact us</li>
            </ul>
          </div>
          <div className="price">
            <h2 style={{ "margin-bottom": "20px" }}>
              A-LA-CARTE SERVICES <br />
              (WALK-INS ARE WELCOMED)
            </h2>
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
        <div className="price fine-print">
          <h2>THE FINE PRINT (PLEASE READ!)</h2>
          {/* <p className="description">
            <i>
              Prices depend on size of dog, breed of dog, condition of the coat,
              type of coat and behaviour of dog.
            </i>
          </p> */}
          <div>
            <p className="policy-title">Cancellation/Rescheduling Policy:</p>
            <p className="policy-description">
              Cancellation notice of 24 hours is required. Notice of less than
              24 hours is subjected to a $15 cancellation fee. You may choose to reschedule
              your appointment with at least 24 hours notice at no charge.
            </p>
          </div>
          <div>
            <p className="policy-title">Late Policy:</p>
            <p className="policy-description">
              We appreciate a call if you are anticipating to be late. If you
              are more than 10 minutes late without notification, a fee may be
              applied at our discretion. We may also choose to reschedule you due
              to time restraints. Late Pick ups: please pick up your pets at the
              notified time. 
              {/* Dogs not picked up within a reasonable time will be
              subjected to a $1/minute fee or at end of day, a $50/night
              boarding fee after 30 minutes of no notification. */}
            </p>
          </div>
          <div>
            <p className="policy-title">No Show Policy:</p>
            <p className="policy-description">
              Clients who are no-show will not be allowed to book online moving
              forward. Please call 604-731-1692 to make future appointments.
              There will also be a $20 charge towards your next appointment.
            </p>
          </div>
        </div>
      </div>

      <div className="booking">
        <h1>Book Online below or call {isMobile && <br />} 604-731-1692</h1>
        <div className="book-online">
          <iframe src="https://app.acuityscheduling.com/schedule.php?owner=33051599&ref=embedded_csp" className="booking-system" title="Schedule Appointment" height="800" frameBorder="0"></iframe><script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script>
        </div>
      </div>
    </>
  );
};

export default Services;
