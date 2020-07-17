import React from 'react';
import ProductListItem from './ProductListItem';
import '../styles/ProductList.css';
const ProductList = props => {
  return(
    <div id="product-container">
      <div className="items">
        {props.productType ?
        props.productType.length ?  
        props.productType.map((product, num) => 
          <ProductListItem key={num.toString()} item={product}/>
        ): <h3>No items found! Check back soon for more.</h3>
        : ''} 
      </div>
    </div>
    )
}

export default ProductList;