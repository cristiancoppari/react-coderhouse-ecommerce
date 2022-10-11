import React from 'react';
import { useState } from "react";
import Button from "react-bootstrap/Button";
import classes from "./ItemCount.module.scss";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [items, setItems] = useState(initial);

  const onAddItemHandler = () => {
    if (items < stock) {
      setItems((prevState) => prevState + 1);
    }
  }

  const onRemoveItemHandler = () => {
    if (items > 1) {
      setItems((prevState) => prevState - 1);
    }
  }

  return (
    <div className={classes.productCount}>

      <div className={classes.productCountControllers}>
        <button onClick={onRemoveItemHandler}>-</button>
        <p>{items}</p>
        <button onClick={onAddItemHandler}>+</button>
      </div>

      <Button variant="dark" onClick={() => onAdd(items)}>Agregar al carrito</Button>
    </div>
  )
}

export default ItemCount