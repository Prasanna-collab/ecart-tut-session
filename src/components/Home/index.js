import React from "react";
import { Link } from "react-router-dom";
import heroBg from "../../assets/heroBg.png";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-pink-300 text-white p-4 text-center">
        <h1 className="text-4xl font-semibold tracking-wide">Beautiva</h1>
      </header>

      <section className="relative h-[70vh]">
        <img
          className="w-full h-full object-cover"
          src={heroBg}
          alt="Shopping Hero Background"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center text-white">
          <h2 className="text-3xl font-bold">Discover Your Beauty Products</h2>
          <p className="text-lg mt-4 mb-8">
            Shop the latest trends at Beautiva
          </p>
          <Link to="/all-products">
            <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition">
              Shop Now
            </button>
          </Link>
        </div>
      </section>
      {/* need to fix this */}
      <section className="bg-white py-10">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Featured Products
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
          <div className="bg-gray-100 p-6 rounded-xl shadow-lg text-center">
            <h3 className="text-xl font-semibold">Product 1</h3>
            <p className="mt-2 text-gray-600">$50</p>
            <button className="mt-4 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg font-medium transition">
              Buy Now
            </button>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow-lg text-center">
            <h3 className="text-xl font-semibold">Product 2</h3>
            <p className="mt-2 text-gray-600">$75</p>
            <button className="mt-4 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg font-medium transition">
              Buy Now
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section . be sure to fix this */}
      <section className="bg-gray-50 py-10">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          What Our Customers Say
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 px-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600">
              "Amazing products and great customer service. Will definitely buy
              again!"
            </p>
            <p className="mt-4 text-right font-medium">- Jane Doe</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600">
              "I found exactly what I was looking for. Beautiva is my new
              favorite shop!"
            </p>
            <p className="mt-4 text-right font-medium">- John Smith</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-300 text-white py-6 text-center">
        <p className="text-sm">&copy; 2024 Beautiva. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
