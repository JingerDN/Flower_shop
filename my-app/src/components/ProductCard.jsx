import React from "react";
import { Card, Image, Icon, Button } from "semantic-ui-react";

const ProductCard = product => {
  const { title, author, price, image, addToCart, addedCount } = product;
  console.log(product);
  return (
    <Card>
      <Image src={image} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span className="date">{author}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="usd" />
          {/*нет для uah*/}
          {price}
        </a>
      </Card.Content>
      <Button onClick={addToCart.bind(this, product)}>
        Add to Cart {addedCount > 0 && `(${addedCount})`}
      </Button>
    </Card>
  );
};

export default ProductCard;
