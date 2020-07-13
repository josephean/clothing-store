import React, { Component } from 'react';
import '../styles/HamburgerMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { HamburgerMenuItems } from './HamburgerMenuItems';

export class HamburgerMenu extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      __visible: false,
    }

    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  toggleMenu = (event) => {
    if (event.key === 'Enter') {
    this.setState({
      __visible: !this.state.__visible });
    }

    else if (event.key === 'Escape') {
      this.setState({
        __visible: false,
      })
    }

    else this.setState({
      __visible: !this.state.__visible });
  }

  closeMenu = (event) => {
    if (event.key === 'Escape' || event.key === 'Enter') {
      this.setState({
        __visible: false,
      });
    }

    else this.setState({
      __visible: false,
    });
  }


  render() {
    let visibility = this.state__visible; 

    if (this.state.__visible === true) 
      visibility = 'show';
    else visibility = 'hide';

    return(
      <div id="hamburgerMenu">
        { visibility === 'show' ? <div className="blocker" onClick={(e) => this.toggleMenu(e)}></div> : ''}
        <div id="hamburgerMenuContainer" className={visibility}>
          <div className="hamburger-icon" 
          tabIndex="0" 
          role="button"
          aria-pressed="false"
          onClick={(e) => this.toggleMenu(e)}
          onKeyPress={(e) => this.toggleMenu(e)}>
            <FontAwesomeIcon icon={visibility === 'hide' ? faBars : faTimes}/>
          </div>
          <div className="menu"><HamburgerMenuItems close={(e) => this.closeMenu(e)}/></div>
      </div>
      </div>
    )
  }
}