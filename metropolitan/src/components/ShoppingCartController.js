import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import ShoppingCartListItem from '../components/ShoppingCartListItem';
import { updateProduct } from '../actions/cartActions';

export const calculateTotal = items => {
  const total = items.reduce((memo, curr) =>  {
    return memo + curr.quantity;
  }, 0);
  return total;
}

class ShoppingCartController extends Component {
  constructor(props) {
    super(props);

    this.generateCartList = this.generateCartList.bind(this);
    this.editCart = this.editCart.bind(this);
  }

  editCart = item => {
    const { quantity } = item;
    if (quantity >= 0) {
      const { updateProduct } = this.props;
      updateProduct(item);
    }
  }

  generateCartList = items => {
    const cartList = items.map(item => <ShoppingCartListItem key={item.id} onEdit={this.editCart} value={item}/>)
    
    return cartList;
  }



  render() {
    const { cart: { cartItems } } = this.props;
    return(
      <div style={{width: '100%'}}>
         <div className="header">
            <div>
              <h1 className="header-text">Shopping Bag ({calculateTotal(cartItems)})</h1>
              </div>
            <div className="exit">
              <FontAwesomeIcon onClick={(e) => this.props.onClose(e)} icon={faTimes}/>
            </div>
          </div>
       <div id="shopping-cart-controller">
          <div className="cart-list">{cartItems.length ? this.generateCartList(cartItems) : 'There are no items in your bag.'}</div>
          <div className="checkout-button"><button className="action-button">Checkout</button></div>
       </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({cart: state.cart});
const mapDispatchToProps = { updateProduct };

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartController);