import React from 'react'

const Coursecategory = (props) => {

    console.log(
        props.CourseName,
        props.Nocourse,
        props.img,
    );
    
  return (
    <div>
      <div className="bg-blue-500 rounded-3xl shadow-xl hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 p-6 text-white">
        <img  className="h-55 w-50"   src={props.img} alt="logos" />
      <p className='font-bold text-white text-2xl '>{props.CourseName}</p>
      <p className='font-semibold text-white text-lg'> No. Of Courses :{props.Nocourse}</p>
      </div>
      

    </div>
  )
}

export default Coursecategory
