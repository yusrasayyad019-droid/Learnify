import React from 'react'

const Review = (props) => {
    console.log(
        props.Name,
        props.reviews,
        props.stars,
    );
    
  return (
    <div>
        <div className="bg-white rounded-2xl shadow-md p-6 border border-slate-100">
            {props.stars}
            <div className='text-yellow-500 text-lg'>
                
            </div>
            <h3 className='font-bold text-slate-900'>
                {props.Name}
            </h3>
            <p className='text-slate-600 leading-7'>
                {props.reviews}
            </p>
        


      </div>
      
    </div>
  )
}

export default Review
