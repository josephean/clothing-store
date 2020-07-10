import React, { Component } from 'react';
import '../styles/SearchItem.css';

const SearchItem = props => {
  const item = props.value;
  return(
    <div id="search-item-container">
      <div className="search-photo"><img height="80px" width="80px" src={item.image}></img></div>
      <div className="search-details">
        <div className="text">{item.category}</div>
        <div id="product-container" className="text">
          <div className="product"><strong>{item.name}</strong></div>
          <div className="price">${item.price}</div></div>
        </div>
    </div>
    
  );
}


export default SearchItem;