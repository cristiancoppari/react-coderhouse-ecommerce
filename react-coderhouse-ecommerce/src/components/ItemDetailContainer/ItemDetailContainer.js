import React from 'react';
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import ItemDetail from '../ItemDetail/ItemDetail';
import { getItem } from '../../helpers/helpers';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState("");

  useEffect(() => {
    getItem(2)
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.log(error);
      })
  })

  return (
    <Container>
      <h2>ItemDetailContainer</h2>

      <ItemDetail item={product}></ItemDetail>
    </Container>

  )
}

export default ItemDetailContainer