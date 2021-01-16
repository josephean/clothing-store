import React, { Component } from 'react';
import '../styles/ShoppingCartListItem.css';

class ShoppingCartListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const item = this.props.value;
    return(
      <div className="shopping-cart-item-container">
        <div className="cart-item-row-flex">
          <div className="item-name">{item.name}</div>
          <div className="item-qty">Qty: {item.quantity}</div>
        </div>
        <div className="cart-item-row-details">
          <div className="item-price">${item.price}</div>
        </div>
        <div className="cart-item-row-details">
          <div className="item-size">SIZE: {item.size}</div>
        </div>
        <div className="cart-item-row-details">
          <div className="item-color">COLOR: {item.color}</div>
        </div>
      </div>
    )
  }
}

export default ShoppingCartListItem;