import React from 'react';
import '../styles/SearchItem.css';
import images from '../images';

const SearchItem = props => {
  const item = props.value;
  console.log('props.key :>> ', props.key);
  const img = images.products.find(product => product.id === parseInt(props.id));
  return(
    <div id="search-item-container">
      <div className="search-photo"><img height="80px" width="80px" src={img.options[0].src}></img></div>
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