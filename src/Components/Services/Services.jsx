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
      <div className="warning">* Prices may adjust according to their specific needs, breed, size and coat type & condition. *</div>
      <div className="prices">
        <div className="all-services">
          <div className="price">
            <h2>FULL GROOMING</h2>
            <p className="description">
              <i>
                Includes full clipping, hand scissoring to finish, bath with premium shampoo & conditioner and
                blow dry, brush out, pads and paws & nail trim, ear
                cleaning, sanitary trim, anal glands. Any extra de-matting is additional charge ($20).
              </i>
            </p>
            <ul>
              <li>X-Small (~ 9lbs) - $80 & up</li>
              <li>Small (10-20lbs) - $90 & up</li>
              <li>Small Medium (21-30lbs) - $110 & up</li>
              <li>Medium (31-40lbs) - $130 & up</li>
              <li>Large (41-60lbs) - $150 & up</li>
              <li>X-Large (61-80lbs) - $170 & up</li>
              <li>Giant (over 81lbs) - $220 & up</li>
            </ul>
          </div>
          <div className="price">
            <h2>BATH AND TIDY</h2>
            <p className="description">
              <i>
              Includes bath with premium shampoo & conditioner and
                blow dry, brush out, pads and paws & nail trim, ear
                cleaning, sanitary trim, anal glands. Any extra de-matting is additional charge ($20).
              </i>
            </p>
            <ul>
              <li>X-Small (~9lbs) - $60 & up</li>
              <li>Small (10-20lbs) - $70 & up</li>
              <li>Medium (21-40lbs) - $90 & up</li>
              <li>Large (41-60lbs) - $110 & up</li>
              <li>X-Large (61-80lbs) - $140 & up</li>
              <li>Giant (over 81lbs) - $180 & up</li>
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
              <li>Face tidy : $20</li>
              <li>De-shedding : $15</li>
              <li>Poodle feet : $20</li>
              <li>Behaviour : + $20-30</li>
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

{/* ADDED - by HDC */}
    <div className="service_grid">
      <div className="service_grid-left">
        <div className="service_text">
          <h3 className="discount">15&#37; Off</h3>
          <h4>&nbsp;On Full Grooming &amp; Bath &amp; Tidy&nbsp;</h4>
        </div>
      </div>
      <div className="service_grid-right">
        <h2>Thank You Promotion</h2>
        <h3>through May &amp; June</h3>
        <p>Expires on June 30, 2025</p>
        <div className="padding-30"></div>
        <a href="https://app.acuityscheduling.com/schedule.php?owner=33051599" target="_blank" className='btn'>BOOK NOW</a>
        <div className="padding-20"></div>
        <div className="disclaimer">*1 time only. <br />**This offer cannot be combined with any other offer. No cash value. Limit one service per visit.</div>
      </div>
    </div>
{/* /ADDED - by HDC */}

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
