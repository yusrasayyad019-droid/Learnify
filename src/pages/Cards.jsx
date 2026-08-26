import React from "react";
import { Link } from "react-router-dom";

const Cards = (props) => {
  console.log(
    props.image,
    props.ratings,
    props.ratingno,
    props.name,
    props.jobname,
    props.nostud,
    props.nocourses,
    props.view,
  );

  return (
    <div className="bg-[#0F2D5C] rounded-3xl shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 p-6 text-white">
      <img
        className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-white"
        src={props.image}
        alt={props.name}
      />

      <h2 className="text-2xl font-bold text-center mt-5">{props.name}</h2>

      <div className="flex justify-center items-center gap-2 mt-2">
        <span className="text-yellow-400">{props.ratings}</span>
        <span className="font-semibold">{props.ratingno}</span>
      </div>

      <div className="flex justify-center mt-5">
        <span className="bg-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
          {props.jobname}
        </span>
      </div>

      <div className="flex justify-between mt-6 text-sm">
        <span>👨‍🎓 {props.nostud}</span>
        <span>📚 {props.nocourses}</span>
      </div>
      <Link to="/View">
        <button className="mt-6 w-full bg-white text-[#0F2D5C] font-semibold py-3 rounded-xl hover:bg-blue-100 transition">
          View Profile →{props.view}
        </button>
      </Link>
    </div>
  );
};

export default Cards;
