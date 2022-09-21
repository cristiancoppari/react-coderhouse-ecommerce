import Container from 'react-bootstrap/Container';
import { useContext } from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { CartContext } from "../../context/CartContext";
import classes from "../NavBar/NavBar.module.scss";

function NavBar() {
  const { cart } = useContext(CartContext);

  return (
    <>
      <Container className={classes.topNavbar}>
        {cart.length > 0 && <LinkContainer to="/cart">
          <span>
            <CartWidget />
          </span>
        </LinkContainer>}
      </Container>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/">Ecommerce</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" as="ul">
              {/* <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/nosotros">
                <Nav.Link>Nosotros</Nav.Link>
              </LinkContainer> */}
              <NavDropdown title="Categorias" id="basic-nav-dropdown">
                <LinkContainer to="/category/condimentos">
                  <Nav.Link>Condimentos</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/category/packs">
                  <Nav.Link>Packs</Nav.Link>
                </LinkContainer>
                {/* <NavDropdown.Item href="#action/3.1">Producto 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Producto 2
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Producto 3</NavDropdown.Item> */}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;