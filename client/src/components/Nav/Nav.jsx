import React,{ useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import Person4Icon from '@mui/icons-material/Person4';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import "./Nav.scss"
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import ShoppingCart from '../ShoppingCart/ShoppingCart';

const Nav = () => {
    const [openCart,setOpenCart] = useState(false)
    const dispatch = useDispatch()
    const products = useSelector(state=> state.cart.products)

  return (
    <div className='navbar'>
        <div className="wrapper">
        <div className='left'>
            <div className="currency">
            <div className='item'>
                <img src='/img/en.png'/>
                <ArrowDropDownIcon />
            
            </div>
            <div className="item">
                <spam>USD</spam>
                <ArrowDropDownIcon/>
            </div>
            </div>
            
            <div className="item">
                <Link className='link' to="/categories/1">Toys</Link>
            </div>
            <div className="item">
                <Link className='link' to="/categories/3">Electronics</Link>
            </div>
            <div className="item">
                <Link className='link' to="/categories/2">Accessories</Link>
            </div>
            <div className="item">
                <Link className='link' to="/categories/4">Media</Link>
            </div>
        </div>
        <div className='center'>
            <Link className='link' to="/">FUNSTORE</Link>
        </div>
        <div className='right'>
        <div className='item'>
            <Link className='link' to="/">Home</Link>
        </div>
        <div className='item'>
            <Link className='link' to="/">About</Link>
        </div>
        <div className='item'>
            <Link className='link' to="/">Shop</Link>
        </div>
        <div className='item'>
            <Link className='link' to="/">Contact</Link>
        </div>
        <div className="icons">
            <SearchIcon/>
            <Person4Icon/>
            <FavoriteBorderIcon/>
            <div className="cart-icon" onClick={()=>setOpenCart(!openCart)}>
                <ShoppingCartIcon />
                <span>{products.length}</span>
            </div>
        </div>
        </div>
        </div>
        {openCart && <ShoppingCart/>}
        
    </div>
  )
}

export default Nav