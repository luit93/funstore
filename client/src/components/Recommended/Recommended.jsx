import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import "./Recommended.scss"

const Recommended = ({type}) => {
    const recProducts= [
        {
            "id": 1,
            "img_url": "https://images.unsplash.com/photo-1619023495338-ae6fa7307819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
            "img_url2": "https://images.unsplash.com/photo-1628426912481-b66c067fdf7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            "title": "Toy 1",
            "onSale": true,
            "old_price": 20.0,
            "sale_price": 15.0
        },
        {
            "id": 2,
            "img_url": "https://m.media-amazon.com/images/I/815Wugkm4EL.jpg",
            "img_url2": "https://cdn.shopify.com/s/files/1/0071/1609/5570/products/image_da7ffe5b-16c0-472b-8523-52b75bd025d8.jpg?v=1672629253",
            "title": "Toy 2",
            "onSale": true,
            "old_price": 25.0,
            "sale_price": 20.0
        },
        {
            "id": 3,
            "img_url": "https://images.unsplash.com/photo-1619023495338-ae6fa7307819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
            "img_url2": "https://images.unsplash.com/photo-1628426912481-b66c067fdf7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            "title": "Electronics 1",
            "onSale": true,
            "old_price": 100.0,
            "sale_price": 80.0
        },
        {
            "id": 4,
            "img_url": "https://images.unsplash.com/photo-1619023495338-ae6fa7307819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
            "img_url2": "https://images.unsplash.com/photo-1628426912481-b66c067fdf7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            "title": "Electronics 2",
            "onSale": false,
            "old_price": 150.0,
            "sale_price": 120.0
        }
    ]
  return (
    <div className='recommended'>
        <div className="top">
            <h1>{type} Products</h1>
            {/* <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores ad nesciunt vero commodi, quidem fugit ipsa amet placeat rerum animi.</p> */}
        </div>
        <div className="bottom">
            {recProducts.map(i =>(
                <ProductCard item={i} key={i.id}/>
            ))}
        </div>
    </div>
  )
}

export default Recommended