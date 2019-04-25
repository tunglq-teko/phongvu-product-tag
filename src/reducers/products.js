import { PRODUCTS_FETCHED } from 'actions/types'

const initialState = [];

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_FETCHED:
      return action.data;
    default:
      return state;
  }
}

export default productsReducer
