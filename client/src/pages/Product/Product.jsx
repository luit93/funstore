import React, { useState } from 'react'
import "./Product.scss"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BalanceIcon from '@mui/icons-material/Balance';
const Product = () => {
    const [currentImg,setCurrentImg]=useState(0)
    const [quantity,setQuantity] = useState(1)
    const images=[
        "https://m.media-amazon.com/images/I/815Wugkm4EL.jpg",
        "https://cdn.shopify.com/s/files/1/0071/1609/5570/products/image_da7ffe5b-16c0-472b-8523-52b75bd025d8.jpg?v=1672629253",
    ]

  return (
    <div className='product'>
        <div className="left">
            <div className="images">
                <img src={images[0]} alt='' onClick={e=>setCurrentImg(0)}/>
                <img src={images[1]} alt='' onClick={e=>setCurrentImg(1)}/>
            </div>
            <div className="main-img">
                <img src={images[currentImg]} alt=''/>
            </div>
        </div>
        <div className="right">
            <h1>Title</h1>
            <span className='price'>$175</span>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit est nam tenetur rerum iure obcaecati, cum officia voluptatem aliquid eveniet sunt!
            </p>
            <div className="quantity">
                <button onClick={e=>setQuantity(prev=>prev === 1 ? 1 : prev-1)}>-</button>
                {quantity}
                <button onClick={e=>setQuantity(prev=>prev === 10 ? 10 : prev+1)}>+</button>
            </div>
            <button className="add">
                <AddShoppingCartIcon/>ADD TO CART
            </button>
            <div className="links">
                <div className="item"><FavoriteIcon/>ADD TO FAVOURITES</div>
                <div className="item"><BalanceIcon/>COMPARE</div>
            </div>
            <div className="details">
             
                <hr/>
                <span>Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit ametipsum dolor sit amet.</span>
            </div>
        </div>
    </div>
  )
}

export default Product