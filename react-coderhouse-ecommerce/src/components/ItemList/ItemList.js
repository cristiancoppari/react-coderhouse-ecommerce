import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Item from "../Item/Item";

const ItemList = ({ items }) => {

  return (
    <Row>
      {items && items.map((item) => {
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