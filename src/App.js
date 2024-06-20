// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import FilterPage from './Components/FilterPage';
import DisplayPage from './Components/DisplayPage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<FilterPage />} />
          <Route path="/display" element={<DisplayPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
