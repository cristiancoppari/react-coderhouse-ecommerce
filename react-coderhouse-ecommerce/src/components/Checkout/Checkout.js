import React from 'react';
import CheckoutForm from '../Form/Form';
import Container from "react-bootstrap/Container";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { useState } from 'react';

const Checkout = () => {
  const { cart, clear, getCartTotalPrice } = useContext(CartContext);

  const [orderId, setOrderId] = useState("");

  const orderIdHandler = (id) => {
    setOrderId(() => id);
  }

  return (
    <Container>
      <h1>Checkout</h1>

      {orderId
        ? (
          <h2>Su compra ha sido realizada con el ID: {orderId}</h2>
        )
        :
        <CheckoutForm cart={cart} clear={clear} getCartTotalPrice={getCartTotalPrice} orderIdHandler={orderIdHandler} />
      }
    </Container>
  )
}

export default Checkout