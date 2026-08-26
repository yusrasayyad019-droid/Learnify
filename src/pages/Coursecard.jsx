import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Coursecard = (props) => {
    console.log(props.name)
    console.log(props.selectedvideos)
    const [selectedvideos, setSelectedvideos] = useState('')


  return (
    <div>
         <div className="bg-white rounded-3xl shadow-xl hover:-translate-y-2 hover:shadow-3xl transition-all duration-300 p-6 text-blue-950">
           <h2 className="text-2xl font-bold text-center mt-2 ml-4 mb-40">
         {props.name}
      </h2>

      {selectedvideos && (
 <iframe
  className="h-60 w-70 -mt-30 border-2 rounded-xl"
  width="100%"
  height="500"
  src={props.selectedvideos}
  title="YouTube playlist"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
>
        </iframe>
      )}
    

    <br />
    <button className='w-full bg-blue-500  text-white font-bold py-3 rounded-xl hover:bg-blue-100 transition' onClick={()=>{
        setSelectedvideos(props.selectedvideos)
    }}>
        Start Learning

    </button>
    <br />
    <br />

<button className='w-full bg-blue-500  text-white font-bold py-3 rounded-xl hover:bg-blue-100 transition'>
    <Link to="/Coursecarddetail" >Explore Course Details</Link>
</button>
    



     

         </div>
      
    </div>
  )
}

export default Coursecard
