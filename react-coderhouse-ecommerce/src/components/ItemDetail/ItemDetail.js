import React from 'react';
import Container from "react-bootstrap/Container";
import ProductCount from '../CartCount/ProductCount';

import classes from "./ItemDetail.module.scss";

const ItemDetail = ({ item }) => {
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

          <ProductCount initial={1} stock={item.stock}></ProductCount>
        </div>
      </div>

    </Container>
  )
}

export default ItemDetail