import React from "react";
import Aboutc from "./Aboutc";

const About = () => {
  const Cards = [
    {
      Name: "📚 Quality Courses",
      Course: "Carefully Structured learning content.",
    },
    {
      Name: "👩‍🏫 Expert Instructors",
      Course: "Learn from experienced educators.",
    },
    {
      Name: "💻 Practical Learning",
      Course: "Projects and exercises to apply concepts.",
    },
    {
      Name: "📈 Progress Tracking",
      Course: "Keep track of your learning journey.",
    },
  ];

  return (
    <div className="bg-amber-50 w-full min-h-screen">
      <h1 className="text-5xl md:text-6xl font-bold text-slate-700 font-serif text-center mt-10 px-5 ">
        Empowering Everyone to Learn,
        <span className="text-blue-400 font-semibold"> Grow & Succeed</span>
      </h1>

      <div className="mt-20">
        <h1 className="text-5xl md:text-6xl font-bold text-slate-700 font-serif text-center">
          Our Mission
        </h1>

        <p className="text-center max-w-5xl mx-auto text-xl text-slate-600 leading-8 mt-5 px-5">
          Our Mission is to make quality education accessible, practical, and
          flexible for everyone. We bring structured courses, experienced
          instructors, and practical learning together in one platform.
        </p>
      </div>

      <div className="mt-20">
        <h1 className="text-5xl md:text-6xl font-bold text-slate-700 font-serif text-center">
          Our Vision
        </h1>

        <p className="text-center max-w-6xl mx-auto text-xl text-slate-600 leading-8 mt-5 px-5">
          We envision a learning platform where anyone can develop valuable
          skills at their own pace and turn knowledge into real-world
          opportunities.
        </p>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-20 pb-20">
        {Cards.map((elem, index) => (
          <Aboutc key={index} Name={elem.Name} Course={elem.Course} />
        ))}
      </div>

      <div>
        <h1 className="text-5xl md:text-6xl font-bold text-slate-700 font-serif text-center">
          Why We Built This Platform
        </h1>
        <p className="text-center max-w-6xl mx-auto text-xl font-serif text-slate-600 leading-8 mt-5 px-5">
          We created this platform to make online learning simpler and more
          organized. Instead of Searching across different resources, Students
          can discover courses, learn from structured lessons, practice their
          skills, and monitor their progress in one place.
        </p>
      </div>
      <br />
      <br />
      <div>
        <h1 className="text-5xl md:text-6xl font-bold text-slate-700 font-serif text-center">
          Our Learning Process
        </h1>
        <p className="text-center max-w-6xl mx-auto text-2xl font-semibold font-sans text-slate-600 leading-8 mt-5 px-5">
          Discover - Learn - Practice - Grow
        </p>
      </div>
      <br />
      <br />
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-blue-500 font-serif text-center">
          Learning never Stops.Neither should you.
        </h1>
      </div>
    </div>
  );
};

export default About;
