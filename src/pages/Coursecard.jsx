import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Coursecard = (props) => {

  console.log(props.name)
  console.log(props.selectedvideos)

  const [selectedvideos, setSelectedvideos] = useState('')

  return (
    <div className="w-full">

      <div className="bg-white rounded-3xl shadow-xl hover:-translate-y-2 hover:shadow-3xl transition-all duration-300 p-6 text-blue-950 w-full">

        <h2 className="text-2xl font-bold text-center mt-2 mb-10">
          {props.name}
        </h2>

        {selectedvideos && (
          <iframe
            className="w-full h-60 -mt-4 border-2 rounded-xl"
            src={props.selectedvideos}
            title="YouTube playlist"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          >
          </iframe>
        )}

        <br />

        <button
          className="w-full bg-blue-500 text-white font-bold py-3 rounded-xl hover:bg-blue-100 transition"
          onClick={() => {
            setSelectedvideos(props.selectedvideos)
          }}
        >
          Start Learning
        </button>

        <br />
        <br />

        <button className="w-full bg-blue-500 text-white font-bold py-3 rounded-xl hover:bg-blue-100 transition">

          <Link to="/Coursecarddetail">
            Explore Course Details
          </Link>

        </button>

      </div>

    </div>
  )
}

export default Coursecard