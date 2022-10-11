import React from 'react';
import { useState } from "react";
import { createContext } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    // console.log("addItem");
    // console.log(quantity);

    if (isInCart(item.id)) {
      addQuantity(item, quantity);
    } else {
      setCart((prevState) => [...prevState, { ...item, quantity }]);
    }
  }

  const removeItem = (id) => {
    // console.log("removeItem");

    const newCart = cart.filter((item) => item.id !== id);
    setCart(() => newCart);
  }

  const increaseQuantityByOne = (item) => {
    addQuantity(item, 1);
  }

  const decreaseQuantityByOne = (item) => {
    removeQuantity(item, 1);
  }

  const clear = () => {
    // console.log("clear");

    setCart(() => []);
  }

  const isInCart = (id) => {
    return cart.some((item) => {
      return item.id === id
    });
  }

  const addQuantity = (item, quantity) => {
    const newCart = cart.map((product) => {
      if (product.id === item.id) {
        return { ...product, quantity: product.quantity + quantity }
      } else {
        return product;
      }
    });

    setCart(() => newCart);
  }

  const removeQuantity = (item, quantity) => {
    const newCart = cart.map((product) => {
      if (product.id === item.id) {
        return { ...product, quantity: product.quantity - quantity }
      } else {
        return product;
      }
    });

    setCart(() => newCart);
  }

  const getCartTotalQuantity = () => {
    return cart.reduce((previousValue, item) => previousValue + item.quantity, 0);
  }

  const getCartTotalPrice = () => {
    return cart.reduce((previousValue, item) => previousValue + (item.price * item.quantity), 0);
  }

  // console.log(cart);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, increaseQuantityByOne, decreaseQuantityByOne, getCartTotalQuantity, getCartTotalPrice }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider