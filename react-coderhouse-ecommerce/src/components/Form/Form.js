import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from 'react';
import { serverTimestamp } from "firebase/firestore";
// import { db } from "../../firebase/config";
import { setPurchaseOrder } from '../../helpers/helpers';
// import { useContext } from 'react';
// import { CartContext } from '../../context/CartContext';
import classes from "./Form.module.scss";

const CheckoutForm = ({ cart, clear, getCartTotalPrice, orderIdHandler }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const nameHandler = (event) => {
    setName(() => event.target.value);
  }

  const emailHandler = (event) => {
    setEmail(() => event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const order = {
      buyer: {
        name,
        email
      },
      items: cart,
      date: serverTimestamp(),
      total: getCartTotalPrice()
    }

    setPurchaseOrder(order)
      .then((data) => {
        orderIdHandler(data.id);
        clear();
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <Form onSubmit={submitHandler} className={classes.form}>
      <Form.Group className="mb-3">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Cosme Fulanito" value={name} onChange={nameHandler} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="cosmefulanito@gmail.com" value={email} onChange={emailHandler} />
      </Form.Group>

      <Button variant="success" type="submit">
        Finalizar compra
      </Button>
    </Form>
  )
}

export default CheckoutForm