import { PRINT_PRODUCTS_UPDATE, PRINT_SIZE_UPDATE } from 'actions/types'

const initialState = {
  size: null,
  products: []
};

const printReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRINT_PRODUCTS_UPDATE:
      return { ...state, products: action.data };
    case PRINT_SIZE_UPDATE:
      return { ...state, size: action.data};
    default:
      return state;
  }
}

export default printReducer;
