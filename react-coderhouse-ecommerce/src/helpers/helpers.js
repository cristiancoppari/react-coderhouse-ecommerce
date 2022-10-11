// import { products as dataProducts } from "../mock/products";
import { collection, getDocs, query, where, doc, getDoc, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export const getProducts = async (searchParam = false) => {
  const productsCollection = collection(db, "products");

  const collectionRef = searchParam ? query(productsCollection, where("category", "==", searchParam)) : productsCollection;

  const snapshot = await getDocs(collectionRef);

  const data = snapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data()
    }
  })

  return data;
};

export const searchProducts = async (searchParam = false, searchValue) => {
  const productsCollection = collection(db, "products");

  const collectionRef = searchParam ? query(productsCollection, where("category", "==", searchParam)) : productsCollection;

  const snapshot = await getDocs(collectionRef);

  const data = snapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data()
    }
  })

  const filteredData = data.filter((product) => {
    if (searchValue === "") {
      return product
    } else {
      return product.title.toLowerCase().includes(searchValue);
    }
  })

  return filteredData;
};

export const getItem = async (id) => {
  const productRef = doc(db, "products", id);

  const snapshot = await getDoc(productRef);

  if (snapshot.exists()) {
    const data = {
      id: snapshot.id,
      ...snapshot.data()
    }

    return data;
  }
}

export const setPurchaseOrder = async (order) => {
  const ordersCollectionRef = collection(db, "orders");

  const data = await addDoc(ordersCollectionRef, order);

  return data;
}