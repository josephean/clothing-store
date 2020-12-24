import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from './ProductList';
import categories from '../data/categories';
import axios from 'axios';
import { listProducts } from '../actions/productActions';

import '../styles/CategoryPage.css';
import Select from './Select';

const SORT_OPTIONS = ['LOW TO HIGH', 'HIGH TO LOW']

class CategoryPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sortMode: '',
    }

    this.__getSortMode = this.__getSortMode.bind(this);
    this.__calculateSort = this.__calculateSort.bind(this);
    this.__sortItems = this.__sortItems.bind(this);
  }

  componentWillMount() {
    const { listProducts } = this.props;
    listProducts();
  }

  __getSortMode = mode => {
    this.setState({ sortMode: mode });
  }

  __calculateSort = mode => {
    switch(mode) {
      case 'LOW TO HIGH': return 'ASC';
      case 'HIGH TO LOW': return 'DESC';
      default: return '';
    }
  }

  __sortItems = (items, mode) => mode === 'ASC' ? items.sort((a, b) => a.price - b.price) : mode === 'DESC' ? items.sort((a, b) => b.price - a.price) : items;

  render() {
    const __category = this.props.match.params.sub;
    const { loading, error, products } = this.props.productList;
    const categoryData = categories.find(cat => cat.name === __category);
    const sortOrder = this.__calculateSort(this.state.sortMode);

    return(
      <div id="container">
      <div id="content">
        <div className="banner"><img className="banner-image" src={categoryData.getBanner()}></img></div>
          <div className="heading">
            <div className="header"><h1>{categoryData.title}</h1></div>
            <div className="filter-container">
              <Select placeholder="SORT BY" menuItems={SORT_OPTIONS} value={this.__getSortMode}/>
            </div>
          </div>
          <div className="items">
            {!error ? !loading ? <ProductList productType={this.__sortItems(categoryData.getItems(products), sortOrder)}/> : 'Loading...' : error}
          </div>
        </div>
      </div>
      );
    }
  }

const mapStateToProps = state => {
  return ({ productList: state.productList })};


const mapDispatchToProps = { listProducts };

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
