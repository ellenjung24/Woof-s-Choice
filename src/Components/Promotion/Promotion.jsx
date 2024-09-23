import React from 'react'
import './Promotion.scss'
import freeNailClipping from '../../assets/free_nail_clipping.png'


const Promotion = () => {
  return (
        <div className="promotion">
            <h3>Grand Opening Event</h3>
            <img src={freeNailClipping} alt="" />
            <p>EXPIRES October 31, 2024</p>
            
        </div>
  )
}

export default Promotion