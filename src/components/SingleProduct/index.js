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

  //axios vs fetch 
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

  return <div>
    <h1>{product.product_name}</h1>
    <p>{product.product_description}</p>
    <p>{product.product_price}</p>
    <button>Add to Cart</button>
  </div>;
};

export default SingleProduct;
