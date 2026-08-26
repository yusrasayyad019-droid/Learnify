import React from "react";

const Coursecarddetail = () => {

  return (
    <div className="min-h-screen bg-amber-50 py-12 px-5">

      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-slate-700">
          Explore Our <span className="text-blue-400">Courses</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 mt-4">
          Discover new skills and start your learning journey with Learnify.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">

        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-all duration-300">
          <h2 className="text-3xl font-bold text-slate-700">
            💻 Web Development
          </h2>

          <div className="w-20 h-1 bg-blue-400 mt-4 mb-5"></div>

          <p className="text-lg text-slate-600 leading-relaxed">
            Learn how to build complete modern websites and web applications
            from frontend to backend.
          </p>

          <h3 className="text-xl font-bold text-slate-700 mt-5">
            What You'll Learn:
          </h3>

          <ul className="text-slate-600 mt-3 space-y-2 list-disc pl-5">
            <li>HTML and CSS fundamentals</li>
            <li>Responsive website design</li>
            <li>Tailwind CSS</li>
            <li>JavaScript fundamentals</li>
            <li>DOM manipulation</li>
            <li>React JS</li>
            <li>Node.js and Express.js</li>
            <li>MongoDB databases</li>
            <li>Connecting frontend, backend and database</li>
            <li>Building complete web applications</li>
          </ul>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-all duration-300">
          <h2 className="text-3xl font-bold text-slate-700">
            ⚛️ React JS
          </h2>

          <div className="w-20 h-1 bg-blue-400 mt-4 mb-5"></div>

          <p className="text-lg text-slate-600 leading-relaxed">
            Learn how to build modern, fast and interactive web applications
            using React JS.
          </p>

          <h3 className="text-xl font-bold text-slate-700 mt-5">
            What You'll Learn:
          </h3>

          <ul className="text-slate-600 mt-3 space-y-2 list-disc pl-5">
            <li>Introduction to React and JSX</li>
            <li>Creating reusable components</li>
            <li>Props and component communication</li>
            <li>State and event handling</li>
            <li>Conditional rendering</li>
            <li>Rendering lists using map()</li>
            <li>useState and useEffect hooks</li>
            <li>Form handling</li>
            <li>React Router</li>
            <li>Fetching data from APIs</li>
          </ul>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-all duration-300">
          <h2 className="text-3xl font-bold text-slate-700">
            🟢 Node JS
          </h2>

          <div className="w-20 h-1 bg-blue-400 mt-4 mb-5"></div>

          <p className="text-lg text-slate-600 leading-relaxed">
            Learn how to create the backend and server-side part of modern
            web applications.
          </p>

          <h3 className="text-xl font-bold text-slate-700 mt-5">
            What You'll Learn:
          </h3>

          <ul className="text-slate-600 mt-3 space-y-2 list-disc pl-5">
            <li>Introduction to backend development</li>
            <li>Node.js fundamentals</li>
            <li>Modules and packages</li>
            <li>Creating a server</li>
            <li>Express.js basics</li>
            <li>Routes and middleware</li>
            <li>Requests and responses</li>
            <li>Creating REST APIs</li>
            <li>Connecting backend with databases</li>
          </ul>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-all duration-300">
          <h2 className="text-3xl font-bold text-slate-700">
            🌿 MongoDB
          </h2>

          <div className="w-20 h-1 bg-blue-400 mt-4 mb-5"></div>

          <p className="text-lg text-slate-600 leading-relaxed">
            Learn how to store, organize and manage data for modern web
            applications using MongoDB.
          </p>

          <h3 className="text-xl font-bold text-slate-700 mt-5">
            What You'll Learn:
          </h3>

          <ul className="text-slate-600 mt-3 space-y-2 list-disc pl-5">
            <li>Introduction to NoSQL databases</li>
            <li>Databases, collections and documents</li>
            <li>Creating databases</li>
            <li>Inserting data</li>
            <li>Finding and filtering documents</li>
            <li>Updating data</li>
            <li>Deleting documents</li>
            <li>MongoDB Compass</li>
            <li>Data modeling basics</li>
            <li>Connecting MongoDB with Node.js</li>
          </ul>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-all duration-300">
          <h2 className="text-3xl font-bold text-slate-700">
            🐍 Python Programming
          </h2>

          <div className="w-20 h-1 bg-blue-400 mt-4 mb-5"></div>

          <p className="text-lg text-slate-600 leading-relaxed">
            Learn Python programming from the basics and develop strong
            programming and problem-solving skills.
          </p>

          <h3 className="text-xl font-bold text-slate-700 mt-5">
            What You'll Learn:
          </h3>

          <ul className="text-slate-600 mt-3 space-y-2 list-disc pl-5">
            <li>Python syntax and variables</li>
            <li>Data types and operators</li>
            <li>Conditional statements</li>
            <li>Loops and iteration</li>
            <li>Functions</li>
            <li>Lists and tuples</li>
            <li>Sets and dictionaries</li>
            <li>String manipulation</li>
            <li>File handling basics</li>
            <li>Problem-solving with Python</li>
          </ul>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-all duration-300">
          <h2 className="text-3xl font-bold text-slate-700">
            🎨 UI/UX Design
          </h2>

          <div className="w-20 h-1 bg-blue-400 mt-4 mb-5"></div>

          <p className="text-lg text-slate-600 leading-relaxed">
            Learn how to design attractive, easy-to-use and user-friendly
            digital experiences.
          </p>

          <h3 className="text-xl font-bold text-slate-700 mt-5">
            What You'll Learn:
          </h3>

          <ul className="text-slate-600 mt-3 space-y-2 list-disc pl-5">
            <li>Introduction to UI and UX</li>
            <li>Understanding user needs</li>
            <li>Design principles</li>
            <li>Visual hierarchy</li>
            <li>Colors and typography</li>
            <li>Spacing and layouts</li>
            <li>Wireframes</li>
            <li>User flows</li>
            <li>Responsive interface design</li>
            <li>Prototyping and design basics</li>
          </ul>
        </div>

      </div>

    </div>
  )
}

export default Coursecarddetail