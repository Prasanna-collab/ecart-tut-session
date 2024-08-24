import React, { useState, useEffect, StrictMode } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../api/endpoints";

const SingleProduct = () => {
  const params = useParams();
  const { id } = params;
  const [product, setProduct] = useState({});

  useEffect(() => {
    handleFetchProduct();
  }, [id]);

  const handleFetchProduct = async () => {
    try {
      const data = await fetch(api + "/" + id, {
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

  return (
    <div className="mx-auto px-5 py-10 md:px-10 2xl:container">
      <h1 className="text-4xl font-bold line-clamp-1 w-auto my-4 text-gray-900">
        {product.product_name}
      </h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <img
            src={product.product_image}
            alt={product.product_name}
            className="h-[calc(100vh-6rem)] w-full object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="w-full md:w-1/2">
          <p className="text-lg text-gray-700 mb-4">
            {product.product_description}
          </p>
          <p className="text-2xl font-semibold text-gray-800 mb-6">
            ${product.product_price}
          </p>

          <button className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition">
            Add to Bag
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
