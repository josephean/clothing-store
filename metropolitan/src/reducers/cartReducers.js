import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../reducers/constants/cartConstants';

export const CART_REDUCER = (state = { items: [] }, action) => {
  switch(action.type) {
    case CART_ADD_ITEM: 
    console.log('action :>> ', action);
    const item = action.payload;
    console.log('item :>> ', item);
    const product = state.items.find(item => item === product);
    console.log('product :>> ', product);
    default: return state;
  }
}