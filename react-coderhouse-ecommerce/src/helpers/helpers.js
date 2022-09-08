import { products as dataProducts } from "../mock/products";

export const getProducts = (searchParam = false) => {
  if (searchParam) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        const productsFiltered = dataProducts.filter((product) => product.category === searchParam)

        res(productsFiltered)
      }, 2000)
    })
  } else {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(dataProducts);
      }, 2000);
    })
  }
};

export const getItem = (id) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const product = dataProducts.find((item) => id === Number(item.id));

      res(product);
    }, 2000);
  })
}