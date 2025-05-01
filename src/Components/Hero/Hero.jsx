import React from 'react'
import './Hero.scss'
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero_text promotion_big">
        <h5>Woof's Choice Pet Grooming</h5>
        <h2>Thank You Promotion</h2>
        <h3>Through May &amp; June</h3>
        <div className="padding-20"></div>
        <div className="promotion-dance-container">
          <h3 className="discount">15&#37; Off</h3>
        </div>
        <h4>on Full Grooming &amp; Bath & Tidy</h4>
        <p>*1 time only </p>
        <p>Expires on June 30, 2025</p>
        <div className="padding-50"></div>
        <Link to="booking" smooth={true} offset={-160} duration={500} className='btn'>BOOK NOW</Link>
        <div className="disclaimer">**This offer cannot be combined with any other offer. No cash value. Limit one service per visit.</div>
        </div>  
    </div>
  )
}

export default Hero