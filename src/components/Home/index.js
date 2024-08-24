import React from "react";
import { Link } from "react-router-dom";
import heroBg from "../../assets/heroBg.png"
const Home = () => {

    //navbar, sidebar, footers, hovering effects, animations, responsivenss,code enhancements... at final stage of application we can add more features

  return (
    <div className="flex flex-col h-screen">
      <h1 className="text-3xl font-semibold text-center mx-auto h-48 w-screen text-gray-700 bg-pink-200 p-4">
      Beautiva
      </h1>
      <div className="h-[calc(100vh-3rem)] w-screen">
        <img
        className="w-full h-full object-cover"
          src={heroBg}
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
