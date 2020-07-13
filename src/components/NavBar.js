import React, { Component } from 'react';
import '../styles/NavBar.css';
import { faSearch, faShoppingBag, faUser, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Link
} from 'react-router-dom';

import SearchController from './SearchController';

class NavBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showShopMenu: false,
      showSearch: false,
    }

    this.toggleShopMenu = this.toggleShopMenu.bind(this);
    this.toggleSearchOverlay = this.toggleSearchOverlay.bind(this);
    this.closeShopMenu = this.closeShopMenu.bind(this);
  };

  toggleShopMenu = (event) => {
    if (event.key) {
      if (event.key === 'Enter') 
        this.setState({ showShopMenu: !this.state.showShopMenu });
      else if (event.key === "Escape") {
        this.setState({ showShopMenu: false })
      }
  }

    else this.setState({
      showShopMenu: !this.state.showShopMenu,
    });
  }

  closeShopMenu = (event) => {
    if (event.key) {
      if (event.key === 'Escape')
        this.setState({ showShopMenu: false });
    }

    else this.setState({
      showShopMenu: false,
    });
  } 

  toggleSearchOverlay = (event) => {
    if (event.key) {
      if (event.key === 'Enter') 
        this.setState({ showSearch: !this.state.showSearch });
      else if (event.key === 'Escape')
        this.setState({ showSearch: false });
    }
    
    else 
    this.setState({
      showSearch: !this.state.showSearch,
    })
  }


  render() {
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
            onClick={this.toggleShopMenu}
            onKeyDown={this.toggleShopMenu}
            aria-haspopup
            aria-expanded="false"
            tabIndex="0"
            >SHOP <FontAwesomeIcon icon={faChevronDown}/></span>
            {this.state.showShopMenu ?
            <div id="submenu-container">
              <div className="blocker" 
              onClick={this.closeShopMenu}>
              </div>
              <SubMenu close={this.closeShopMenu}/>
            </div> : 
            ''}</li>

            <li><Link className="nav-link" to="/about">ABOUT</Link></li>
            <li><Link className="nav-link" to="/">CONTACT US</Link></li>
            </ul>
          </div>
          <div id="iconsContainer">
            <FontAwesomeIcon 
            onClick={this.toggleSearchOverlay}
            onKeyDown={this.toggleSearchOverlay}
            className="icon search" 
            icon={faSearch}
            tabIndex="0" 
            role="button"
            aria-pressed="false"
            size="1x"/>
            <FontAwesomeIcon className="icon" icon={faShoppingBag} size="1x"/>
            <FontAwesomeIcon className="icon" icon={faUser} size="1x"/>
          </div>
          </div>
        </div>
        {this.state.showSearch ? 
        <SearchOverlay close={this.toggleSearchOverlay}/>
        : ''}
      </div>
    )
  }
}

class SubMenu extends Component {
  render() {
    return(
      <div id="categories">
        <div className="category">
          <h3>Tops</h3>
            <div className="item">
              <Link className="submenu-item" 
              onClick={(e) => this.props.close(e)}
              onKeyDown={(e) => this.props.close(e)} 
              to="/tops/t-shirts">T-Shirts</Link>
            </div>
            <div className="item">
              <Link className="submenu-item" 
              onClick={(e)  => this.props.close(e)}
              onKeyDown={(e)  => this.props.close(e)} 
              to="/tops/blouses">Blouses</Link>
            </div>
            <div className="item">
              <Link className="submenu-item" 
              onClick={(e)  => this.props.close(e)}
              onKeyDown={(e)  => this.props.close(e)} 
              to="/tops/tank-tops">Tank Tops</Link>
            </div>
        </div>
        <div className="category">
        <h3>Bottoms</h3>
            <div className="item">
              <Link className="submenu-item" 
              onClick={(e) => this.props.close(e)}
              onKeyDown={(e) => this.props.close(e)} 
              to="/bottoms/jeans">Jeans</Link>
            </div>
            <div className="item">
              <Link className="submenu-item" 
              onClick={(e) => this.props.close(e)}
              onKeyDown={(e) => this.props.close(e)} 
              to="/bottoms/pants">Pants</Link>
            </div>
            <div className="item">
              <Link className="submenu-item" 
              onClick={(e) => this.props.close(e)}
              onKeyDown={(e) => this.props.close(e)} to="/bottoms/shorts">Shorts</Link>
            </div>
            <div className="item">
              <Link className="submenu-item"
              onClick={(e) => this.props.close(e)}
              onKeyDown={(e)  => this.props.close(e)} 
              to="/bottoms/skirts">Skirts</Link>
            </div>
        </div>
        <div className="category">
        <h3>Loungewear</h3>
            <div className="item">
              <Link className="submenu-item" 
              onClick={(e) => this.props.close(e)}
              onKeyDown={(e) => this.props.close(e)} 
              to="/loungewear/pajamas">Pajamas</Link>
            </div>
            <div className="item">
              <Link className="submenu-item" 
              onClick={(e) => this.props.close(e)}
              onKeyDown={(e) => this.props.close(e)} 
              to="/loungewear/activewear">Activewear</Link>
            </div>
        </div>
        <div className="category">
        <h3>One-Piece</h3>
            <div className="item">
              <Link className="submenu-item" 
              onClick={(e) => this.props.close(e)}
              onKeyDown={(e) => this.props.close(e)} 
              to="/">Dresses</Link>
            </div>
            <div className="item">
              <Link className="submenu-item"
              onClick={(e) => this.props.close(e)}
              onKeyDown={(e) => this.props.close(e)} 
              to="/">Jumpsuits</Link>
            </div>
            <div className="item">
              <Link className="submenu-item" 
              onClick={(e) => this.props.close(e)}
              onKeyDown={(e) => this.props.close} 
              to="/">Rompers</Link>
            </div>
        </div>
      </div>)
  }
}

class SearchOverlay extends Component {
  constructor(props) {
    super(props);

    this.closeOverlay = this.closeOverlay.bind(this);
  }

  closeOverlay(event) {
    this.props.close(event);
  }
  render() {
    return(<div className="search-overlay"><SearchController close={(e) => this.closeOverlay(e)}/></div>)
  }
}

export default NavBar;