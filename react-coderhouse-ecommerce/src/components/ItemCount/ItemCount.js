import React from 'react';
import { useState } from "react";
import Button from "react-bootstrap/Button";
import classes from "./ItemCount.module.scss";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [items, setItems] = useState(initial);

  const onAddItemHandler = () => {
    if (items < stock) {
      setItems(items + 1);
    } else {
      alert("No podes agregar mas productos porque no hay mas stock");
    }
  }

  const onRemoveItemHandler = () => {
    if (items > 0) {
      setItems(items - 1);
    } else {
      alert("No podes restar mas productos porque llegaste a 0");
    }
  }

  return (
    <div className={classes.productCount}>

      <div className={classes.productCountControllers}>
        <Button variant="danger" onClick={onRemoveItemHandler}>-</Button>
        <p>{items}</p>
        <Button variant="success" onClick={onAddItemHandler}>+</Button>
      </div>

      <Button variant="primary" onClick={() => onAdd(items)}>Agregar al carrito</Button>
    </div>
  )
}

export default ItemCount