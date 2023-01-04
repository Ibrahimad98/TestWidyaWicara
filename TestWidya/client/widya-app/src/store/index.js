import { combineReducers } from "redux";
import newsReducer from "./reducers/newsReducer";
import categoryReducer from "./reducers/categoryReducer";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import usersReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
  news: productReducer,
  user: usersReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
