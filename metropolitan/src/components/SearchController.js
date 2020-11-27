import React, { Component } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/SearchController.css';
import SearchList from './SearchList';
import axios from 'axios';
class SearchController extends Component {

  constructor(props) {
    super(props);

    this.state = {
      __searchValue: '',
      __allItems: [],
      __filteredItems: [],
      __products: [],
    }

    this.closeOverlay = this.closeOverlay.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.renderList = this.renderList.bind(this);

  }

  fetchData = async () => {
    try {
      const { data } = await axios.get('/api/products');
      console.log('data :>> ', data);
      if (data) 
        this.setState({
          ...this.state,
          __products: data,
        });
      } catch(error) {
        console.log('error :>> ', error);
    }
  }

  componentDidMount = () => {
    this.fetchData();
  }
  closeOverlay = event => {

    this.props.close(event);
  }

  handleSearch = e => {
    let search = e.target.value.toLowerCase();
    const allProducts = this.state.__products;
    this.setState({
      __searchValue: search,
      __filteredItems: allProducts.filter(item =>   
        {
          const name = item.name.toLowerCase();
          return name.includes(search)
        }),
    })
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