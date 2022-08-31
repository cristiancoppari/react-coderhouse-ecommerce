import React from 'react';
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import ProductCount from '../CartCount/ProductCount';
import ItemList from "../ItemList/ItemList";
import { products as dataProducts } from "../../mock/products";
import classes from "./ItemListContainer.module.scss";

const ItemListContainer = () => {
  const onAddHandler = (items) => {
    if (items) {
      alert("Agregaste un producto al carrito");
    } else {
      alert("Debes agregar 1 producto carrito")
    }
  }

  console.log(dataProducts);

  const [items, setItems] = useState([]);

  useEffect(() => {
    const getProducts = new Promise((res, rej) => {
      setTimeout(() => {
        res(dataProducts);
      }, 2000);
    });

    getProducts
      .then((data) => {
        setItems(data)
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);


  return (
    <Container className={classes.itemListContainer}>
      <h2>ItemListContainer</h2>
      <p>Aqui va a ir una lista con todos los productos</p>

      <ProductCount initial={1} stock={10} onAdd={onAddHandler}></ProductCount>

      <ItemList items={items}></ItemList>
    </Container>
  )
}

export default ItemListContainer