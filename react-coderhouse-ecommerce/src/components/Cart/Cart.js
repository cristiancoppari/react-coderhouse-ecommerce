import React from 'react';
import { useContext } from 'react';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { LinkContainer } from 'react-router-bootstrap';
import { BsFillTrashFill, BsPlus, BsDash } from "react-icons/bs";
import { CartContext } from "../../context/CartContext";
import "./Cart.scss";

const Cart = () => {
  const { cart, increaseQuantityByOne, decreaseQuantityByOne, removeItem, clear, getCartTotalPrice } = useContext(CartContext);

  const increaseHandler = (product) => {
    if (product.quantity < product.stock) {
      if (product.quantity < product.stock) {
        increaseQuantityByOne(product);
      }
    }
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
                <p className="cart-item__detail__title">{product.title}</p>
                <p className="cart-item__detail_quantiy">x{product.quantity}</p>
                <p className="cart-item__detail__productPrice">${product.price}</p>
                <p className="cart-item__detail__price">${product.price * product.quantity}</p>
              </div>

              <div className="cart-item__controls">
                <Button variant="outline-dark" onClick={() => decreaseHandler(product)}>
                  <BsDash />
                </Button>
                <Button variant="outline-dark" onClick={() => increaseHandler(product)}>
                  <BsPlus />
                </Button>
                <Button variant="outline-dark" onClick={() => removeItem(product.id)}>
                  <BsFillTrashFill />
                </Button>
              </div>
            </div>
          )
        })
        }

        <p className="cart__total"><strong>Total:</strong> ${getCartTotalPrice()}</p>

        <div className="cart-item__btn-container">
          <Button variant="dark" onClick={() => clear()}>Borrar carrito</Button>

<<<<<<< Updated upstream
        <Button variant="dark" onClick={() => clear()}>Borrar carrito</Button>

        <LinkContainer to="/checkout">
          <Button>Terminar compra</Button>
        </LinkContainer>
=======
          <LinkContainer to="/checkout">
            <Button variant={"success"}>Terminar compra</Button>
          </LinkContainer>
        </div>
>>>>>>> Stashed changes
      </div >
    )
  }

return (
  <Container className="cart__container" className="cart__container">
    <h1>Carrito</h1>

    {cart.length > 0
      ?
      <CartItemContainer />
      :
      <div className="cart__message">
        <p>No agregaste productos al carrito</p>

        <LinkContainer to="/">
          <Button variant={"dark"} variant={"dark"}>Ir a la tienda</Button>
        </LinkContainer>
      </div>
    }
  </Container>
)
}

export default Cart