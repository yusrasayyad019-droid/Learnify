import React from "react";
import Contactl from "./Contactl";
import Contactr from "./Contactr";

const Contact = () => {
  return (
    <div>
      <div className="text-4xl md:text-5xl font-bold text-slate-700 font-serif text-center mt-10 px-5 leading-15">
        Have questions or need{" "}
        <span className="text-blue-400 font-semibold">help?</span>
        <br />
        We're here to <span className="text-blue-400 font-semibold">
          help
        </span>{" "}
        you on your learning journey.
      </div>
      <br />
      <br />
      <div className="flex flex-col md:flex-row gap-6 md:gap-16 justify-center items-center">
        <Contactl />
        <Contactr />
      </div>
    </div>
  );
};

export default Contact;
