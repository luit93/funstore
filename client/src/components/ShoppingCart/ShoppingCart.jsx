import React from 'react'
import './ShoppingCart.scss'
import DeleteIcon from '@mui/icons-material/Delete';
const ShoppingCart = () => {
  const cartData= [
    {
      "id": 1,
      "img_url": "https://images.unsplash.com/photo-1619023495338-ae6fa7307819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      "img_url2": "https://images.unsplash.com/photo-1628426912481-b66c067fdf7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      "title": "Toy 1",
      "desc":"buying this item now!",
      "onSale": true,
      "old_price": 20.0,
      "sale_price": 15.0
  },
  {
    "id": 2,
    "img_url": "https://m.media-amazon.com/images/I/815Wugkm4EL.jpg",
    "img_url2": "https://cdn.shopify.com/s/files/1/0071/1609/5570/products/image_da7ffe5b-16c0-472b-8523-52b75bd025d8.jpg?v=1672629253",
    "title": "Toy 2",
    // "desc":"buying this item for some one!",
    "onSale": true,
    "old_price": 25.0,
    "sale_price": 20.0
},
  ]
  return (
    <div className='cart'>
        <h1>Items in your Cart</h1>
        {cartData.map(i=>(
          <div className="item" key={i.id}>
            <img src={i.img_url} alt=''/>
            <div className="details">
              <h1>{i.title}</h1>
              <p>{i.desc?.substring(0,100)}</p>
              <div className="price">1 x ${i.sale_price}</div>
            </div>
            <DeleteIcon className='delete'/>
          </div>
        ))}
        <div className="total">
          <span>TOTAL</span>
          <span>$35</span>
        </div>
        <button>CHECKOUT</button>
        <span className="reset">Reset Cart</span>
    </div>
  )
}

export default ShoppingCart