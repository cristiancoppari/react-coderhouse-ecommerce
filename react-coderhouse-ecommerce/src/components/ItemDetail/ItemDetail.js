import React from 'react';
import { useState, useContext } from 'react';
import Container from "react-bootstrap/Container";
import ItemCount from '../ItemCount/ItemCount';
import Button from "react-bootstrap/Button";
import { CartContext } from '../../context/CartContext';
import { LinkContainer } from "react-router-bootstrap";

import classes from "./ItemDetail.module.scss";

const ItemDetail = ({ item }) => {
  const [quantity, setQuantity] = useState(0);
  const { addItem, removeItem, clear } = useContext(CartContext);

  const onAddHandler = (quantity) => {
    if (quantity) {
      // alert(`Agregaste ${items} producto al carrito`);
      setQuantity(() => quantity);
      addItem(item, quantity);
    } else {
      alert("Debes agregar 1 producto carrito");
    }
  }

  // const onAddToCartHandler = () => {
  //   addItem(item, quantity);
  // }

  return (
    <Container>
      <h1>ItemDetail</h1>

      <div className={classes.itemDetail}>
        <div className={classes.itemDetailImage}>
          <img src={item.pictureUrl} alt="" />
        </div>
        <div className={classes.itemDetailContent}>
          <h2>{item.title}</h2>
          <h4>{item.category}</h4>
          <p>{item.description}</p>
          <p>{item.price}</p>
          <p>{item.stock}</p>

          {quantity
            ?
            <LinkContainer to={`/cart`}>
              <Button>Ir al carrito</Button>
            </LinkContainer>
            :
            <>
              <ItemCount initial={1} stock={item.stock} onAdd={onAddHandler}></ItemCount>
            </>
          }
        </div>
      </div>

    </Container>
  )
}

export default ItemDetail