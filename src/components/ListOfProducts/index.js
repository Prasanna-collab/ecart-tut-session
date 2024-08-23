import React, { useState } from "react";
import { api } from "../../api/endpoints";

const ListOfProducts = () => {
  const [products, setProducts] = useState([]);

  const handleFetchProducts = async () => {
    // it is promise function, (it will return us data)or (it will return us error),
    const data = await fetch(api, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setProducts(data);
  };

  //blue print, functionality glimpse, fetch, E-Cart boilerplate
  //products functionlities.

  return (
    <div>
      ListOfProducts
      <button onClick={handleFetchProducts}>Fetch products</button>
    </div>
  );
};

export default ListOfProducts;
