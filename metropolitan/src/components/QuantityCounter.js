import React, { Component } from 'react';
import '../styles/QuantityCounter.css';

class QuantityCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 0,
    }

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  decrement = () => {
    if(this.state.quantity > 0) {
      this.setState({
        quantity: this.state.quantity - 1,
      })
    }
  }

  increment = () => {
    this.setState({
      quantity: this.state.quantity + 1,
    })
  }

  render() {
    return (
      <div className="count-container">
        <button className="button" onClick={this.decrement}>-</button>
        <div className="count">{this.state.quantity}</div>
        <button className="button" onClick={this.increment}>+</button>
      </div>
    )
  }
}

export default QuantityCounter;