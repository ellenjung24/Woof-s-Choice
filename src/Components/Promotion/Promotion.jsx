import React from 'react'
import './Promotion.scss'
import freeNailClipping from '../../assets/free_nail_clipping.png'


const Promotion = () => {
  return (
        <div className="promotion">
            <h3>Grand Opening Event</h3>
            <img src={freeNailClipping} alt="" />
            <p className='expiration'>EXPIRES December 15, 2024</p>
            <p className='explanation'>* Please call to book an appointment for nail clipping! A free nail clipping is available once per customer. *</p>
            
        </div>
  )
}

export default Promotion