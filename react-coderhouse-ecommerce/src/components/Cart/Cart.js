import React from 'react';
import { useContext } from 'react';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { LinkContainer } from 'react-router-bootstrap';
import { BsFillTrashFill, BsPlus, BsDash } from "react-icons/bs";
import { CartContext } from "../../context/CartContext";
import "./Cart.scss";

const Cart = () => {
  const { cart, increaseQuantityByOne, decreaseQuantityByOne, removeItem, clear } = useContext(CartContext);

  const increaseHandler = (product) => {
    increaseQuantityByOne(product);
  }

  const decreaseHandler = (product) => {
    if (product.quantity > 1) {
      decreaseQuantityByOne(product, 1);
    } else {
      removeItem(product.id);
    }
  }

  const CartItemContainer = () => {
    return (
      <div className="cart-item__container">
        {cart.map((product) => {
          return (
            <div key={product.id} className="cart-item">
              <img src={product.pictureUrl} alt="" />

              <div className="cart-item__detail">
                <p>{product.title}</p>
                <p>x{product.quantity}</p>
                <p>${product.price}</p>
                <p>Total producto: ${product.price * product.quantity}</p>
              </div>

              <div className="cart-item__controls">
                <Button variant="success" onClick={() => increaseHandler(product)}>
                  <BsPlus />
                </Button>
                <Button variant="danger" onClick={() => decreaseHandler(product)}>
                  <BsDash />
                </Button>
                <Button variant="danger" onClick={() => removeItem(product.id)}>
                  <BsFillTrashFill />
                </Button>
              </div>
            </div>
          )
        })
        }

        <Button variant="dark" onClick={() => clear()}>Borrar carrito</Button>
      </div>
    )
  }

  return (
    <Container>
      <h1>Carrito</h1>

      {cart.length > 0
        ?
        <CartItemContainer />
        :
        <div>
          <h2>No agregaste productos al carrito</h2>

          {/* <Button>Ir a la tienda</Button> */}
        </div>
      }
    </Container>
  )
}

export default Cart