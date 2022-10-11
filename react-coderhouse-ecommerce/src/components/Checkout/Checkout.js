import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CheckoutForm from '../Form/Form';
import Container from "react-bootstrap/Container";
import { LinkContainer } from 'react-router-bootstrap';
import Button from "react-bootstrap/Button";
import classes from "./Checkout.module.scss";

const Checkout = () => {
  const { cart, clear, getCartTotalPrice } = useContext(CartContext);

  const [orderId, setOrderId] = useState("");

  const orderIdHandler = (id) => {
    setOrderId(() => id);
  }

  return (
    <Container className={classes.checkout}>
      <h1>Checkout</h1>

      {orderId
        ? (
          <div className={classes.checkoutSuccess}>
            <h4>Su compra ha sido realizada con el ID: {orderId}</h4>

            <LinkContainer to="/">
              <Button variant={"dark"}>Volver al inicio</Button>
            </LinkContainer>
          </div>
        )
        :
        <CheckoutForm cart={cart} clear={clear} getCartTotalPrice={getCartTotalPrice} orderIdHandler={orderIdHandler} />
      }
    </Container>
  )
}

export default Checkout