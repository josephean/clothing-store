import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import ShoppingCartListItem from '../components/ShoppingCartListItem';

class ShoppingCartController extends Component {
  constructor(props) {
    super(props);

    this.generateCartList = this.generateCartList.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
  }

  generateCartList = items => {
    const cartList = items.map(item => <ShoppingCartListItem value={item}/>)
    return cartList;
  }

  calculateTotal = items => {
    const total = items.reduce((memo, curr) =>  {
      console.log('curr.quantity >>>', curr.quantity)
      return memo + curr.quantity;
    }, 0);
    return total;
  }



  render() {
    const { cart: { cartItems } } = this.props;
    return(
      <div>
         <div className="header">
            <div>
              <h1 className="header-text">Shopping Bag ({this.calculateTotal(cartItems)})</h1>
              </div>
            <div className="exit">
              <FontAwesomeIcon onClick={(e) => this.props.onClose(e)} icon={faTimes}/>
            </div>
          </div>
       <div id="shopping-cart-controller">{cartItems.length ? this.generateCartList(cartItems) : 'There are no items in your bag.'}</div>
      </div>
    )
  }
}

const mapStateToProps = state => ({cart: state.cart});
export default connect(mapStateToProps)(ShoppingCartController);