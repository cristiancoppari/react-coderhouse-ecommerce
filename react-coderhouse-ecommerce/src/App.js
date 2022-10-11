import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
// import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
// import Cart from "./components/Cart/Cart";
// import Checkout from "./components/Checkout/Checkout";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import ItemDetailPage from "./pages/ItemDetailPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import CartContextProvider from "./context/CartContext";
import SearchContextProvider from "./context/SearchContext";

function App() {
  return (
    <CartContextProvider>
      <SearchContextProvider>
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:categoryId" element={<CategoryPage />} />
            <Route path="/item/:id" element={<ItemDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />

            <Route path="*" element="Hubo un error al querer cargar la pagina. No se encuentra." />
          </Routes>
        </BrowserRouter>
      </SearchContextProvider>
    </CartContextProvider>
  );
}

export default App;
