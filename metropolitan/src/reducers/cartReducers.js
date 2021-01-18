import { CART_ADD_ITEM, CART_UPDATE_ITEM, CART_REMOVE_ITEM } from '../reducers/constants/cartConstants';


export const cartReducer = (state = { cartItems: [] }, action) => {
  const isExistingProduct = (a, b) => a.id === b.id && a.size === b.size && a.color === b.color;

  switch(action.type) {
    case CART_ADD_ITEM: {
    const item = action.payload;
    const existingCartItem = state.cartItems.find(product => isExistingProduct(product, item));

    if (existingCartItem) {
      existingCartItem.quantity += item.quantity; 
      return { cartItems: [...state.cartItems]};
    }
    return { cartItems: [...state.cartItems, item]};
    }
    
    case CART_UPDATE_ITEM: { 
    const item = action.payload;
    const existingCartItem = state.cartItems.find(product => isExistingProduct(product, item));
    existingCartItem.quantity = item.quantity; 
    if (item.quantity === 0) state.cartItems = state.cartItems.filter(product => product !== existingCartItem);
    return { cartItems: [...state.cartItems]};
    }
    default: return state;
  }
}