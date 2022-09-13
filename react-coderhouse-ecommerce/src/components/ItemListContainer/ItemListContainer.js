import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import ItemList from "../ItemList/ItemList";
import Spinner from "react-bootstrap/Spinner";
import { getProducts } from "../../helpers/helpers";
import classes from "./ItemListContainer.module.scss";

const ItemListContainer = () => {
  // State
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Params
  const { categoryId } = useParams();

  useEffect(() => {
    console.log("starting useEffect for fetching products");
    setIsLoading(true);

    getProducts(categoryId)
      .then((data) => {
        setItems(data);
        console.log("getProducts");
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      })

    return () => {
      setIsLoading(false);
      console.log("clean up");
    }
  }, [categoryId]);

  return (
    <Container className={classes.itemListContainer}>
      <h2>Nuestros productos</h2>

      {isLoading
        ?
        <Spinner animation="border" role="status" />
        :
        <ItemList items={items}></ItemList>
      }

    </Container>
  )
}

export default ItemListContainer