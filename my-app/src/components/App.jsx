import React from "react";
import axios from "axios";
import { Card, Container } from "semantic-ui-react";
import ProductCard from "../containers/ProductCart";
import MenuComponent from "../containers/Menu";
import Filter from "../containers/Filter";

class App extends React.Component {
  componentDidMount() {
    const { setProducts } = this.props;
    axios.get("/products.json").then(res => {
      setProducts(res.data);
    });
  }
  render() {
    const { products, isReady } = this.props; // books берем пока из файла json
    console.log(this.props);
    return (
      <Container>
        <MenuComponent />
        <Filter />
        <Card.Group itemsPerRow={5}>
          {!isReady
            ? "Loading..."
            : products.map((product, i) => (
                <ProductCard key={i} {...product} />
              ))}
        </Card.Group>
      </Container>
    );
  }
}
export default App;
