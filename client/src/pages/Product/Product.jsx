import React, { useState } from 'react'
import "./Product.scss"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BalanceIcon from '@mui/icons-material/Balance';
import { useParams } from 'react-router-dom';
import useFetch from "../../hooks/useFetch";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';

const Product = () => {
    const id = useParams().id
    const [currentImg,setCurrentImg]=useState('img')
    const [quantity,setQuantity] = useState(1)
    const dispatch = useDispatch()
    const { data, loading, error } = useFetch(`/products/${id}?populate=*`)

  return (
    <div className='product'>
       {loading?( "loading"): (
       <>
        <div className="left">
            <div className="images">
                <img src={process.env.REACT_APP_UPLOAD_URL +data?.attributes?.img?.data?.attributes?.url} alt='' onClick={(e)=>setCurrentImg("img")}/>
                <img src={process.env.REACT_APP_UPLOAD_URL +data?.attributes?.img2?.data?.attributes?.url} alt='' onClick={(e)=>setCurrentImg("img2")}/>
            </div>
            <div className="main-img">
                <img src={process.env.REACT_APP_UPLOAD_URL +data?.attributes[currentImg]?.data?.attributes?.url} alt=''/>
            </div>
        </div>
        <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <span className='price'>${data?.attributes?.price}</span>
            <p>
                {data?.attributes?.desc}
            </p>
            <div className="quantity">
                <button onClick={()=>setQuantity(prev=>prev === 1 ? 1 : prev-1)}>-</button>
                {quantity}
                <button onClick={()=>setQuantity(prev=>prev === 10 ? 10 : prev+1)}>+</button>
            </div>
            <button className="add" onClick={()=>dispatch(addToCart({
                id:data.id,
                title:data.attributes.title,
                desc:data.attributes.desc,
                img:data.attributes.img.data.attributes.url,
                price:data.attributes.price,
                quantity,
            }))}>
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
        </div></>)}
    </div>
  )
}

export default Product