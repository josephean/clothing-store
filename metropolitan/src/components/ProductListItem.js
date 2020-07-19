import React from 'react';
import '../styles/ProductListItem.css';
import images from '../images';


import { Link } from 'react-router-dom';
const ProductListItem = props => {

  const options = images.products.find(product => product.id === props.item.id).options;
  const image = options[0];
  const imageDisplayed = image.src;

  return (
  <div id="productContainer">
    <div className="img">
      <Link className="item-link" to={'/item/' + props.item.id}>
        <img className="product-image" alt="placeholder" src={imageDisplayed}></img>
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