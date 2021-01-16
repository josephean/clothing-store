import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../reducers/constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch(action.type) {
    case CART_ADD_ITEM: 
    const item = action.payload;
    const isExistingProduct = (a, b) => a.id === b.id && a.size === b.size && a.color === b.color;
    const existingCartItem = state.cartItems.find(product => isExistingProduct(product, item));

    if (existingCartItem) {
      existingCartItem.quantity += item.quantity; 
      return { cartItems: [...state.cartItems]};
    }
    return { cartItems: [...state.cartItems, item]};
    default: return state;
  }
}