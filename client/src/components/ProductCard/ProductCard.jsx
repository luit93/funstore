import { Link } from 'react-router-dom'
import React from 'react'
import './ProductCard.scss'
const ProductCard = ({item,type}) => {
  return (
    <Link className='link' to={`/products/${item.id}` }>
        <div className='card'>
            <div className="image">
                {item?.attributes.onSale && <span>SALE!!</span>}
                <img src={process.env.REACT_APP_UPLOAD_URL + item.attributes?.img?.data?.attributes?.url} alt="" className="main" />
                <img src={process.env.REACT_APP_UPLOAD_URL + item.attributes?.img2?.data?.attributes?.url} alt="" className="second" />
            </div>
            <h2>{item?.attributes.title}</h2>
            <div className="prices">
                <h3>{item?.attributes.onSale && `$`+ (Number(item?.attributes.price)*1.69).toFixed(2)}</h3>
                <h3>${item?.attributes.price}</h3>
            </div>
        </div>  
    </Link>
  )
}

export default ProductCard