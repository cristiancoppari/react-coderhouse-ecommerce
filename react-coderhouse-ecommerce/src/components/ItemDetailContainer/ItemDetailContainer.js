import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import ItemDetail from '../ItemDetail/ItemDetail';
import { getItem } from '../../helpers/helpers';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);

    getItem(Number(id))
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });

    return () => {
      setIsLoading(false);
    }
  }, [id]);

  return (
    <Container>
      <h2>ItemDetailContainer</h2>

      {isLoading
        ?
        <Spinner animation="border" role="status" />
        :
        <ItemDetail item={product}></ItemDetail>
      }

    </Container>

  )
}

export default ItemDetailContainer