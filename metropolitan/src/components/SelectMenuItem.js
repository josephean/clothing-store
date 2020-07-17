import React, { Component } from 'react';
import '../styles/SelectMenuItem.css';

class SelectMenuItem extends Component {
  
  render() {
    return(
    <div id="select-item-container" onClick={() => this.props.select(this.props.value)}>
      {this.props.value}
    </div>)
  }
}

export default SelectMenuItem;