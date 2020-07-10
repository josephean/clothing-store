import React, { Component } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/SearchController.css';
import  SearchItem  from './SearchItem';
import SearchList from './SearchList';
import placeholder from '../img-placeholder.png'
import data from '../data';
class SearchController extends Component {

  constructor(props) {
    super(props);

    this.state = {
      __searchValue: '',
      __allItems: data.allItems,
      __filteredItems: [],
    }

    this.closeOverlay = this.closeOverlay.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.renderList = this.renderList.bind(this);

  }

  closeOverlay = event => {
    console.log('event in close overlay :>> ', event);
    this.props.close(event);
  }

  handleSearch = e => {
    const search = e.target.value.toLowerCase();
    
    this.state.__searchValue = search;
    this.state.__filteredItems = data.allItems.filter(item =>   
      {
        let name = item.name.toLowerCase();
        return name.includes(search)
      });
 ;

    this.setState(
      this.state,
    )
  }

  renderList = () => {
    const search = this.state.__searchValue;
    return (
      search !== '' ?
      <SearchList 
      items={this.state.__filteredItems}
      onClose={(e) => this.closeOverlay(e)}/>
      : '');
  }
  
  render() {
    return (
    <div id="search-controller">
      <div className="blocker" onClick={(e) => this.closeOverlay(e)}></div>
      <div className="search-container">
        <div className="exit">
          <FontAwesomeIcon onClick={(e) => this.closeOverlay(e)} icon={faTimes}/>
        </div>
        <div>
          <strong>Looking for something?</strong>
          </div>
        <div>
          <input 
          className="search-field" 
          type="text" 
          placeholder="START TYPING"
          onChange={this.handleSearch}/>
        </div>

        <div className="search-list-container">
        {this.renderList()}
        </div>
    </div>
    </div>);
  }
}

export default SearchController;