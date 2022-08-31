import React from 'react'
import Container from "react-bootstrap/Container";
import ProductCount from '../CartCount/ProductCount';
import classes from "./ItemListContainer.module.scss";

const ItemListContainer = () => {
  const onAddHandler = (items) => {
    if (items) {
      alert("Agregaste un producto al carrito");
    } else {
      alert("Debes agregar 1 producto carrito")
    }
  }

  return (
    <Container className={classes.itemListContainer}>
      <h2>ItemListContainer</h2>
      <p>Aqui va a ir una lista con todos los productos</p>

      <ProductCount initial={1} stock={10} onAdd={onAddHandler}></ProductCount>
    </Container>
  )
}

export default ItemListContainer