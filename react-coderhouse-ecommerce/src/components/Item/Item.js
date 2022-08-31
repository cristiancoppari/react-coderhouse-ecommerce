import React from 'react';
import Card from "react-bootstrap/Card";

const Item = ({ item }) => {
  const { id, title, price, pictureUrl } = item;

  return (
    <Card id={id}>
      <Card.Img variant="top" src={pictureUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Item