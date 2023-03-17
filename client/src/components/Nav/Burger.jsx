import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import "./Burger.scss"
const Burger = () => {
  return (
    <div className='menu'> 
        <div className="menu-items">
            <a href='/' className='menu-item'>Toys</a>
            <a href='/' className='menu-item'>Electronics</a>
            <a href='/' className='menu-item'>Accessories</a>
            <a href='/' className='menu-item'>Media</a>
        </div>
        <div className="patter"></div>
    </div>
  )
}

export default Burger