import React from 'react';
import '../styles/SelectMenuItem.css';

const SelectMenuItem = props => {
  
  return(
    <div id="select-item-container" onClick={() => props.select(props.value)}>
      {props.value}
    </div>
  )
}

export default SelectMenuItem;