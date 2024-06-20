// ProductDetail.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const ProductDetail = () => {
  const location = useLocation();
  const { productName, price, rating, discount, availability } = location.state.product;

  return (
    <div>
      <h2>{productName}</h2>
      <p>Price: ${price}</p>
      <p>Rating: {rating}</p>
      <p>Discount: {discount}%</p>
      <p>Availability: {availability}</p>
      <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default ProductDetail;
