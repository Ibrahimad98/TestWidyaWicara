import { LOGIN_USER, REGISTER_USER, PROFILES } from "../actionReducers/actionTypes";

const initialState = {
  register: {},
  login: {},
  profile: {},
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        login: action.payload,
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
