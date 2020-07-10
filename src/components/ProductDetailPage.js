import React, { Component } from 'react';
import '../styles/ProductDetailPage.css';
import data from '../data';
import Select from './Select';
import QuantityCounter from './QuantityCounter';

class ProductDetailPage extends Component {
  render(){ 
    const __currentId = parseInt(this.props.match.params.id);
    const product = data.allItems.find(item => item.id === __currentId);
    const sizeText = 'SELECT SIZE';
    const colorText = 'SELECT COLOR';
    const productColors = product.options ? product.options.map(option => option.color) : []; 
    console.log('product >>> ', product);
    return (
      <div className="product-details-container">
        <div className="image" align="center"><img style={{maxWidth: "375px"}} src={product.image}></img></div>
        <div className="details-view">
          <h1>{product.name}</h1>
          <div className="price">${product.price}</div>
          <div className="counter"><QuantityCounter/> <button className="add-to-bag">Add to bag</button></div>
          <div className="select"><Select placeholder={sizeText} menuItems={product.sizes}/></div>
          <div className="select"><Select placeholder={colorText} menuItems={productColors}/></div>
          <div className="description"><h3>Description</h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique risus et odio ornare, ac efficitur ligula dignissim. Integer imperdiet volutpat mollis. Integer in congue ex. Suspendisse nec massa non erat feugiat efficitur. Cras at metus nec massa maximus lacinia. Vestibulum euismod pellentesque ex dignissim tempor. Vestibulum ut magna vulputate, hendrerit neque at, malesuada enim. Cras luctus dolor sit amet magna facilisis consectetur. Nam interdum elementum eleifend. Aenean diam nulla, venenatis a augue non, rhoncus bibendum arcu. Pellentesque id interdum nunc, ac rutrum felis. Nam egestas orci at accumsan hendrerit. Sed quis neque et urna fermentum semper. Pellentesque suscipit odio urna, ac ultrices nisi pretium in. Vivamus pharetra nisl et pharetra iaculis.</div>
        </div>
      </div>);
    }
}

export default ProductDetailPage;