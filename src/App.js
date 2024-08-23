import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import ListOfProducts from "./components/ListOfProducts";
import SingleProduct from "./components/SingleProduct";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/all-products" element={<ListOfProducts />} />
        <Route path="/product/:id" element={<SingleProduct />} />
      </Switch>
    </Router>
  );
};

export default App;
