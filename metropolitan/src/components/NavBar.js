import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import '../styles/NavBar.css';
import { faSearch, faShoppingBag, faUser, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Link
} from 'react-router-dom';

import SearchController from './SearchController';
import ShoppingCartOverlay from './ShoppingCartOverlay';
import { calculateTotal } from '../components/ShoppingCartController';

const NavBar = () => {

  const [ showShopMenu, toggleMenu ] = useState(false);
  const [ showSearch, toggleSearch ] = useState(false);
  const [ showCart, toggleCart ] = useState(false);

  const { cart: { cartItems } } = useSelector(state => state);

  const toggleShopMenu = (event) => {
    if (event.key) {
      if (event.key === 'Enter') 
        toggleMenu(!showShopMenu);
      else if (event.key === "Escape") {
        toggleMenu(false);
      }
  }

    else toggleMenu(!showShopMenu);
  }

  const closeShopMenu = (event) => {
    if (event.key) {
      if (event.key === 'Escape')
        toggleMenu(false);
    }

    else toggleMenu(false);
  } 

  const toggleSearchOverlay = (event) => {
    if (event.key) {
      if (event.key === 'Enter') 
        toggleSearch(!showSearch);
      else if (event.key === 'Escape')
        toggleSearch(false);
    }
    
    else 
    toggleSearch(!showSearch);
  }

  const toggleCartOverlay = (event) => {
    event.stopPropagation();
    if (event.key) {
      if (event.key === 'Enter') toggleCart(!showCart);
      else if (event.key === 'Escape') toggleCart(false);
    }
    else toggleCart(!showCart);
  }

  let expanded = showShopMenu;
  expanded = (expanded === true ? 'show' : 'hide');
  console.log('showCart :>> ', showCart);
    return(
      <div id="menu-container">
        <div id="navBar">
          <div className="title-container">
            <div className="title"><Link to="/" style={{textDecoration: "none", color: "#ffffff"}}>metropolitan</Link>
            <div className="tagline">fashion essentials for women</div></div>
          </div>
          <div id="nav-and-icons">
          <div id="navigation">
            <ul>
            <li><Link className="nav-link" to="/">HOME</Link></li>
            <li><span
            className="nav-link" 
            onClick={toggleShopMenu}
            onKeyDown={toggleShopMenu}
            aria-haspopup
            aria-expanded="false"
            tabIndex="0"
            >SHOP <FontAwesomeIcon className={`nav-icon ${expanded}`} icon={faChevronDown}/></span>
            {showShopMenu ?
            <div id="submenu-container">
              <div className="blocker" 
              onClick={closeShopMenu}>
              </div>
              <SubMenu close={closeShopMenu}/>
            </div> : 
            ''}</li>

            <li><Link className="nav-link" to="/about">ABOUT</Link></li>
            <li><Link className="nav-link" to="/">CONTACT US</Link></li>
            </ul>
          </div>
          <div id="iconsContainer">
            <div className="icon-col">
              <FontAwesomeIcon 
              onClick={toggleSearchOverlay}
              onKeyDown={toggleSearchOverlay}
              className="icon search" 
              icon={faSearch}
              tabIndex="0" 
              role="button"
              aria-pressed="false"
              size="1x"/>
            </div>
            <div class="icon-col">
              <FontAwesomeIcon className="icon" onClick={toggleCartOverlay} icon={faShoppingBag} size="1x"/>
              <span className="cart-count">({calculateTotal(cartItems)})</span>
            </div>
            <div class="icon-col">
              <FontAwesomeIcon className="icon" icon={faUser} size="1x"/>
            </div>
          </div>
          </div>
        </div>
        {showSearch ? 
        <SearchOverlay close={toggleSearchOverlay}/>
        : ''}
        <ShoppingCartOverlay toggle={toggleCartOverlay} visibility={showCart}/>
      </div>
    )
  }


const SubMenu = props => {
  return(
    <div id="categories">
      <div className="category">
        <h3>Tops</h3>
          <div className="item">
            <Link className="submenu-item" 
            onClick={(e) => props.close(e)}
            onKeyDown={(e) => props.close(e)} 
            to="/tops/t-shirts">T-Shirts</Link>
          </div>
          <div className="item">
            <Link className="submenu-item" 
            onClick={(e)  => props.close(e)}
            onKeyDown={(e)  => props.close(e)} 
            to="/tops/blouses">Blouses</Link>
          </div>
          <div className="item">
            <Link className="submenu-item" 
            onClick={(e)  => props.close(e)}
            onKeyDown={(e)  => props.close(e)} 
            to="/tops/tank-tops">Tank Tops</Link>
          </div>
      </div>
      <div className="category">
      <h3>Bottoms</h3>
          <div className="item">
            <Link className="submenu-item" 
            onClick={(e) => props.close(e)}
            onKeyDown={(e) => props.close(e)} 
            to="/bottoms/jeans">Jeans</Link>
          </div>
          <div className="item">
            <Link className="submenu-item" 
            onClick={(e) => props.close(e)}
            onKeyDown={(e) => props.close(e)} 
            to="/bottoms/pants">Pants</Link>
          </div>
          <div className="item">
            <Link className="submenu-item" 
            onClick={(e) => props.close(e)}
            onKeyDown={(e) => props.close(e)} to="/bottoms/shorts">Shorts</Link>
          </div>
          <div className="item">
            <Link className="submenu-item"
            onClick={(e) => props.close(e)}
            onKeyDown={(e)  => props.close(e)} 
            to="/bottoms/skirts">Skirts</Link>
          </div>
      </div>
      <div className="category">
      <h3>Loungewear</h3>
          <div className="item">
            <Link className="submenu-item" 
            onClick={(e) => props.close(e)}
            onKeyDown={(e) => props.close(e)} 
            to="/loungewear/pajamas">Pajamas</Link>
          </div>
          <div className="item">
            <Link className="submenu-item" 
            onClick={(e) => props.close(e)}
            onKeyDown={(e) => props.close(e)} 
            to="/loungewear/activewear">Activewear</Link>
          </div>
      </div>
      <div className="category">
      <h3>One-Piece</h3>
          <div className="item">
            <Link className="submenu-item" 
            onClick={(e) => props.close(e)}
            onKeyDown={(e) => props.close(e)} 
            to="/">Dresses</Link>
          </div>
          <div className="item">
            <Link className="submenu-item"
            onClick={(e) => props.close(e)}
            onKeyDown={(e) => props.close(e)} 
            to="/">Jumpsuits</Link>
          </div>
          <div className="item">
            <Link className="submenu-item" 
            onClick={(e) => props.close(e)}
            onKeyDown={(e) => props.close} 
            to="/">Rompers</Link>
          </div>
      </div>
    </div>)
  }

const SearchOverlay = props => {
  
  const closeOverlay = (event) => {
    props.close(event);
  }

  return(
    <div className="search-overlay">
      <SearchController close={(e) => closeOverlay(e)}/>
    </div>
  )
}

export default NavBar;