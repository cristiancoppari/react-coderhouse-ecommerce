import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import ProductCount from '../ItemCount/ItemCount';
import ItemList from "../ItemList/ItemList";
import { getProducts } from "../../helpers/helpers";
import classes from "./ItemListContainer.module.scss";
// import { products as dataProducts } from "../../mock/products";

const ItemListContainer = () => {
  // State
  const [items, setItems] = useState([]);
  const [isCategoryPage, setIsCategoryPage] = useState(false);

  // Params
  const { categoryId } = useParams();

  useEffect(() => {
    console.log("starting useEffect for fetching products");

    getProducts(categoryId)
      .then((data) => {
        setItems(data);
        console.log("getProducts");
      })
      .catch((error) => {
        console.log(error);
      })

    return () => {
      console.log("clean up");
    }
  }, [categoryId]);

  return (
    <Container className={classes.itemListContainer}>
      <h2>Nuestros productos</h2>

      <ItemList items={items}></ItemList>
    </Container>
  )
}

export default ItemListContainer