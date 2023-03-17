import React from "react";
import "./ProductList.scss";
import useFetch from "../../hooks/useFetch";
import ProductCard from "../ProductCard/ProductCard";
const ProductList = ({ categoryId, subCategories, maxPrice, sort }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${categoryId}${subCategories.map((i)=>`&[filters][sub_categories][id][$eq]= ${i}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );


  return (
    <div className="list">
      {loading
        ? "Loading"
        : data?.map((i) => <ProductCard item={i} key={i.id} />)}
    </div>
  );
};

export default ProductList;
