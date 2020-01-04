import { combineReducers } from "redux";
import products from "./products";
import cart from "./cart";
import filter from "./filter";

export default combineReducers({
  products: products,
  cart: cart,
  filter: filter
});
