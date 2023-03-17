import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ProductList from "../../components/ProductList/ProductList";
import "./Categories.scss";
import useFetch from "../../hooks/useFetch";

export const Categories = () => {
  const categoryId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState('asc');
  const [currentSubCategories, setCurrentSubCategories] = useState([]);
  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eq]=${categoryId}`
  );
  // console.log('wwww'+data.data);
  const handleOnChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setCurrentSubCategories(
      isChecked
        ? [...currentSubCategories, value]
        : currentSubCategories.filter((i) => i !== value)
    );
  };
  // console.log("www"+currentSubCategories); 
  return (
    <div className="categories">
      <div className="left">
        <div className="filter">
          <h2>Product Categories</h2>

          {data?.map((item) => (
            <div className="input-item" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleOnChange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>
        <div className="filter">
          <h2>Price</h2>
          <div className="input-item">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filter">
          <h2>Sort by</h2>
          <div className="input-item">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price(Low)</label>
          </div>
          <div className="input-item">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(e) => setSort("desc")}
            />
            <label htmlFor="desc">Price(High)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <h2>Category Name</h2>
        <img
          className="category-img"
          src="https://images.unsplash.com/photo-1602029908656-b54d40a76ad8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
        <ProductList
          categoryId={categoryId}
          maxPrice={maxPrice}
          sort={sort}
          subCategories={currentSubCategories}
        />
      </div>
    </div>
  );
};

export default Categories;
