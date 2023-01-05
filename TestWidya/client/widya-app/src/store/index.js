import { combineReducers } from "redux";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import usersReducer from "./reducers/userReducer";
import productReducer from "./reducers/productReducer";

const rootReducer = combineReducers({
  product: productReducer,
  user: usersReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
