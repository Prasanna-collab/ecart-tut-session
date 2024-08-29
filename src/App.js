import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import ListOfProducts from "./components/ListOfProducts";
import SingleProduct from "./components/SingleProduct";
import Home from "./components/Home";
import CartContextProvider from "./context/CartContextProvider";
import AddProduct from "./components/Admin/AddProduct";

const App = () => {
  return (
    <CartContextProvider>
      <Router>
        <Switch>
          <Route path="/" element={<Home />} />
          <Route path="/all-products" element={<ListOfProducts />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/create-product" element={<AddProduct />} />
        </Switch>
      </Router>
    </CartContextProvider>
  );
};

export default App;
