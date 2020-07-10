import React from 'react';
import ProductList from './ProductList';
import bannerImg from '../banners/woman-sitting-on-top-of-building-s-edge-1755385.jpg'
import '../styles/Home.css';
import data from '../data';
const Home = () => {
return (
    <div id="container">
      <div id="content">
        <div className="banner"><img className="banner-image" alt="makeup brushes" src={bannerImg}></img></div>
          <div className="header"><h1>New Arrivals</h1></div>
          <div className="items">
            <ProductList 
            productType={data.bestSellers}/>
          </div>
      </div>
    </div>
  )
}

export default Home;


