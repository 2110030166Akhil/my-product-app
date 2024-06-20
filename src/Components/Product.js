// src/components/Product.js
import React from 'react';

const Product = ({ product }) => {
  return (
    <div className="product-item">
      <h2>{product.productName}</h2>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Discount: {product.discount}%</p>
      <p>Availability: {product.availability === 'yes' ? 'In Stock' : 'Out of Stock'}</p>
    </div>
  );
};

export default Product;
