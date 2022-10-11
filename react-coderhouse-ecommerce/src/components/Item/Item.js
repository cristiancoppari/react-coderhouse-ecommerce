import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";

import classes from "./Item.module.scss";

const Item = ({ item }) => {
  const { id, title, price, pictureUrl } = item;

  return (
    <Card id={id} className={classes.card}>
      <Card.Img variant="top" src={pictureUrl} />
      <Card.Body className={classes.cardBody}>
        <Card.Title>{title}</Card.Title>
        <Card.Text>${price}</Card.Text>
        <LinkContainer to={`/item/${id}`}>
          <Button variant={"dark"}>Ver producto</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  )
}

export default Item