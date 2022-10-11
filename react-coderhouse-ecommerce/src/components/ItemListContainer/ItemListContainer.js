import React from 'react';
import { useState, useEffect, useContext } from "react";
import { useParams } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import ItemList from "../ItemList/ItemList";
import Spinner from "react-bootstrap/Spinner";
import { getProducts, searchProducts } from "../../helpers/helpers";
import { SearchContext } from '../../context/SearchContext';
import classes from "./ItemListContainer.module.scss";

const ItemListContainer = () => {
  const { searchedProducts } = useContext(SearchContext);
  // State
  const [items, setItems] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Params
  const { categoryId } = useParams();

  // useEffect(() => {
  //   setIsLoading(true);

  //   getProducts(categoryId)
  //     .then((data) => {
  //       setItems(data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     })

  //   return () => {
  //     setIsLoading(false);
  //   }
  // }, [categoryId]);

  useEffect(() => {
    setIsLoading(true);

    searchProducts(categoryId, searchedProducts)
      .then((data) => {
        console.log("searchedProducts", data);
        setItems(() => data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      })

  }, [searchedProducts, categoryId]);

  return (
    <Container className={classes.itemListContainer}>
      <h1>Nuestros productos</h1>

      {
        isLoading
          ?
          <Spinner animation="border" role="status" className="d-block mx-auto my-5" />
          :
          (items && items.length <= 0)
            ?
            <p>No se encontro el producto que estas buscando. Por favor intentalo nuevamente.</p>
            :
            <ItemList items={items}></ItemList>
      }

    </Container>
  )
}

export default ItemListContainer