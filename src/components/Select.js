import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import '../styles/Select.css';
import SelectMenu from './SelectMenu';

class Select extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false,
      rotate: false,
      __selected: this.props.placeholder,
    }

    this.toggleMenu = this.toggleMenu.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  toggleMenu = () => {
   
    this.setState({
      toggle: !this.state.toggle,
      rotate: !this.state.rotate,
    })
  }

  onSelect = (value) => {
    this.setState({
      toggle: !this.state.toggle,
      rotate: !this.state.rotate,
      __selected: value,
    });
  }



  render() {
    return(
      <div id="select-container">
        <div id="select-bar" onClick={this.toggleMenu}>
          <div className="select-text">
            {this.state.__selected}
          </div>
          <div className="select-toggle"><FontAwesomeIcon className="select-icon" icon={this.state.rotate ? faChevronUp: faChevronDown }></FontAwesomeIcon></div>
        </div>
        {this.state.toggle ? <SelectMenu select={this.onSelect} items={this.props.menuItems} toggle={this.toggleMenu}/>: ''}
      </div>
    );
  };
};

export default Select;