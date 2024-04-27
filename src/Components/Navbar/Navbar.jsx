import React, { useEffect, useState } from 'react';
import './Navbar.scss';
import { Link } from 'react-scroll';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo' />
      <ul>
        <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to="about" smooth={true} offset={-150} duration={500}>About us</Link></li>
        <li><Link to="services" smooth={true} offset={-260} duration={500}>Services</Link></li>
        <li><Link to="contact" smooth={true} offset={-260} duration={500}>Contact us</Link></li>
        <li><a href="https://app.acuityscheduling.com/schedule.php?owner=32025918" target="_blank" className='btn'>Book online</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
