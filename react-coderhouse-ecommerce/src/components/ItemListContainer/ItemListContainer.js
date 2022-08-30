import React from 'react'
import Container from "react-bootstrap/Container";
import ProductCount from '../CartCount/ProductCount';
import classes from "./ItemListContainer.module.scss";

const ItemListContainer = () => {
  const onAddHandler = (initial, stock, items, setItems) => {
    if (initial > stock) {
      setItems(items + 1);
    } else {
      alert("No podes agregar mas productos porque no hay mas stock");
    }
  }

  const onRemoveHandler = (initial, items, setItems) => {
    if (initial > 0) {
      setItems(items--);
    } else {
      alert("No podes restar mas productos porque llegaste a 0");
    }
  }

  return (
    <Container className={classes.itemListContainer}>
      <h2>ItemListContainer</h2>
      <p>Aqui va a ir una lista con todos los productos</p>

      <ProductCount initial={1} stock={10} onAdd={onAddHandler} onRemove={onRemoveHandler}></ProductCount>
    </Container>
  )
}

export default ItemListContainer