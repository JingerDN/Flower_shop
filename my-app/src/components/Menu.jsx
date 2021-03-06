import React from "react";
import { Menu, Popup, List, Button, Image } from "semantic-ui-react";

const CartComponent = ({ title, id, image, removeFromCart }) => (
  <List selection divided verticalAlign="middle">
    <List.Item>
      <List.Content floated="right">
        <Button onClick={removeFromCart.bind(this, id)} color="red">
          Remove
        </Button>
      </List.Content>
      <Image avatar src={image} />
      <List.Content>{title}</List.Content>
    </List.Item>
  </List>
);

const MenuComponent = ({ totalPrice, count, items }) => (
  <Menu>
    <Menu.Item name="browse">
      <b>Flower Shop</b>
    </Menu.Item>

    <Menu.Menu position="right">
      <Menu.Item name="signup">
        Total: &nbsp; <b> {totalPrice} </b>&nbsp;UAH.
      </Menu.Item>
      <Popup
        trigger={
          <Menu.Item name="signup">
            Cart: &nbsp; <b> {count} </b>&nbsp;
          </Menu.Item>
        }
        content={items.map(product => (
          <CartComponent {...product} />
        ))}
        on="click"
        hideOnScroll
      />
    </Menu.Menu>
  </Menu>
);
export default MenuComponent;
