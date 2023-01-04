import { FETCH_PRODUCTS, EDIT_PRODUCTS, ADD_PRODUCTS, DELETE_PRODUCTS } from "../actionReducers/actionTypes";

const initialState = {
  products: {},
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case REGISTER_USER:
      return {
        ...state,
        register: action.payload,
      };
    case PROFILES:
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
}
