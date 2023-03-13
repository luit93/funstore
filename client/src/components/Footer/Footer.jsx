import React from 'react'
import "./Footer.scss"
const Footer = () => {
  return (
    <div className='footer'>
        <div className="top">
            <div className="item">
                <h1>Categories</h1>
                    <span>Toys</span>
                    <span>Electronics</span>
                    <span>Accessories</span>
                    <span>New</span>
            </div>
            <div className="item">
                <h1>Links</h1>
                    <span>FAQ</span>
                    <span>Shop</span>
                    <span>Pages</span>
                    <span>Cookies</span>
            </div>
            <div className="item">
                <h1>Contact</h1>
                <p>Luit Saikia<br></br>
                Sydney, NSW<br></br>
                luitsaikia1@gmail.com<br></br>
                <a href="https://github.com/luit93" target="_blank">GitHub</a><br></br>
                <a href="https://www.linkedin.com/in/luitsaikia/" target="_blank">LinkedIn</a><br></br>
                <a href="https://luitsaikia.vercel.app/" target="_blank">Portfolio</a><br></br>
                
                </p>
                
                
            </div>
            <div className="item">
                <h1>About</h1>
                <span>Experience a user friendly <br></br>interface & easy navigation! This website is built to ensure that you can easily browse through a wide range of products and purchase them with just a few clicks. I have ensured that the website is optimized for speed, security and reliability, ensuring that you have a smooth shopping experience every time you visit.</span>
            </div>
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