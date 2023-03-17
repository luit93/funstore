import React from 'react'
import './ShoppingCart.scss'
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from 'react-redux';
import { removeItem, resetCart } from '../../redux/cartReducer';
import { useDispatch } from 'react-redux';
import {loadStripe} from '@stripe/stripe-js';
import {makeRequest} from "../../makeRequest"
const ShoppingCart = () => {
  const products = useSelector(state=>state.cart.products)
  const dispatch = useDispatch()

  const subTotal = ()=>{
    let total =0
    products.forEach((element) => {
      total+= element.quantity * element.price;
    }) 
   return total.toFixed(2)
  };


   const stripePromise = loadStripe('pk_test_51MmHHRICSxePYVSIgXPnIq3ZgnFnXsbClI8sQyRoP21sDIBHDegxJFk8w9IjGMxU7i7OOmq3cmSzElZDWTcqNowp00eVKfUOxS')

   
   const handleOnPayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
               sessionId: res.data.stripeSession.id,

      });

    } catch (err) {
      console.log(err);
    }
  };


  return (

    <div className='cart'>
        <h1>Items in your Cart</h1>
        {products.map(i=>(
          <div className="item" key={i.id}>
            <img src={process.env.REACT_APP_UPLOAD_URL + i.img} alt=''/>
            <div className="details">
              <h1>{i.title}</h1>
              <p>{i.desc?.substring(0,100)}</p>
              <div className="price"> {i.quantity} x ${i.price} </div>
            </div>
            <DeleteIcon className='delete' onClick={()=>dispatch(removeItem(i.id))}/>
          </div>
        ))}
        <div className="total">
          <span>TOTAL</span>
          <span>${subTotal()}</span>
        </div>
        <button onClick={handleOnPayment}>CHECKOUT</button>
        <span className="reset"  onClick={()=>dispatch(resetCart())}>Reset Cart</span>
    </div>
  )
}

export default ShoppingCart