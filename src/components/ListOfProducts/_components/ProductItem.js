import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {

  
  return (
    <div className="bg-white group font-poppins relative border border-gray-200 rounded-xl hover:scale-105 hover:shadow-xl transition-transform duration-300 h-fit min-h-44 p-4">
      <img
        src={product.images[0]}
        alt={product.title}
        className="h-40 w-full object-contain bg-gray-100 rounded-t-xl"
      />
      <div className="mt-4 space-y-2">
        <h1 className="text-center text-base font-semibold text-gray-900 line-clamp-2">
          {product.title}
        </h1>
        <p className="text-center text-lg font-medium text-gray-700">
          ${product.price}
        </p>
      </div>

      <div className="flex justify-between mt-4">
        <Link to={`/product/${product.id}`}>
          <button className="text-sm font-medium bg-pink-400 group-hover:bg-pink-500 px-4 py-2 text-white rounded-xl transition-colors duration-300">
            View
          </button>
        </Link>
        <button className="text-sm font-medium bg-pink-400 group-hover:bg-pink-500 px-4 py-2 text-white rounded-xl transition-colors duration-300">
          Get It
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
