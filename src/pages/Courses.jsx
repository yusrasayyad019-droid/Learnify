import React from 'react'
import Coursecard from './Coursecard'

const Courses = () => {
  const mapping=[{
    "name":"Web Development",
    "selectedvideos":"https://www.youtube.com/embed/tVzUXW6siu0?list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w",


  },
  {
    "name":"React Js",
    "selectedvideos":"https://www.youtube.com/embed/3LRZRSIh_KE",
  },

  {
    "name":"Node Js",
    "selectedvideos":"https://www.youtube.com/embed/BLl32FvcdVM",
  },
  {
    "name":"MongoDB",
    "selectedvideos":"https://www.youtube.com/embed/M1dKYQ7GsTg",
  },
  {
    "name":"Python Programming",
    "selectedvideos":"https://www.youtube.com/embed/UrsmFxEIp5k",
  },
  {
    "name":"UI/UX Design",
    "selectedvideos":"https://www.youtube.com/embed/truRwcI7-kg",
  },
   {
    "name":"Data Science",
    "selectedvideos":"https://www.youtube.com/embed/-ETQ97mXXF0",
  },
   {
    "name":"Cyber Security",
    "selectedvideos":"https://www.youtube.com/embed/v3iUx2SNspY",
  },
  
  
  
  
]
  return (
    <div>
      <div className="bg-amber-50 min-h-screen flex flex-col items-center ">
      <div className="text-center mt-10 px-5">
        <h1 className="text-5xl md:text-7xl font-bold text-slate-700">
          Explore Our, <span className="text-blue-400">Courses</span>
        </h1>
        </div>
        <p className="text-xl md:text-4xl mt-6 font-semibold text-slate-600">
             Learn new skills from expert-led courses and grow at your own pace.
          <span className="text-blue-400">learn at your own pace</span>
        </p>
        </div>
        
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-15  mb-100 ml-10 -mt-110 ">
{mapping.map((elem,index)=>
<Coursecard
key={index}
name={elem.name}
selectedvideos={elem.selectedvideos}


/>)}

      </div>
    </div>
  )
}

export default Courses
