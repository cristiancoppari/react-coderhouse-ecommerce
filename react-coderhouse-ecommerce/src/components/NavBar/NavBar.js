import Container from 'react-bootstrap/Container';
import { useContext } from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { SearchContext } from "../../context/SearchContext";
import Logo from "../../assets/logo.png";
import { BsLinkedin as LinkedInLogo, BsGithub as GithubLogo } from 'react-icons/bs';
import { FaSearch as SearchIcon } from "react-icons/fa";
import "../NavBar/NavBar.scss";
import { useState } from 'react';

const navBarLinks = [
  {
    id: 1,
    link: "/category/condimentos",
    label: "Condimentos"
  },
  {
    id: 2,
    link: "/category/packs",
    label: "Packs"
  },
  {
    id: 3,
    link: "/category/especias",
    label: "Especias"
  },
  {
    id: 4,
    link: "/category/promociones",
    label: "Promociones"
  }
]

function NavBar() {
  const { searchProductsHandler } = useContext(SearchContext);

  const [searchValue, setSearchValue] = useState("");

  const searchValueHandler = (event) => {
    setSearchValue(() => event.target.value)
  }

  return (
    <>
      <Container className="top-navbar">
        <div className="top-navbar__buttons">
          <a href="https://linkedin.com/in/cristiancoppari" className="btn btn-dark">
            <LinkedInLogo />
          </a>

          <a href="https://github.com/cristiancoppari" className="btn btn-dark">
            <GithubLogo />
          </a>
        </div>

        <div className="search-bar">
          <input type="search" placeholder="Buscar" value={searchValue} onChange={searchValueHandler} />
          <button className="btn btn-outline-dark" onClick={() => searchProductsHandler(searchValue)}>
            <SearchIcon />
          </button>
        </div>

        <LinkContainer to="/cart">
          <span>
            <CartWidget />
          </span>
        </LinkContainer>
      </Container>

      <Navbar expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img src={Logo} alt="" className="logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" as="ul">
              <NavDropdown title="Categorias" id="basic-nav-dropdown">
                {
                  navBarLinks.map((link) => {
                    return (
                      <LinkContainer key={link.id} to={link.link}>
                        <Nav.Link>{link.label}</Nav.Link>
                      </LinkContainer>
                    )
                  })
                }
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;