import React from 'react';
import './Tile.css'; 

const Tile = ({  name, image}) => {
  return (
    <div className="product-tile" >
      <img src={require(`${image}`)} alt={name} />
      <div className="product-info">
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default Tile;
