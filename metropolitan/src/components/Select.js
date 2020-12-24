import React, { Component, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import '../styles/Select.css';
import SelectMenu from './SelectMenu';

const Select = props => {

  const [ toggle, setToggle ] = useState(false);
  const [ rotate, setRotate ] = useState(false);
  const [ selected, setSelected ] = useState(props.placeholder);

  const toggleMenu = () => {
    setToggle(!toggle);
    setRotate(!rotate);
  }

  const onSelect = (value) => {
    toggleMenu();
    setSelected(value);

    if (props.value && props.value !== '') 
      props.value(value);
  }

    let expanded = toggle;
    expanded = (expanded === true ? 'up' : 'down');

  return(
    <div id="select-container">
      <div id="select-bar" onClick={toggleMenu}>
        <div className="select-text">
          {selected}
        </div>
        <div className="select-toggle"><FontAwesomeIcon className={`select-icon ${expanded}`} icon={faChevronDown}></FontAwesomeIcon></div>
      </div>
      {toggle ? <SelectMenu select={onSelect} items={props.menuItems} toggle={toggleMenu}/>: ''}
    </div>
  );
};

export default Select;