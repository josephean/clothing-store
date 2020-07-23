import React, { useState } from 'react';
import '../styles/SelectMenu.css';
import SelectMenuItem from './SelectMenuItem';

const SelectMenu = props => {

  const __getListItems = () => {
    return props.items ? 
    props.items.map(item => <SelectMenuItem select={() => props.select(item)} key={item} value={item}/>) 
    : '';
  }

  const itemList = __getListItems();

  return(
    <div id="select-menu-container" aria-expanded>
      <div className="blocker" onClick={props.toggle}></div>
      <div className="menu-options">
        {itemList}
      </div>
    </div>)
}

export default SelectMenu;