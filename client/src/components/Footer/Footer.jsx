import React from 'react'
import "./Footer.scss"
import Contact from '../Contact/Contact.jsx'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="top">
           <Contact />
        </div>
        <div className="bottom">
            <div className="left">
                <span className='logo'>FUNSTORE</span>
                <span className='copyright'>© Copyright 2023. All Rights Reserved</span>
            </div>
            <div className="right">
                <img src='/img/payment.png' />
            </div>
        </div>
    </div>
  )
}

export default Footer