import { products as dataProducts } from "../mock/products";
import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export const getProducts = (searchParam = false) => {
  const productsCollection = collection(db, "products");

  const collectionRef = searchParam ? query(productsCollection, where("category", "==", searchParam)) : productsCollection;

  return getDocs(collectionRef);
};

export const getItem = (id) => {
  const productRef = doc(db, "products", id);

  return getDoc(productRef);
  // return new Promise((res, rej) => {
  //   setTimeout(() => {
  //     const product = dataProducts.find((item) => id === Number(item.id));

  //     res(product);
  //   }, 2000);
  // })
}