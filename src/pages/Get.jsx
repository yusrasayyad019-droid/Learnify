import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'



const Get = () => {

  const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [signup, setSignup] = useState('')


  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(name)
    console.log(email)
    console.log(password)

    const info={
      name,
      email,
      password,
    }

      localStorage.setItem("info",JSON.stringify(info));
      console.log("SignUp Successful")
    setSignup("SignUp Sucessfully Done! ")

    

  }


  return (
    <div>
     <div className='text-4xl md:text-5xl font-bold text-slate-700 font-sans text-center mt-10 px-5 leading-15'>
      Join Learnify!
      <br />
      <span className="text-blue-400 font-semibold">
        Start your Learning 
        Journey with us today.
        <br />
      </span>
      <br />
      <form onSubmit={handleSubmit}>
        <div className='md:rounded-2xl flex flex-wrap shadow-2xl h-170 w-120  mb-500 border-4 bg-amber-50  md: ml-110  sm : -mt-10    '>
          <div className='text-4xl text-slate-700 font-serif font-bold   mt-5 sm: mr-3'>
           Full Name
             <textarea
              placeholder='Write Your Name...'
              rows="2"
              value={name}
              onChange={(e)=>{
                setName(e.target.value)
              }}
              className='w-full border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500'
            />

            <br />
              Email
             <textarea
              placeholder='Write Your Email...'
              rows="2"
              value={email}
              onChange={(e)=>{
                setEmail(e.target.value)
              }}
              className='w-full border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500'
            />
            <br />
              Password
             <textarea
              placeholder='Create  Your Password...'
              rows="2"
              value={password}
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
              className='w-full border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500'
            />
            <br />
            <button type="submit" className='bg-blue-400 text-black text-2xl rounded-xl px-3 py-2 cursor-pointer hover:bg-blue-500'> Confirm Password</button>
<br />
<br />
<h1 className='text-blue-400 text-lg text-center'> Already have an Account?</h1>
 
<Link to="/login" className='text-blue-400 text-xl ml-10 '> Login</Link>
{signup
    &&( <p className='text-center mt-4 text-blue-500'>{signup} </p>)}
            </div>
          </div>
          

      </form>
     </div>
    </div>
  )
}

export default Get
