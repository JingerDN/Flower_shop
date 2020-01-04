import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cart";
import ProductCard from "../components/ProductCard";

const mapStateToProps = ({ cart }, { id }) => ({
  addedCount: cart.items.reduce(
    (count, product) => count + (product.id === id ? 1 : 0),
    0
  )
});
const mapDispatchToProps = dispatch => ({
  addToCart: obj => dispatch(addToCart(obj)),
  removeFromCart: id => dispatch(removeFromCart(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
