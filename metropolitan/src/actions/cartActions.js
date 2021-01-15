import { CART_ADD_ITEM } from '../reducers/constants/cartConstants';
import axios from 'axios';

export const addProduct = (productId, quantity) => async (dispatch, getState) => {
  try {
    const { data } =  await axios.get('/api/products'); 
    const product = data.allItems.find(item => item.id === productId);
    console.log('product :>> ', product);
    dispatch({ type: CART_ADD_ITEM, payload: {
        id: product.id,
        name: product.name,
        price: product.price,
      }});
    
    // const { cart: items } = getState();
    }
  catch (error) {
    console.log('error  :>> ', error );
  }
}