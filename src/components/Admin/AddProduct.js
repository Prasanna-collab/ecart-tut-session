import React, { useState } from "react";

const AddProduct = () => {

  const [product, setProduct] = useState({
    title: "",
    price: "",
    image: "",
    description: "",
    category: "",
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: Math.random() * 1000,
        title: product.title, //name
        price: parseInt(product.price), //price
        images: [product.image], //image
        rating: 0,
        description: product.description, //description
        reviews: [
          {
            rating: 0,
            comment: "",
            date: "2024-05-23T08:56:21.620Z",
            reviewerName: "",
            reviewerEmail: "",
          },
        ],
        category: product.category, //category
      }),
    })
      .then((res) => res.json())
      .then(console.log);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={product.title}
        placeholder="Product Name"
        className="mb-3 border text-sm py-2 px-3"
        name="title"
        onChange={(e) => setProduct({ ...product, title: e.target.value })}
      />
      <input
        type="text"
        value={product.price}
        placeholder="Price"
        className="mb-3 border text-sm py-2 px-3"
        name="price"
        onChange={(e) => setProduct({ ...product, price: e.target.value })}
      />
      <input
        type="text"
        value={product.image}
        placeholder="Image URL"
        className="mb-3 border text-sm py-2 px-3"
        name="image"
        onChange={(e) => setProduct({ ...product, image: e.target.value })}
      />
      <input
        type="text"
        value={product.description}
        name="description"
        placeholder="Description"
        className="mb-3 border text-sm py-2 px-3"
        onChange={(e) =>
          setProduct({ ...product, description: e.target.value })
        }
      />
      <input
        type="text"
        value={product.category}
        name="category"
        placeholder="Category"
        className="mb-3 border text-sm py-2 px-3"
        onChange={(e) => setProduct({ ...product, category: e.target.value })}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddProduct;
