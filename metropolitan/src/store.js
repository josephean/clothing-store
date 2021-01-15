import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { productListReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';

const initialState = {};
const reducer = combineReducers({
  productList: productListReducer,
  cart: cartReducer,
}); // returns new state based on action

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose;

const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;