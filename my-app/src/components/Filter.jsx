import React from "react";
import { Menu, Input } from "semantic-ui-react";

const Filter = props => {
  const { setFilter, filterBy, searchQuery, setSearchQuery } = props;
  return (
    <Menu secondary>
      <Menu.Item
        name="all"
        active={filterBy === "all"}
        onClick={setFilter.bind(this, "all")}
      />
      <Menu.Item
        name="popular"
        active={filterBy === "popular"}
        onClick={setFilter.bind(this, "popular")}
      />
      <Menu.Item
        name="price_hight"
        active={filterBy === "price_hight"}
        onClick={setFilter.bind(this, "price_hight")}
      />
      <Menu.Item
        name="price_low"
        active={filterBy === "price_low"}
        onClick={setFilter.bind(this, "price_low")}
      />
      <Menu.Item
        name="author"
        active={filterBy === "author"}
        onClick={setFilter.bind(this, "author")}
      />
      <Menu.Item>
        <Input
          icon="search"
          onChange={e => setSearchQuery(e.target.value)}
          value={searchQuery}
          placeholder="Search..."
        />
      </Menu.Item>
    </Menu>
  );
};

export default Filter;
