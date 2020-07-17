import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import bannerImg from '../banners/woman-sitting-on-top-of-building-s-edge-1755385.jpg'
import '../styles/Home.css';
// import data from '../data';
import axios from 'axios';
const Home = () => {

  const [products, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('/api/products');
      console.log('data :>> ', data);
      setProduct(data);
      console.log('products :>> ', products);
    }

    fetchData();
    return () => {
      //
    };
  }, []);
  
  const topPicks = products.filter(product => product.topPick === true);
return (
    <div id="container">
      <div id="content">
        <div className="banner"><img className="banner-image" alt="makeup brushes" src={bannerImg}></img></div>
        <div id="main-content">
          <div className="header"><h1>Top Picks</h1></div>
          <div className="items">
            <ProductList 
            productType={topPicks}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;


