import React from 'react';
import './Tile.css'; 

const Tile = ({item}) => {
  return (
    <div className="product-grid">
  {item.map((val)=>(
    <div className="product-tile">
      <img src={require(`${val.image}`)} alt={val.name}></img>
      <div className="product-info">
        <h3>{val.name}</h3>
      </div>
    </div>
  ))}
</div>

  );
};

export default Tile;
