import React from 'react'
import Container from "react-bootstrap/Container";
import classes from "./ItemListContainer.module.scss";

const ItemListContainer = () => {
  return (
    <Container className={classes.itemListContainer}>
      <h2>ItemListContainer</h2>
      <p>Aqui va a ir una lista con todos los productos</p>
    </Container>
  )
}

export default ItemListContainer