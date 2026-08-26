import React from "react";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import { Route, Routes } from "react-router-dom";
import Cards2 from "./Cards2";
import Coursecategory from "./Coursecategory";
import Review from "./Review";

const Home = () => {
  const Instructors = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjzurL8NwkLOMQVoTjlFQ8unVAsuYLys5aEWYIkIPDeg&s=10",
      name: "Dr. Angela Yu",
      ratings: "⭐",
      ratingno: "4.9",
      Jobname: "Full Stack Web Developer",
      nostud: "1.5M",
      nocourses: "15+",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbbcwvql5LdO_YoWT5EY5_EO5qIaBnZDmBTK66mxjtJQ&s=10",
      name: "Jose Portilla",
      ratings: "⭐",
      ratingno: "4.2",
      Jobname: "Data Scientist",
      nostud: "2.5M",
      nocourses: "18+",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtQQ6IMrgI1R-i_amfgqqt2LX_bvFTk0TzeJXwaGFqpw&s=10",
      name: "Kirill Eremenko",
      ratings: "⭐",
      ratingno: "4.5",
      Jobname: "Data Analyst",
      nostud: "2.8M",
      nocourses: "20+",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo__xLfCDxTh97-CrFlg1_bbfnVfG6eGjdbxc4X9PsiA&s=10",
      name: "Maximilian Schwarzmüller",
      ratings: "⭐",
      ratingno: "4.8",
      Jobname: "React & JavaScript Instructor",
      nostud: "3.0M",
      nocourses: "30+",
    },
  ];

  const courses = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ28QCV145olN462RxUnuhDnjyo3a3oEXRZP_xjS_amoA&s=10",
      course: "Complete React JS Course",
      name: "Dr. Angela Yu",
      rating: 4.9,
      price: 499,
    },

    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpoXyGkxsqZBYFk_58zWtXbhA8yHGOAUFn3g5oOAwoJA&s=10",
      course: "JavaScript Mastery",
      name: "Jose Portilla",
      rating: 4.8,
      price: 599,
    },

    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQrI8Jn6HaEaCau9MTrLNn4dQk0pdF7pXsfdlGo0wbvg&s=10",
      course: "Python Programming for Beginners",
      name: "Kirill Eremenko",
      rating: 4.7,
      price: 449,
    },

    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0EC_4G82cKluv0Tc49I95vCqCJvjcvr9c-8pIIXsCBpUnl1NKUE8cTNAk&s=10",
      course: "Data Structures & Algorithms",
      name: "Maximilian Schwarzmüller",
      rating: 4.9,
      price: 699,
    },

    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc9ROuYBhtN2dnOPi-sYjmvBttPdjXIuYcA3WA01nSlQ&s=10",
      course: "Full Stack Web Development",
      name: "Dr. Angela Yu",
      rating: 4.8,
      price: 899,
    },

    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpoXyGkxsqZBYFk_58zWtXbhA8yHGOAUFn3g5oOAwoJA&s=10",
      course: "Cyber Security Fundamentals",
      name: "Jose Portilla",
      rating: 4.6,
      price: 549,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSaKzFVomXAYN_6243xpby4YjqrG4-7txKVa0orUoNmA&s",
      course: "Frontend Course",
      name: "Code With Harry",
      rating: 4.9,
      price: 499,
    },
    {
      image: "https://img-c.udemycdn.com/course/480x270/6035102_7d1a.jpg",
      course: "Backend Course",
      name: "Hitesh Choudhary",
      rating: 4.6,
      price: 699,
    },
  ];

  const Coursecat = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTorR86grdhFk1pREoX6esp0KsvQA3ywVuDpxHYG4rpnA&s=10",
      CourseName: "Web Development",
      Nocourse: 45,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr2D1RTtQeCuegH4xPOypmgCqMNILCYyt8pH1blOdDgQ&s=10",
      CourseName: "React & Javascript",
      Nocourse: 25,
    },
    {
      img: "data:image/jpeg;base64,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",
      CourseName: "Python",
      Nocourse: 40,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVAFSRMoCVYfBDci2AiJKsC1S1A-HyEzRBujw41fv6JQ&s=10",
      CourseName: "Data Science",
      Nocourse: 48,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt10yRj15DD9o7oA-oFOp9paCnXnqK4TSIYQmQzZ9XIA&s=10",
      CourseName: "Cyber Security",
      Nocourse: 38,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy7LZUFwn8TWsX9jHvZqWoUHsoo_bvY-I7OtGwx4VzdQ&s=10",
      CourseName: "Cloud Computing",
      Nocourse: 30,
    },
  ];

  const review=[
    {Name:"Vaishnavi khude",
      reviews:"The courses are well structured and easy to follow. I especially liked the practical examples because they helped me understand the concepts instead of just memorizing them.",
      stars:"⭐⭐⭐⭐⭐",
    },
    {Name:"Yusra Sayyad",
      reviews:"I was struggling with React at first, but the step-by-step lessons made it much easier to understand. The course projects were also really useful for practicing what I learned",
      stars:"⭐⭐⭐⭐",
    },
    {Name:"Arshin Sayyad",
      reviews:"The platform is simple to use and the lessons are explained clearly. I could learn at my own pace and track my progress as I completed each course.",
      stars:"⭐⭐⭐⭐",
    }
  ]

  return (
    <div className="bg-amber-50 min-h-screen flex flex-col items-center">
      <div className="text-center mt-10 px-5">
        <h1 className="text-5xl md:text-7xl font-bold text-slate-700">
          Learn Anytime, <span className="text-blue-400">Anywhere</span>
        </h1>

        <p className="text-xl md:text-3xl mt-6 font-semibold text-slate-600">
          Master new skills with expert-led courses and{" "}
          <span className="text-blue-400">learn at your own pace</span>
        </p>

        <Link to="/courses">
          <button className="mt-10 px-8 py-4 bg-blue-500 rounded-lg hover:bg-blue-700 text-white text-xl font-semibold transition">
            Explore Courses
          </button>
        </Link>
      </div>

      <div className="w-full mt-16 px-6">
        <h1 className="text-5xl font-bold text-center text-slate-800 mb-12">
          Our Star Instructors
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {Instructors.map((elem, index) => (
            <Cards
              key={index}
              image={elem.img}
              name={elem.name}
              ratings={elem.ratings}
              ratingno={elem.ratingno}
              jobname={elem.Jobname}
              nostud={elem.nostud}
              nocourses={elem.nocourses}
            />
          ))}
          <Routes>
            <Route path="/home/Cards" element={<Cards />} />
          </Routes>
        </div>
      </div>
      <br></br>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-slate-800 mb-10">
          Popular Courses
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {courses.map((elem, index) => (
            <Cards2
              key={index}
              image={elem.image}
              course={elem.course}
              name={elem.name}
              rating={elem.rating}
              price={elem.price}
            />
          ))}
        </div>
      </div>
      <br />
      <br />
      <h1 className="text-4xl sm:text-5xl font-bold text-center text-slate-800 mb-10">
        Course Categories
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Coursecat.map((elem, index) => (
          <Coursecategory
            key={index}
            img={elem.img}
            CourseName={elem.CourseName}
            Nocourse={elem.Nocourse}
          />
        ))}
      </div>
      <br />
      <br />
      <h1 className="text-4xl sm:text-5xl font-bold text-center text-slate-800 mb-10">
        Why Choose Us?
      </h1>
      <p className="text-center max-w-4xl mx-auto text-lg text-slate-600 leading-8">
        We make learning simple, flexible, and practical by bringing
        high-quality courses and experienced instructors together in one
        platform. Whether you're a beginner or looking to advance your skills,
        you can learn at your own pace, practice what you learn, track your
        progress, and build skills that are useful in the real world. With a
        wide range of courses, organized learning paths, and an easy-to-use
        platform, we help you turn your curiosity into practical knowledge and
        meaningful skills.
      </p>
      <br />
      <br />
      <h1 className="text-4xl sm:text-5xl font-bold text-center text-slate-800 mb-10">
        How It Works
      </h1>

      <p className="text-3xl text-black font-bold">01-Create Account</p>
      <h1 className="text-center max-w-4xl mx-auto text-lg text-slate-600 leading-8"> SignUp for Free and Create your Learning Profile.</h1>
      <br />
      <p className="text-3xl text-black font-bold">02 - Choose Course</p>
       <h1 className="text-center max-w-4xl mx-auto text-lg text-slate-600 leading-8"> Browse Courses and select the subject you want to learn.</h1>
       <br />
      <p className="text-3xl text-black font-bold">03- Start Learning</p>
       <h1 className="text-center max-w-4xl mx-auto text-lg text-slate-600 leading-8"> Watch lessons,complete quizzes,and learn at your own pace.</h1>
       <br />
      <p className="text-3xl text-black font-bold">04- Track Your Progress</p>
       <h1 className="text-center max-w-4xl mx-auto text-lg text-slate-600 leading-8"> Monitor your progress and complete courses to improve your skills.</h1>
      
      <br /><br />

       <h1 className="text-4xl sm:text-5xl font-bold text-center text-slate-800 mb-10">
        Students Testimonials And Reviews
      </h1>
<div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
  {review.map((elem, index) => {
    return (
      <Review
        key={index}
        stars={elem.stars}
        Name={elem.Name}
        reviews={elem.reviews}
      />
    );
  })}
</div>
 <br />
 <br />

    </div>
  );
};

export default Home;
