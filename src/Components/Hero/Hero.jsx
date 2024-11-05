import React from 'react'
import './Hero.scss'
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero_text'>
        <h1>Love your pet like the best. <br /> Treat your pet like our best</h1>
        <p>At our salon, we are dedicated to providing top-notch care for your beloved pet.<br></br> With a comprehensive range of services, we ensure your furry friend stays beautiful and content.</p>
        <br />
        <Link to="booking" smooth={true} offset={-160} duration={500} className='btn'>Book now</Link>
        </div>
    </div>
  )
}

export default Hero