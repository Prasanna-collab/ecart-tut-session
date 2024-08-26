import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  return (
    <>
      <div className=" relative border rounded-xl hover:scale-105 hover:shadow-2xl h-fit min-h-40">
        <img
          src={product.images[0]}
          alt={product.title}
          className="flex flex-col h-32 object-contain bg-gray-100 w-full rounded-tr-xl rounded-tl-xl mx-0 my-0"
        />
        <div className="space-y-4 my-4 group">
          <h1 className="text-center leading-normal  text-lg font-semibold line-clamp-2">
            {product.title}
          </h1>
          <p className="text-center font-medium line-clamp-2">
            ${product.price}
          </p>
          <div className="absolute bottom-0 right-0">
            <Link to={`/product/${product.id}`}>
              <button className="text-xl cursor-pointer font-semibold bg-pink-300 group-hover:bg-pink-500 px-3 p-2  text-white rounded-tl-xl rounded-br-xl">
                View
              </button>
            </Link>
          </div>
          <div className="absolute bottom-0 left-0">
            <Link >
              <button className="text-xl cursor-pointer font-semibold bg-pink-300 group-hover:bg-pink-500 px-3 p-2  text-white rounded-tr-xl rounded-bl-xl">
                Get It
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
