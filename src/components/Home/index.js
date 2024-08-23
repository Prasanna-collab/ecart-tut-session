import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

    //navbar, sidebar, footers, hovering effects, animations, responsivenss,code enhancements... at final stage of application we can add more features

  return (
    <div className="flex flex-col h-screen">
      <h1 className="text-2xl font-semibold text-center mx-auto my-12 ">
        E-Cart
      </h1>
      <div className="h-3/4 w-screen">
        <img
        className="w-full h-full object-cover"
          src={"https://png.pngtree.com/thumb_back/fh260/background/20230413/pngtree-makeup-skin-care-products-cosmetics-beauty-photography-advertising-background-image_2218552.jpg"}
          alt="My Shopping Hero Background"
        />
      </div>
      <Link to="/all-products" className="mx-auto my-10">
        <span className="text-base text-white bg-pink-300 p-4 rounded-lg">Wish to buy?</span>
      </Link>
    </div>
  );
};

export default Home;
