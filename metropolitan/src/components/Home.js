import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import bannerImg from '../banners/woman-sitting-on-top-of-building-s-edge-1755385.jpg'
import '../styles/Home.css';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
const Home = () => {
  const productList = useSelector(state => state.productList);

  const { products, loading, error } = productList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
    return () => {
    };
  }, []);

  const renderTopPicks = () => {
    const topPicks = products.filter(product => product.topPick === true);

    return (
      <div className="items">
      <ProductList 
      productType={topPicks}/>
      </div>)
  }
  
return (
    <div id="container">
      <div id="content">
        <div className="banner"><img className="banner-image" alt="woman sitting overlooking a city view" src={bannerImg}></img></div>
        <div id="main-content">
          <div className="header"><h1>Top Picks</h1></div>
          {loading ? <div>Loading...</div> : error ? <div>{error}</div> : renderTopPicks()}
        </div>
      </div>
    </div>
  )
}

export default Home;


