import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../styles/HamburgerMenuItems.css';

import categories from '../data/categories';

export const HamburgerMenuItems = props => { 

    let categoriesList = categories;

    let topsItems = categoriesList.filter((subcategory) => subcategory.group === 'tops');
    let bottomsItems = categoriesList.filter((subcategory) => subcategory.group === 'bottoms');
    let loungewearItems = categoriesList.filter((subcategory) => subcategory.group === 'loungewear');
    return(
      <div id="hamburgerMenuItems">
        <div className="exit" onClick={(e) => props.close(e)}><FontAwesomeIcon icon={faTimes}/></div>
        <div>
          <Link className="nav-item" to="/" onClick={(e) => props.close(e)}>
            <div className="hamburger-menu-item">
              <div className="hamburger-menu-text">
                HOME
              </div>
            </div>
          </Link>
        </div>
        <HamburgerMenuItemWithSubMenu items={topsItems} label="TOPS" close={(e) => props.close(e)}/>
        <HamburgerMenuItemWithSubMenu items={bottomsItems} label="BOTTOMS" close={(e) => props.close(e)}/>
        <HamburgerMenuItemWithSubMenu items={loungewearItems} label="LOUNGEWEAR" close={(e) => props.close(e)}/>
        
        <div className="hamburger-menu-item">
          <div className="hamburger-menu-text"><span className="nav-item" to="/" onClick={(e) => props.close(e)}>ONE-PIECE</span></div> 
          <div className="nav-item-icon"><FontAwesomeIcon icon={faPlus}/></div>
        </div>
        <div>
          <Link className="nav-item" to="/" onClick={(e) => props.close(e)}>
            <div className="hamburger-menu-item">
              <div className="hamburger-menu-text">
                ABOUT
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link className="nav-item" to="/" onClick={(e) => props.close(e)}>
            <div className="hamburger-menu-item">
              <div className="hamburger-menu-text">
                CONTACT US
              </div>
            </div>
          </Link>
        </div>
      </div>
    )
  }

const HamburgerMenuItemWithSubMenu = props => {

  const [ expanded, setExpanded ] = useState(false);

  const toggleSubMenu = () => {
    setExpanded(!expanded);
  }

  const closeSubMenu = (event) => {
    setExpanded(false);
    props.close(event);
  }


  return(
    <div id="menu-item-container" onClick={toggleSubMenu}>
      <div className="hamburger-menu-item">
        <div className="hamburger-menu-text"><span className="nav-item" to="/">{props.label}</span></div> 
        <div className="nav-item-icon" onClick={toggleSubMenu}>
          { expanded ?
          <FontAwesomeIcon icon={faMinus}/> : <FontAwesomeIcon icon={faPlus}/>}</div>
      </div>
      { expanded ? <HamburgerSubMenu closeMenu={closeSubMenu} items={props.items}/> : '' }
    </div>
  )
} 

const HamburgerSubMenu = props => {

  const createSubMenuList = () => {
    const subMenuItems = props.items.map((item, index) => 
    <Link 
    className="sub-menu-item" 
    to={item.url} 
    key={index}
    onClick={(e) => props.closeMenu(e)}>
      <div className="hamburger-menu-item">
          {item.title}
      </div>
      </Link>
    );
    return subMenuItems;
  }

  return(
    <div id="hamburgerSubMenuContainer">
      {createSubMenuList()}
    </div>
  )
}