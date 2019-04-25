import { combineReducers } from 'redux';
import productsReducer from './products';
import printReducer from './print';

const rootReducer = combineReducers({
  products: productsReducer,
  print: printReducer
})

export default rootReducer;
