import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Item from "../Item/Item";

// import { products as dataProducts } from "../../mock/products";

import classes from "./ItemList.module.scss";

const ItemList = ({ items }) => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const getProducts = new Promise((res, rej) => {
  //     setTimeout(() => {
  //       res(dataProducts);
  //     }, 2000);

  //     getProducts
  //       .then((data) => {
  //         setProducts(data)
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       })
  //   }
  // )}, []);

  return (
    <Row>
      <Col xs={1} md={2} lg={3}>
        {items.map((item) => <Item item={item} />)}
      </Col>
    </Row>
  )
}

export default ItemList