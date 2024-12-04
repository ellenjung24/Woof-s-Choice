import React from 'react'
import './Promotion.scss'
import freeNailClipping from '../../assets/free_nail_clipping.png'


const Promotion = () => {
  return (
        <div className="promotion">
            <h3>Grand Opening Event</h3>
            <img src={freeNailClipping} alt="" />
            <p className='expiration'>EXPIRES December 31, 2024</p>
            <p className='explanation'>* Walk-ins are welcomed! No appointment is needed. A free nail clipping is available once per customer. *</p>
            
        </div>
  )
}

export default Promotion