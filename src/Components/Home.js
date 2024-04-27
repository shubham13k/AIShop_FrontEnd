import React, { useState }from 'react';
import ClothingList from './ClothingList';
import './Home.css'; // Import the CSS file for styling
import { Navbar } from './Navbar';

export const Home = () => {

  const [filter, setFilter] = useState('');

  const handleFilter = (value) => {
    setFilter(value);
  };

  return (
    
    <div className="home-container">
      <Navbar handleFilter={handleFilter} />
      <h1>Welcome to Our AI Shop
      </h1>
      <div className="clothing-list">
        <ClothingList filter={handleFilter} />
      </div>
    </div>
  )
}
