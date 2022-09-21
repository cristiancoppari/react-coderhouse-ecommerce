import React from 'react';
import Button from "react-bootstrap/Button";
import { BsFillCartFill as CartIcon } from "react-icons/bs";
import classes from "./CartWidget.module.scss";
import { CartContext } from "../../context/CartContext";
import { useContext } from 'react';

const CartWidget = () => {
  const { getCartTotalQuantity } = useContext(CartContext);

  return (
    <Button variant="primary" className={classes.cartWidget}>
      <CartIcon className={classes.cartIcon} />
      {getCartTotalQuantity()}
    </Button>
  )
}

export default CartWidget