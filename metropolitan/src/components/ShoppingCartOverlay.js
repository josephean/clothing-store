import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../actions/cartActions';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import ShoppingCartController from '../components/ShoppingCartController';
import '../styles/ShoppingCartOverlay.css';

class ShoppingCartOverlay extends Component {
  constructor(props) {
    super(props);
  
    this.closeOverlay = this.closeOverlay.bind(this);
  }

  closeOverlay = e => {
    e.stopPropagation();
    this.props.toggle(e);
  }

  render() {
    const visibility = this.props.visibility ? 'show' : 'hide';

    return(
      <div id="cart-overlay-container">
        {visibility === 'show' ? <div className="blocker" onClick={(e) => this.closeOverlay(e)}></div> : ''}
        <CSSTransition 
        in={this.props.visibility} 
        timeout={300}
        unmountOnExit
        className={`cart-container ${visibility}`}>
          <div><ShoppingCartController onClose={(e) => this.closeOverlay(e)}/></div> 
        </CSSTransition>
      </div>
    )
  };
}

const mapStateToProps = state => {
  return ({ cart: state.cart})
};

const mapDispatchToProps = { addProduct };

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartOverlay);