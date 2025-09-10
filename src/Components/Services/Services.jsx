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
      <div className="warning">
        * Prices may adjust according to their specific needs, breed, size and
        coat type & condition. *
      </div>
      <div className="prices">
        <div className="all-services">
          <div className="price">
            <h2>BATH AND TIDY</h2>
            <p className="description">
              <i>
                Includes bath with premium shampoo & conditioner and blow dry,
                brush out, trimming around eye area, pads and paws & nail trim, ear cleaning, and sanitary
                trim for hygiene.
              </i>
            </p>
            <ul>
              <li>X-Small (~9lbs) - $80 & up</li>
              <li>Small (10-19lbs) - $90 & up</li>
              <li>Small Medium (20-29lbs) - $100 & up</li>
              <li>Medium (30-39lbs) - $110 & up</li>
              <li>Large (40-59lbs) - $130 & up</li>
              <li>X-Large (60-79lbs) - $150 & up</li>
              <li>XX-Large (80-99lbs) - $180 & up</li>
              <li>Giant (over 100lbs) - $210 & up</li>
            </ul>
          </div>
          <div className="price">
            <h2>FULL GROOMING</h2>
            <p className="description">
              <i>
                Includes full clipping, hand scissoring to finish, bath with
                premium shampoo & conditioner and blow dry, brush out, pads and
                paws & nail trim, ear cleaning, sanitary trim for hygiene.
              </i>
            </p>
            <ul>
              <li>X-Small (~9lbs) - $95 & up</li>
              <li>Small (10-19lbs) - $105 & up</li>
              <li>Small Medium (20-29lbs) - $115 & up</li>
              <li>Medium (30-39lbs) - $130 & up</li>
              <li>Large (40-59lbs) - $155 & up</li>
              <li>X-Large (60-79lbs) - $180 & up</li>
              <li>XX-Large (80-99lbs) - $220 & up</li>
              <li>Giant (over 100lbs) - $250 & up</li>
            </ul>
          </div>
          <div className="price">
            <h2>BATH & DRY</h2>
            <p className="description">
              <i>
                Includes bath with premium shampoo & conditioner and blow dry,
                brush out, nail trim, ear cleaning.
              </i>
            </p>
            <ul>
              <li>X-Small (~9lbs) - $50 & up</li>
              <li>Small (10-19lbs) - $60 & up</li>
              <li>Small Medium (20-29lbs) - $70 & up</li>
              <li>Medium (30-39lbs) - $80 & up</li>
              <li>Large (40-59lbs) - $100 & up</li>
              <li>X-Large (60-79lbs) - $125 & up</li>
              <li>XX-Large (80-99lbs) - $150 & up</li>
              <li>Giant (over 100lbs) - $180 & up</li>
            </ul>
          </div>

          <div className="price">
            <h2>Extra/Add-ons</h2>
            <ul style={{ "margin-top": "20px" }}>
              <li>Anal grands: $20</li>
              <li>Teeth brushing: $15</li>
              <li>De-shedding : $20/10 mins</li>
              <li>De-matting : $30/10 mins</li>
              <li>Ear cleaning & plucking: $25</li>
              <li>Paw pad shaving & tidy: $15</li>
              <li>Nail & grinding: $20</li>
              <li>Eye area trim: $15</li>
              <li>Sanitary & belly trimming: $20</li>
              <li>Face Trim: $25</li>
              <li>An ungroomed dog (Dirty): $20</li>
              <li>Poodle feet: $30</li>
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
              24 hours is subjected to a $15 cancellation fee. You may choose to
              reschedule your appointment with at least 24 hours notice at no
              charge.
            </p>
          </div>
          <div>
            <p className="policy-title">Late Policy:</p>
            <p className="policy-description">
              We appreciate a call if you are anticipating to be late. If you
              are more than 10 minutes late without notification, a fee may be
              applied at our discretion. We may also choose to reschedule you
              due to time restraints. Late Pick ups: please pick up your pets at
              the notified time.
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
            <h3 className="discount">10&#37; Off</h3>
            <h4 className="services_animated">&nbsp;On Full Grooming &amp; Bath &amp; Tidy&nbsp;</h4>
          </div>
        </div>
        <div className="service_grid-right">
          <h2>Welcome Offer</h2>
          <h3>10% Off Your First Grooming Appointment</h3>
          <p>From July 1, 2025</p>
          <div className="padding-30"></div>
          <a
            href="https://app.acuityscheduling.com/schedule.php?owner=33051599"
            target="_blank"
            className="btn"
          >
            BOOK NOW
          </a>
          <div className="padding-20"></div>
          <div className="disclaimer">
            *1 time only. <br />
            **This offer cannot be combined with any other offer. No cash value.
            Limit one service per visit.
          </div>
        </div>
      </div>
      {/* /ADDED - by HDC */}

      <div className="booking">
        <h1>Book Online below or call {isMobile && <br />} 604-731-1692</h1>
        <div className="book-online">
          <iframe
            src="https://app.acuityscheduling.com/schedule.php?owner=33051599&ref=embedded_csp"
            className="booking-system"
            title="Schedule Appointment"
            height="800"
            frameBorder="0"
          ></iframe>
          <script
            src="https://embed.acuityscheduling.com/js/embed.js"
            type="text/javascript"
          ></script>
        </div>
      </div>
    </>
  );
};

export default Services;
