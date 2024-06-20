// src/components/DisplayPage.js
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Product from './Product';
import productsData from '../Products.json';

const DisplayPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const minPrice = queryParams.get('minPrice');
  const minRating = queryParams.get('minRating');
  const availability = queryParams.get('availability');

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    let filtered = productsData;

    if (minPrice) {
      filtered = filtered.filter(product => product.price >= parseInt(minPrice));
    }
    if (minRating) {
      filtered = filtered.filter(product => product.rating >= parseFloat(minRating));
    }
    if (availability) {
      filtered = filtered.filter(product => {
        if (availability === 'yes') {
          return product.availability === 'yes';
        } else if (availability === 'no') {
          return product.availability !== 'yes';
        }
        return true; // For 'All' option
      });
    }

    setFilteredProducts(filtered);
  }, [minPrice, minRating, availability]);

  return (
    <div className="display-page">
      <h2>Filtered Products</h2>
      <div className="product-list">
        {filteredProducts.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default DisplayPage;
