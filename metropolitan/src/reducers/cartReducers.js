import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../reducers/constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch(action.type) {
    case CART_ADD_ITEM: 
    console.log('action :>> ', action);
    const item = action.payload;
    console.log('item :>> ', item);
    console.log('state.cartItems :>> ', state.cartItems);
    return { cartItems: [...state.cartItems, item]};
    default: return state;
  }
}