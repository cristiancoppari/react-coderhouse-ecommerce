import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from 'react';
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase/config";
// import { useContext } from 'react';
// import { CartContext } from '../../context/CartContext';
=======
=======
>>>>>>> Stashed changes
import { serverTimestamp } from "firebase/firestore";
// import { db } from "../../firebase/config";
import { setPurchaseOrder } from '../../helpers/helpers';
// import { useContext } from 'react';
// import { CartContext } from '../../context/CartContext';
import classes from "./Form.module.scss";
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
<<<<<<< Updated upstream
    const ordersCollectionRef = collection(db, "orders");

    addDoc(ordersCollectionRef, order)
      .then(res => {
        orderIdHandler(res.id);
        clear();
      })
      .catch(error => console.log(error));

    // console.log("form submit");

  }

  return (
    <Form onSubmit={submitHandler}>
=======
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
      <Form.Group className="mb-3">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Cosme Fulanito" value={name} onChange={nameHandler} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="cosmefulanito@gmail.com" value={email} onChange={emailHandler} />
      </Form.Group>

<<<<<<< Updated upstream
<<<<<<< Updated upstream
      <Button variant="primary" type="submit">
        Comprar
=======
      <Button variant="success" type="submit">
        Finalizar compra
>>>>>>> Stashed changes
=======
      <Button variant="success" type="submit">
        Finalizar compra
>>>>>>> Stashed changes
      </Button>
    </Form>
  )
}

export default CheckoutForm