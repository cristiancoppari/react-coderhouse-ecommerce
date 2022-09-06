import { products as dataProducts } from "../mock/products";

export const getProducts = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(dataProducts);
    }, 2000);
  })
};

export const getItem = (id) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const product = dataProducts.find((item) => id === Number(item.id));

      res(product);
    }, 2000);
  })
}