import React, { useState, useEffect, StrictMode, useContext } from "react";
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
    //check for exisitng Items
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
    // <div className="bg-singleBg h-screen bg-no-repeat bg-opacity-20 bg-transparent bg-cover bg-center z-0">
    <div className="bg-gradient-to-r from-gray-50 via-gray-300 to-gray-100 mix-blend-multiply h-screen bg-no-repeat bg-opacity-20 bg-transparent bg-cover bg-center z-0">

      <div className={`mx-auto px-5 py-10 md:px-10 2xl:container z-10 `}>
        <h1 className="text-4xl font-bold line-clamp-1 w-auto my-4 text-gray-900">
          {product.title}
        </h1>

        <div className="flex flex-col md:flex-row md:gap-8">
          <div className=" md:w-1/2">
            {product.images && (
              <>
                <img
                  src={product?.images[0]}
                  alt={product.title}
                  className=" object-contain rounded-lg border-2 "
                />
              </>
            )}
          </div>

          <div className=" md:w-1/2">
            <p className="text-xl text-[#1b1b1b] opacity-80 mb-4 font-medium leading-normal ">{product.description}</p>
            <p className="text-2xl font-semibold text-gray-800 mb-6">
              ${product.price}
            </p>

            <button
              className="bg-blue-600 text-white text-sm py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition"
              onClick={() => handleAddToBag(product.id)}
            >
              Add to Bag
            </button>
            <ListOfCartItems />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
