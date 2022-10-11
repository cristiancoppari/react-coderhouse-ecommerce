import React from 'react';
import { useState, useContext } from 'react';
import Badge from "react-bootstrap/Badge";
import ItemCount from '../ItemCount/ItemCount';
import Button from "react-bootstrap/Button";
import { CartContext } from '../../context/CartContext';
import { LinkContainer } from "react-router-bootstrap";

import classes from "./ItemDetail.module.scss";

const ItemDetail = ({ item }) => {
  const [quantity, setQuantity] = useState(0);
  const { addItem } = useContext(CartContext);

  const onAddHandler = (quantity) => {
    if (quantity) {
      setQuantity(() => quantity);
      addItem(item, quantity);
    }
  }

  return (
    <>
      <div className={classes.itemDetail}>
        <div className={classes.itemDetailImage}>
          <img src={item.pictureUrl} alt="" />
        </div>
        <div className={classes.itemDetailContent}>
          <h2>{item.title}</h2>
          <Badge bg={"dark"} className="mb-2">{item.category}</Badge>
          <p>{item.description}</p>
          <p className={classes.price}>${item.price}</p>
          <p className={classes.stock}>Stock: {item.stock} unidad/es</p>

          {quantity
            ?
            <LinkContainer to={`/cart`}>
              <Button variant={"dark"}>Ir al carrito</Button>
            </LinkContainer>
            :
            <>
              <ItemCount initial={1} stock={item.stock} onAdd={onAddHandler}></ItemCount>
            </>
          }
        </div>
      </div>
    </>
  )
}

export default ItemDetail