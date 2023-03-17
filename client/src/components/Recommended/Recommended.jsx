import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import "./Recommended.scss"
import useFetch from '../../hooks/useFetch'
const Recommended = ({type}) => {

  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className='recommended'>
        <div className="top">
            <h1>{type} Products</h1>
         
        </div>
        <div className="bottom">
            {error ? "Somethingwent wrong!" :
            loading ? "loading":
             data?.map((i) =>
                <ProductCard item={i} key={i.id} type={type}/>)}
            
            
        </div>
    </div>
  )
}

export default Recommended