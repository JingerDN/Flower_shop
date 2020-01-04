import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cart";
import MenuComponent from "../components/Menu";
import uniqBy from "lodash/uniqBy";

const mapStateToProps = ({ cart }) => ({
  totalPrice: cart.items.reduce((total, products) => total + products.price, 0),
  count: cart.items.length,
  items: uniqBy(cart.items, o => o.id)
});
const mapDispatchToProps = dispatch => ({
  addToCart: obj => dispatch(addToCart(obj)),
  removeFromCart: id => dispatch(removeFromCart(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuComponent);
