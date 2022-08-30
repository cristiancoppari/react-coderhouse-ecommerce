import React from 'react';
import { useState } from "react";
import Button from "react-bootstrap/Button";
import classes from "./ProductCount.module.scss";

const ProductCount = ({ initial, stock, onAdd, onRemove }) => {
  const [items, setItems] = useState(initial);
  // console.log(initial);

  // const onAddHandler = (initial, stock, items, setItems) => {
  //   if (initial < stock) {
  //     setItems(items + 1);
  //   } else {
  //     alert("No podes agregar mas productos porque no hay mas stock");
  //   }
  // }

  // const onRemoveHandler = (initial, stock, items, setItems) => {
  //   if (initial > 0) {
  //     setItems(items - 1);
  //   } else {
  //     alert("No podes restar mas productos porque llegaste a 0");
  //   }
  // }

  return (
    <div className={classes.cartCount}>
      <p>Producto</p>

      <div className={classes.cartCountControllers}>
        <Button variant="danger" onClick={() => onAdd(initial, stock, items, setItems)}>-</Button>
        <p>{items}</p>
        <Button variant="success" onClick={() => onRemove(initial, items, setItems)}>+</Button>
      </div>
    </div>
  )
}

export default ProductCount