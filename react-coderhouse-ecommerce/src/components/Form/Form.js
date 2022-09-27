import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase/config";
// import { useContext } from 'react';
// import { CartContext } from '../../context/CartContext';

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
      <Form.Group className="mb-3">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Cosme Fulanito" value={name} onChange={nameHandler} />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="cosmefulanito@gmail.com" value={email} onChange={emailHandler} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Comprar
      </Button>
    </Form>
  )
}

export default CheckoutForm