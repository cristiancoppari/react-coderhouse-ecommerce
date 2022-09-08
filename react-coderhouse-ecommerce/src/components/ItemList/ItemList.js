import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Item from "../Item/Item";

// import { products as dataProducts } from "../../mock/products";

// import classes from "./ItemList.module.scss";

const ItemList = ({ items }) => {

  return (
    <Row>
      {/* <Col xs={1} md={2} lg={3}>
        {items.map((item) => <Item item={item} />)}
      </Col> */}
      {items.map((item) => {
        return (
          <Col key={item.id} xs={12} md={6} lg={4}>
            <Item item={item} />
          </Col>
        )
      })}
    </Row>
  )
}

export default ItemList