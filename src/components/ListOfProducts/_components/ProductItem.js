import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  console.log(product);
  return (
    <>
      <div className="border rounded-xl">
        <img
          src={product.product_image}
          alt={product.product_name}
          className="flex flex-col h-3/4 w-full rounded-tr-xl rounded-tl-xl mx-0 my-0"
        />
        <h1>{product.product_name}</h1>
        <p>{product.product_price}</p>
        <Link to={`/product/${product.id}`}>
          <button>View</button>
        </Link>
      </div>
    </>
  );
};

export default ProductItem;
