import React, { Component } from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/SearchController.css';
import SearchList from './SearchList';
import { listProducts } from '../actions/productActions';

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

  componentWillMount() {
    const { listProducts } = this.props;
    listProducts();
  }


  closeOverlay = event => {
    this.props.close(event);
  }

  handleSearch = e => {
    let search = e.target.value.toLowerCase();
    const { products } = this.props.productList;
    this.setState({
      __searchValue: search,
      __filteredItems: products.filter(item =>   
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
    const { error, loading } = this.props.productList;
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
        {!error ? !loading ? this.renderList() : 'Loading' : error}
        </div>
    </div>
    </div>);
  }
}

const mapStateToProps = state => {
  return ({ productList: state.productList })};


const mapDispatchToProps = { listProducts };

export default connect(mapStateToProps, mapDispatchToProps)(SearchController);