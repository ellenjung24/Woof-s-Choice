import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  const[sticky, setStiky] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setStiky(true) : setStiky(false);
    })
  },[]);
    
  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo' />
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Services</li>
        <li>Contact us</li>
        {/* <li><button className='btn'>Book online</button></li> */}
        <li><a href="https://app.acuityscheduling.com/schedule.php?owner=32025918" target="_blank" className='btn'>Book online</a></li>
      </ul>
    </nav>
  )
}

export default Navbar