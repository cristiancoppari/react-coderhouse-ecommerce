import React from 'react';
import Button from "react-bootstrap/Button";
import { BsFillCartFill as CartIcon } from "react-icons/bs";
import classes from "./CartWidget.module.scss";

const CartWidget = () => {
  return (
    <Button variant="primary" className={classes.cartWidget}>
      <CartIcon className={classes.cartIcon} />
      4
    </Button>
  )
}

export default CartWidget