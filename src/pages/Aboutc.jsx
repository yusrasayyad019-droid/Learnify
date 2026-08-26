import React from "react";

const Aboutc = (props) => {
  console.log(props.Course, props.Name);

  return (
    <div>
      <div className="bg-slate-800 rounded-3xl shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 p-4 sm:p-5 lg:p-6 text-white flex flex-col h-full">
        <h2 className="text-xl sm:text-2xl font-bold mt-5">{props.Name}</h2>

        <p className="text-sm sm:text-base text-gray-300 mt-2">
          {props.Course}
        </p>
      </div>
    </div>
  );
};

export default Aboutc;
