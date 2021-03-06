import { connect } from "react-redux";
import { setProducts } from "../actions/products";
import App from "../components/App.jsx";
import orderBy from "lodash/orderBy";

const sortBy = (products, filterBy) => {
  switch (filterBy) {
    case "price_hight":
      return orderBy(products, "price", "desc");
    case "price_low":
      return orderBy(products, "price", "asc");
    case "author":
      return orderBy(products, "author", "asc");
    default:
      return products;
  }
};

const filterProducts = (products, searchQuery) =>
  products.filter(
    o =>
      o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
      o.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
  );

const searchProducts = (products, filterBy, searchQuery) => {
  return sortBy(filterProducts(products, searchQuery), filterBy);
};

const mapStateToProps = ({ products, filter }) => ({
  products:
    products.items &&
    searchProducts(products.items, filter.filterBy, filter.searchQuery),
  isReady: products.isReady
});
const mapDispatchToProps = dispatch => ({
  setProducts: products => dispatch(setProducts(products))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
