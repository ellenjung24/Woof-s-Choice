import React from 'react'
import './Hero.scss'
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero_text promotion_big">
        <div className="padding-20"></div>
        <h3>Woof's Choice Pet Grooming</h3>
          <h2 className="title_offer">Quality Grooming & Personal Care for Your Best Friend in Kitsilano</h2>
        <div className="padding-20"></div>
        <div className="promotion-dance-container">
          {/* discount */}
        </div>
        {/* offers_animated */}
        {/* h4 services_bg_animated" */}
        <div className="padding-50"></div>
        <Link to="booking" smooth={true} offset={-160} duration={500} className='btn'>BOOK NOW</Link>
        {/* disclaimer */}
        </div>  
    </div>
  )
}

export default Hero