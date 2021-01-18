import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/ProductDetailPage.css';
import Select from './Select';
import QuantityCounter from './QuantityCounter';
import images from '../images';
import { listProducts } from '../actions/productActions';
import { addProduct } from '../actions/cartActions';


class ProductDetailPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      __id: this.props.match.params.id,
      __defaultImage: this.getDefaultImage,
      __selectedColor: '',
      __selectedSize: '',
      __quantity: 0,
      products: [],
      loading: true,
    }

    this.addToBag = this.addToBag.bind(this);
    this.isDisabled = this.isDisabled.bind(this);
    this.getDefaultImage = this.getDefaultImage.bind(this);
    this.getSelectedImage = this.getSelectedImage.bind(this);
    this.getImage = this.getImage.bind(this);
    this.getSize = this.getSize.bind(this);
    this.getColor = this.getColor.bind(this);
    this.getQuantity = this.getQuantity.bind(this);
  }

  componentWillMount() {
    const { listProducts } = this.props;
    listProducts();
  }

  addToBag = () => {
    const qty = this.state.__quantity;
    const id = parseInt(this.state.__id);
    const { __selectedColor: color, __selectedSize: size} = this.state;

    const cartItem = {
      id,
      quantity: qty,
      color,
      size
    }
    const { addProduct } = this.props;
    addProduct(cartItem);
  };

  isDisabled = () => {
    return !(this.state.__quantity && this.state.__selectedColor && this.state.__selectedColor) ? 'disabled' : '';
  }

  getSize = size => {
    this.setState({
      ...this.state,
      __selectedSize: size,
    }, () => console.log('this.state :>> ', this.state));
  };

  getColor = color => {
    this.setState({
      ...this.state,
      __selectedColor: color,
    }, () => console.log('this.state :>> ', this.state));
  };

  getDefaultImage = () => {
    const productOptions = images.products.find(product => product.id === parseInt(this.state.__id)).options;
    const image = productOptions[0];

    const { src } = image;
    
    return src;
  }

  getSelectedImage = () => {
    const productOptions = images.products.find(product => product.id === parseInt(this.state.__id)).options;
    const imageOption = productOptions.find(option => option.color === this.state.__selectedColor);
    const { src } = imageOption;

    return src;
  }

  getQuantity = quantity => {
    this.setState({
      ...this.state,
      __quantity: quantity,
    }, () => console.log('this.state :>> ', this.state));
  }

  getImage = () => {
    const selectedColor = this.state.__selectedColor;

    return selectedColor === '' ? 
      this.getDefaultImage() 
      : this.getSelectedImage();
  }


  renderProductInfo = data => {
    const products = data;
    const id = parseInt(this.state.__id);
    const product = products.find(item => item.id === id);
    const sizeText = 'SELECT SIZE';
    const colorText = 'SELECT COLOR';
    const productColors = product.options ? product.options.map(option => option.color) : []; 
    const disabled = this.isDisabled();
    
    return (
      <div className="product-details-container">
        <div className="image" align="center"><img style={{maxWidth: "350px"}} src={this.getImage()}></img></div>
        <div className="details-view">
          <h1>{product.name}</h1>
          <div className="price">${product.price}</div>
          <div className="counter">
            <QuantityCounter getValue={this.getQuantity}/> 
            <button className={`add-to-bag ${disabled}`}onClick={this.addToBag}>Add to bag</button>
          </div>
          <div className="select">
            <Select placeholder={sizeText} menuItems={product.sizes} value={this.getSize}/>
          </div>
          <div className="select">
            <Select placeholder={colorText} menuItems={productColors} value={this.getColor}/>
          </div>
          <div className="description">
            <h3>Description</h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tristique risus et odio ornare, ac efficitur ligula dignissim. Integer imperdiet volutpat mollis. Integer in congue ex. Suspendisse nec massa non erat feugiat efficitur. Cras at metus nec massa maximus lacinia. Vestibulum euismod pellentesque ex dignissim tempor. Vestibulum ut magna vulputate, hendrerit neque at, malesuada enim. Cras luctus dolor sit amet magna facilisis consectetur. Nam interdum elementum eleifend. Aenean diam nulla, venenatis a augue non, rhoncus bibendum arcu. Pellentesque id interdum nunc, ac rutrum felis. Nam egestas orci at accumsan hendrerit. Sed quis neque et urna fermentum semper. Pellentesque suscipit odio urna, ac ultrices nisi pretium in. Vivamus pharetra nisl et pharetra iaculis.
          </div>
        </div>
      </div>);
  }


  render() { 
    const { loading, products, error } = this.props.productList;

    return (
     loading ? 
      <div>Loading...</div> 
      : !error ? products ? this.renderProductInfo(products) : '' : {error}
    )
  }
}

const mapStateToProps = state => {
  return ({ productList: state.productList, cartItems: state.cartItems })};


const mapDispatchToProps = { listProducts, addProduct };

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailPage);