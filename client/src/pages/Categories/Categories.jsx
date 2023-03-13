import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductList from '../../components/ProductList/ProductList'
import "./Categories.scss"
export const Categories = () => {

  const categoryId = parseInt(useParams().id)
  const [maxPrice,setMaxPrice]=useState(1000)
  const[sort,setSort]= useState(null)
  return (
    <div className='categories'>
      <div className="left">
        <div className="filter">
          <h2>Product Categories</h2>
          <div className="input-item">
            <input type='checkbox' id='1' value={1}/>
            <label htmlFor='1'>Comics</label>
          </div>
          <div className="input-item">
            <input type='checkbox' id='1' value={1}/>
            <label htmlFor='1'>Games</label>
          </div>
          <div className="input-item">
            <input type='checkbox' id='1' value={1}/>
            <label htmlFor='1'>Music</label>
          </div>
        </div>
        <div className="filter">
          <h2>Price</h2>
            <div className="input-item">
              <span>0</span>
              <input type="range" min={0} max={1000} onChange={e=>setMaxPrice(e.target.value)}/>
              <span>{maxPrice}</span>
            </div>
        </div>
        <div className="filter">
          <h2>Sort by</h2>
          <div className="input-item">
            <input type='radio' id='asc' value='asc' name='price' onChange={e=>setSort('asc')}/>
            <label htmlFor='asc'>Price(Low)</label>
          </div>
          <div className="input-item">
            <input type='radio' id='dsc' value='dsc' name='price' onChange={e=>setSort('dsc')}/>
            <label htmlFor='dsc'>Price(High)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img className='category-img' src='https://images.unsplash.com/photo-1602029908656-b54d40a76ad8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' alt=''/>
        <ProductList categoryId={categoryId} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  )
}

export default Categories
