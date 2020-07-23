import React, { useState } from 'react';
import '../styles/QuantityCounter.css';

const QuantityCounter = () => {
  
  const [quantity, setQuantity] = useState(0);

  const decrement = () => {
    if(quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  const increment = () => {
    setQuantity(quantity + 1);
  }

  return (
    <div className="count-container">
      <button className="button" onClick={decrement}>-</button>
      <div className="count">{quantity}</div>
      <button className="button" onClick={increment}>+</button>
    </div>
  )
};

export default QuantityCounter;