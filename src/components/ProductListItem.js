import React, { Component } from 'react';
import '../styles/ProductListItem.css';

import { Link } from 'react-router-dom';
const ProductListItem = props => {
  return (
  <div id="productContainer">
    <div className="img">
      <Link className="item-link" to={'/item/' + props.item.id}>
        <img className="product-image" alt="placeholder" src={props.item.image}></img>
      </Link>
    </div>
    <div className="product-text">
      <div className="category-label">{props.item.category}</div>
      <div className="name">
        <Link className="item-link" to={'/item/' + props.item.id}>{props.item.name}</Link>
      </div>
      <div className="price">${props.item.price}</div>
      <button className="button add-cart">Add to bag</button>
    </div>
    </div>);
}

export default ProductListItem;