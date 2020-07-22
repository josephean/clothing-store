import React, { useState, useEffect }from 'react';
import ProductList from './ProductList';
import categories from '../data/categories';
import axios from 'axios';

import '../styles/CategoryPage.css';
import Select from './Select';

const SORT_OPTIONS = ['LOW TO HIGH', 'HIGH TO LOW']

const CategoryPage = props => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('/api/products');
      console.log('data :>> ', data);
      setProduct(data);
    }

    fetchData();
    console.log('products :>> ', products);
    return () => {
      //
    };
  }, []);
  const __category = props.match.params.sub;

  const categoryData = categories.find(cat => cat.name === __category);
  return (
    <div id="container">
    <div id="content">
      <div className="banner"><img className="banner-image" src={categoryData.getBanner()}></img></div>
        <div className="heading">
          <div className="header"><h1>{categoryData.title}</h1></div>
          <div className="filter-container">

<Select placeholder="SORT BY" menuItems={SORT_OPTIONS}/>
</div>
        </div>
        <div className="items">
          <ProductList productType={categoryData.getItems(products)}/>
        </div>
      </div>
    </div>);
}

export default CategoryPage;
