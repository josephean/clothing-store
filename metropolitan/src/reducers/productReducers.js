import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAILED } from './constants/productConstants'; 

export const productListReducer = (state = { products: [], loading: true, error: null }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_LIST_SUCCESS: 
      return { ...state, loading: false, products: action.payload };
    case PRODUCT_LIST_FAILED: 
      return { ...state, loading: false, error: action.payload };
    default:
      return state; // do not change state
  }
} 
