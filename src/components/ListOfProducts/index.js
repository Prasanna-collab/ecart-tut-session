import React, { useState, useEffect } from "react";
import { api } from "../../api/endpoints";
import ProductItem from "./_components/ProductItem";

const ListOfProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //to fetch the products at the time of page loading
    handleFetchProducts();
  }, []);

  const handleFetchProducts = async () => {
    // it is promise function, (it will return us data)or (it will return us error),
    const data = await fetch(api +"?limit=10&skip=0&select=title,price,images,rating,description,reviews,category", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    //  to convert the response into json format
    const response = await data.json();
    // updating the state using setProducts
    setProducts(response.products);
  };

  return (
    <section className=" bg-gradient-to-r from-gray-50 via-gray-300 to-gray-100 font-poppins px-5 mx-auto py-5 md:px-10 md:py-10 2xl:container poppins-regular">
      <header>
        <h1 className="text-xl text-gray-400 h-16 font-medium mx-auto">
          My Products
        </h1>
      </header>

      <div className="">
      <div className="grid grid-cols-4 gap-6">
        {products.map((product) => {
          return (
            <React.Fragment key={product.id}>
              <ProductItem product={product} />
            </React.Fragment>
          );
        })}</div>
      </div>
    </section>
  );
};

export default ListOfProducts;
