import { FETCH_PRODUCTS, FETCH_ONE_PRODUCTS, EDIT_PRODUCTS, ADD_PRODUCTS, DELETE_PRODUCTS } from "../actionReducers/actionTypes";

const initialState = {
  products: [],
  productById: {},
  editedProducts: {},
  newProducts: {},
};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case FETCH_ONE_PRODUCTS:
      return {
        ...state,
        productById: action.payload,
      };
    case EDIT_PRODUCTS:
      return {
        ...state,
        editedProducts: action.payload,
      };
    case ADD_PRODUCTS:
      return {
        ...state,
        newProducts: action.payload,
      };
    default:
      return state;
  }
}
