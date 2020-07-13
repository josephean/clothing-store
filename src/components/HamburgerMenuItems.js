import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesome, FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../styles/HamburgerMenuItems.css';

import categories from '../data/categories';

export class HamburgerMenuItems extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    let categoriesList = categories;

    let topsItems = categoriesList.filter((subcategory) => subcategory.group === 'tops');
    let bottomsItems = categoriesList.filter((subcategory) => subcategory.group === 'bottoms');
    let loungewearItems = categoriesList.filter((subcategory) => subcategory.group === 'loungewear');
    console.log('topsItems :>> ', topsItems);
    return(
      <div id="hamburgerMenuItems">
        <div className="exit" onClick={(e) => this.props.close(e)}><FontAwesomeIcon icon={faTimes}/></div>
        <div className="hamburger-menu-item">
          <Link className="nav-item" to="/" onClick={(e) => this.props.close(e)}>
            <div className="hamburger-menu-text">
              HOME
            </div>
          </Link>
          </div>
        <HamburgerMenuItemWithSubMenu items={topsItems} label="TOPS" close={(e) => this.props.close(e)}/>
        <HamburgerMenuItemWithSubMenu items={bottomsItems} label="BOTTOMS" close={(e) => this.props.close(e)}/>
        <HamburgerMenuItemWithSubMenu items={loungewearItems} label="LOUNGEWEAR" close={(e) => this.props.close(e)}/>
        
        <div className="hamburger-menu-item">
          <div className="hamburger-menu-text"><span className="nav-item" to="/" onClick={(e) => this.props.close(e)}>ONE-PIECE</span></div> 
          <div className="nav-item-icon"><FontAwesomeIcon icon={faPlus}/></div>
        </div>
        <div className="hamburger-menu-item">
          <Link className="nav-item" to="/" onClick={(e) => this.props.close(e)}>
            <div className="hamburger-menu-text">
              ABOUT
            </div>
          </Link>
          </div>
          <div className="hamburger-menu-item">
          <Link className="nav-item" to="/" onClick={(e) => this.props.close(e)}>
            <div className="hamburger-menu-text">
              CONTACT US
            </div>
          </Link>
          </div>
      </div>
    )
  }
}

class HamburgerMenuItemWithSubMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
    }

    this.toggleSubMenu = this.toggleSubMenu.bind(this);
    this.closeSubMenu = this.closeSubMenu.bind(this);
  }

  toggleSubMenu = () => {
    this.setState({
      expanded: !this.state.expanded,
    });
  }

  closeSubMenu = (event) => {
    this.setState({ expanded: false })
    this.props.close(event);
  }

  render() {
    return(
      <div id="menu-item-container">
        <div className="hamburger-menu-item">
          <div className="hamburger-menu-text"><span className="nav-item" to="/" onClick={this.toggleSubMenu}>{this.props.label}</span></div> 
          <div className="nav-item-icon" onClick={this.toggleSubMenu}>
            { this.state.expanded ?
            <FontAwesomeIcon icon={faMinus}/> : <FontAwesomeIcon icon={faPlus}/>}</div>
        </div>
        { this.state.expanded ? <HamburgerSubMenu closeMenu={this.closeSubMenu} items={this.props.items}/> : '' }
      </div>
    )
  }

} 

class HamburgerSubMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    }

    this.createSubMenuList = this.createSubMenuList.bind(this);
  }

  createSubMenuList = () => {
    const subMenuItems = this.props.items.map((item, index) => 
      <div className="hamburger-menu-item">
        <Link 
        className="sub-menu-item" 
        to={item.url} 
        key={index}
        onClick={(e) => this.props.closeMenu(e)}>
          {item.title}
        </Link>
      </div>
    );

    console.log('subMenuItems :>> ', subMenuItems);
    return subMenuItems;
  }

  render() {
    return(
      <div id="hamburgerSubMenuContainer">
        {this.createSubMenuList()}
      </div>
    )
  }
}