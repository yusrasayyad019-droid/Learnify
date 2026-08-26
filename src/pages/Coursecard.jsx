import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Coursecard = (props) => {

  const [selectedvideos, setSelectedvideos] = useState('')

  return (
    <div className="w-full h-full">

      <div className="bg-white rounded-3xl shadow-xl hover:-translate-y-2 transition-all duration-300 p-6 text-blue-950 w-full h-full">

        <h2 className="text-2xl font-bold text-center mt-2 mb-10">
          {props.name}
        </h2>

        {selectedvideos && (
          <iframe
            className="w-full h-60 mb-6 border-2 rounded-xl"
            src={props.selectedvideos}
            title="YouTube playlist"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        )}

        <button
          className="w-full bg-blue-500 text-white font-bold py-3 rounded-xl hover:bg-blue-600 transition mt-4"
          onClick={() => {
            setSelectedvideos(props.selectedvideos)
          }}
        >
          Start Learning
        </button>

        <Link
          to="/Coursecarddetail"
          className="block w-full text-center bg-blue-500 text-white font-bold py-3 rounded-xl hover:bg-blue-600 transition mt-4"
        >
          Explore Course Details
        </Link>

      </div>

    </div>
  )
}

export default Coursecard