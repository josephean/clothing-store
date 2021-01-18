import React, { Component } from 'react';
import QuantityCounter from '../components/QuantityCounter';
import '../styles/ShoppingCartListItem.css';

class ShoppingCartListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: this.props.value,
      quantity: this.props.value.quantity,
      error: '',
    }

    this.edit = this.edit.bind(this);
    this.editQuantity= this.editQuantity.bind(this);

  }

  edit = (e, val) => {
    e.stopPropagation();
    const { item: { id, size, color} } = this.state;
    val = parseInt(val);
    if (val < 0) {
      this.setState({
        ...this.state,
        error: 'Quantity must be greater than 0.',
      })

      return;
    }

    else {
      this.setState({
        ...this.state,
        error: '',
      });
    
      const updatedItem = {
        id,
        quantity: val,
        size,
        color,
     }
    
      return this.props.onEdit(updatedItem);
    }
  }

  editQuantity = e => {
    e.stopPropagation();
    e.preventDefault();
    this.setState({
      ...this.state,
      quantity: e.target.value,
    })
  }

  render() {
    const { item, error } = this.state;
    return(
      <div className="shopping-cart-item-container">
        <div className="cart-item-row-flex">
          <div className="item-name">{item.name}</div>
          <div className="item-qty">
            Qty: <input className={`quantity-input ${error ? 'error-msg error-highlight' : ''}`} type="text" defaultValue={item.quantity} onChange={this.editQuantity}/><br/>
            <div className="update" onClick={(e) => this.edit(e, this.state.quantity)}>UPDATE</div>
            {error ? <div className="error-msg">{error}</div> : ''}
          </div>
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