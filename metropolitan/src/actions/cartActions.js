import { CART_ADD_ITEM, CART_UPDATE_ITEM} from '../reducers/constants/cartConstants';
import axios from 'axios';

export const addProduct = (item) => async (dispatch, getState) => {
  try {
    const { data } =  await axios.get('/api/products'); 
    const product = data.find(product => product.id === item.id);
    dispatch({ type: CART_ADD_ITEM, payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: item.quantity,
        size: item.size,
        color: item.color,
      }});
    
    // const { cart: items } = getState();
    }
  catch (error) {
    console.log('error  :>> ', error );
  }
}

export const updateProduct = (item) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get('/api/products');
    const product = data.find(product => product.id === item.id);
    dispatch({ type: CART_UPDATE_ITEM, payload: {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: item.quantity,
      size: item.size,
      color: item.color,
    }});
  }
  catch(error) {
    console.log('error :>> ', error);
  }
}