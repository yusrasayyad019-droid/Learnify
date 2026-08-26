import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" sm:flex justify-between py-4 px-8 bg-slate-900 text-white  items-center text-4xl">
      <h2 className=" sm:text-6xl font-serif font-medium text-white md:text-4xl ">
        {" "}
        Learnify
      </h2>
      <div className="md:flex gap-8 font-medium text-lg  sm:text-lg flex flex-wrap  ">
        <Link to="/home" className="py-2">
          Home
        </Link>
        <Link to="/about" className="py-2">
          About
        </Link>
        <Link to="/contact" className="py-2">
          Contact
        </Link>
        <Link to="/courses" className="py-2">
          Courses
        </Link>
        <Link to="/login" className="py-2">
          Login
        </Link>
        <Link to="/get" className="py-2">
          <button className="sm:px-4 py-2 self-center -mb-2.5 border-l-gray-950 border-2 bg-sky-400 text-slate-900 rounded-lg hover:bg-sky-500  scale-105 transition duration-300   cursor-pointer md:ml-5 -mt-5 px-2 py ">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
