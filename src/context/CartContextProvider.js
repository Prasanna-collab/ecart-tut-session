import React, { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext({});
const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([
    {
      id:"",
      product_name: "",
      product_price: 0,
      product_image:"",
      product_quantity: 1,
      discount: 0,
      product_description: "",
    },
  ]);

  //productwise quantity
  //total qunatity
  const handleDecreaseQuantity = (id) => {
    // cartItems already has the id of the product and quantity
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, product_quantity: item.product_quantity - 1 } : item
      )
    );
  };
  const handleIncreaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, product_quantity: item.product_quantity + 1 } : item
      )
    );
  };
  const [showModal, setShowModal] = useState(false);
  return (
    <CartContext.Provider value={{ cartItems, setCartItems, showModal, setShowModal,handleDecreaseQuantity, handleIncreaseQuantity}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
