import React from "react";
import { Link } from "react-router-dom";

const Cards2 = (props) => {
  return (
    <div className="w-full">
      <div className="bg-blue-600 rounded-3xl shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 p-4 sm:p-5 lg:p-6 text-white flex flex-col h-full">
        <img
          src={props.image}
          alt={props.course}
          className="w-full h-44 sm:h-48 md:h-52 object-cover rounded-2xl"
        />

        <h2 className="text-xl sm:text-2xl font-bold mt-5">{props.course}</h2>

        <p className="text-sm sm:text-base text-gray-300 mt-2">
          By {props.name}
        </p>

        <div className="flex items-center gap-2 mt-3">
          <span className="text-yellow-400">⭐</span>
          <span className="font-semibold">{props.rating}</span>
        </div>

        <div className="mt-4">
          <span className="text-lg sm:text-xl font-bold">₹{props.price}</span>
        </div>

        <Link to="/courses" className="mt-auto pt-6">
          <button className="w-full bg-white text-[#5b8fe2] font-bold py-3 rounded-xl hover:bg-blue-100 transition">
            View Course →
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cards2;
