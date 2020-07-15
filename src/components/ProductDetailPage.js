import React, { Component } from 'react';
import '../styles/ProductDetailPage.css';
import data from '../data';
import Select from './Select';
import QuantityCounter from './QuantityCounter';

import images from '../images';

class ProductDetailPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      __id: this.props.match.params.id,
      __defaultImage: this.displayDefaultImage,
      __selectedColor: '',
      __selectedSize: '',
    }

    this.displayDefaultImage = this.displayDefaultImage.bind(this);
    this.getImage = this.getImage.bind(this);
  }

  displayDefaultImage = () => {
    const productOptions = images.products.find(product => product.id === parseInt(this.state.__id)).options;
    const imageOption = productOptions.find(option => option.defaultImage === true);

    console.log('imageOptions.src :>> ', imageOption.src);
    return imageOption.src;
  }

  getImage = () => {
    const selectedColor = this.state.__selectedColor;

    if (selectedColor === '') {
      return this.displayDefaultImage();
    }
  }


  render(){ 
    const __id = parseInt(this.state.__id);
    const product = data.allItems.find(item => item.id === __id);
    const sizeText = 'SELECT SIZE';
    const colorText = 'SELECT COLOR';
    const productColors = product.options ? product.options.map(option => option.color) : []; 
    
    return (
      <div className="product-details-container">
        <div className="image" align="center"><img style={{maxWidth: "350px"}} src={this.getImage()}></img></div>
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