import React from 'react';
<<<<<<< Updated upstream
import CheckoutForm from '../Form/Form';
import Container from "react-bootstrap/Container";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { useState } from 'react';
=======
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CheckoutForm from '../Form/Form';
import Container from "react-bootstrap/Container";
import { LinkContainer } from 'react-router-bootstrap';
import Button from "react-bootstrap/Button";
import classes from "./Checkout.module.scss";
>>>>>>> Stashed changes

const Checkout = () => {
  const { cart, clear, getCartTotalPrice } = useContext(CartContext);

  const [orderId, setOrderId] = useState("");

  const orderIdHandler = (id) => {
    setOrderId(() => id);
  }

  return (
<<<<<<< Updated upstream
    <Container>
=======
    <Container className={classes.checkout}>
>>>>>>> Stashed changes
        <h1>Checkout</h1>

        {orderId
          ? (
<<<<<<< Updated upstream
            <h2>Su compra ha sido realizada con el ID: {orderId}</h2>
=======
          <div className={classes.checkoutSuccess}>
            <h4>Su compra ha sido realizada con el ID: {orderId}</h4>

            <LinkContainer to="/">
              <Button variant={"dark"}>Volver al inicio</Button>
            </LinkContainer>
          </div>
>>>>>>> Stashed changes
          )
          :
          <CheckoutForm cart={cart} clear={clear} getCartTotalPrice={getCartTotalPrice} orderIdHandler={orderIdHandler} />
        }
      </Container>
      )
}

      export default Checkout