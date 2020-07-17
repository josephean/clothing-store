import React, { Component } from 'react';
import '../styles/SelectMenu.css';
import SelectMenuItem from './SelectMenuItem';

class SelectMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      __displayed: false,
    }
  }

  __getListItems = () => {
    return this.props.items ? 
    this.props.items.map(item => <SelectMenuItem select={() => this.props.select(item)} key={item} value={item}/>) 
    : '';
  }

  render() {
    let itemList = this.__getListItems();
    return(<div id="select-menu-container" aria-expanded>
    <div className="blocker" onClick={this.props.toggle}></div>
    <div className="menu-options">
      {itemList}
      </div>
    </div>)
  }
}

export default SelectMenu;