import { Link } from 'react-router-dom'
import React from 'react'
import './ProductCard.scss'
const ProductCard = ({item}) => {
  return (
    <Link className='link' to={`/product/${item.id}`}>
        <div className='card'>
            <div className="image">
                {item.onSale && <span>SALE!!</span>}
                <img src={item.img_url} alt="" className="main" />
                <img src={item.img_url2} alt="" className="second" />
            </div>
            <h2>{item.title}</h2>
            <div className="prices">
                <h3>{item.onSale && `$`+ item.old_price}</h3>
                <h3>${item.sale_price}</h3>
            </div>
        </div>  
    </Link>
  )
}

export default ProductCard