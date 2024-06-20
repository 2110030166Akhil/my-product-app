// src/components/FilterPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for v6

const FilterPage = () => {
  const navigate = useNavigate(); // useNavigate instead of useHistory

  const [minPrice, setMinPrice] = useState('');
  const [minRating, setMinRating] = useState('');
  const [availability, setAvailability] = useState('');

  const handleFilterApply = () => {
    const queryParams = `minPrice=${minPrice}&minRating=${minRating}&availability=${availability}`;
    navigate(`/display?${queryParams}`);
  };

  return (
    <div className="filter-page">
      <h2>Filter Products</h2>
      <div className="filters">
        <label htmlFor="minPrice">Min Price:</label>
        <input type="number" id="minPrice" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
        <label htmlFor="minRating">Min Rating:</label>
        <input type="number" id="minRating" step="0.1" value={minRating} onChange={(e) => setMinRating(e.target.value)} />
        <label htmlFor="availability">Availability:</label>
        <select id="availability" value={availability} onChange={(e) => setAvailability(e.target.value)}>
          <option value="">All</option>
          <option value="yes">In Stock</option>
          <option value="no">Out of Stock</option>
        </select>
        <button onClick={handleFilterApply}>Apply Filters</button>
      </div>
    </div>
  );
};

export default FilterPage;
