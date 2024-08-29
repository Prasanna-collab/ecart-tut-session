import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api/endpoints";
import ListOfCartItems from "../Cart/ListOfCartItems";
import { CartContext } from "../../context/CartContextProvider";
import bgSingle from "../../assets/bg-single.jpg";

const SingleProduct = () => {
  const params = useParams();
  const { id } = params;
  const [product, setProduct] = useState({});
  
  const { setShowModal, cartItems, setCartItems } = useContext(CartContext);

  useEffect(() => {
    handleFetchProduct();
  }, [id]);

  const handleFetchProduct = async () => {
    try {
      const data = await fetch(`${api}/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response = await data.json();
      setProduct(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToBag = (id) => {
    setShowModal(true);
    const existingItem = cartItems.find((item) => item.id === id);

    if (existingItem) {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems((prev) => [
        ...prev,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          images: product.images,
          quantity: 1,
          description: product.description,
        },
      ]);
    }
  };

  return (
    <div className="font-poppins poppins-regular min-h-screen bg-gradient-to-r from-gray-50 via-gray-300 to-gray-100 bg-cover bg-center z-0 py-8">
      <div className="container mx-auto px-5 md:px-10 z-10">
        <h1 className="text-xl font-bold w-full my-4 text-gray-900">
          {product.title}
        </h1>

        <div className="flex flex-col md:flex-row md:gap-8">
          <div className="md:w-1/2 mb-6 md:mb-0">
            {product.images && (
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-[calc(100vh-10rem)] object-contain rounded-lg shadow-lg border border-gray-200"
              />
            )}
          </div>
          <div className="md:w-1/2">
            <p className="text-sm text-gray-700 mb-4 font-medium leading-relaxed">
              {product.description}
            </p>
            <p className="text-3xl font-medium text-gray-800 mb-6">
              ${product.price}
            </p>
            <button
              className="bg-blue-600 text-white text-sm py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition ease-in-out duration-300"
              onClick={() => handleAddToBag(product.id)}
            >
              Add to Bag
            </button>
            <div className="mt-8">
              <ListOfCartItems />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
