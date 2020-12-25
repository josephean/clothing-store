import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

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
    console.log('visibility :>> ', visibility);

    return(
      <div id="cart-overlay-container">
        {visibility === 'show' ? <div className="blocker" onClick={(e) => this.closeOverlay(e)}></div> : ''}
        <div className={`cart-container ${visibility}`}>
          <div className="header">
          <div><h1 className="header-text">Shopping Bag</h1></div>
          <div className="exit">
            <FontAwesomeIcon onClick={(e) => this.closeOverlay(e)} icon={faTimes}/>
          </div>
          </div>
        </div>
      </div>
    )
  };
}

export default ShoppingCartOverlay;