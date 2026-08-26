import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [login, setLogin] = useState('')

  const handleSubmit=(e)=>{
    e.preventDefault(e);
    console.log(email);
    console.log(password);
    

    const loginData={
      email,
      password,
    }
    localStorage.setItem("loginData" ,JSON.stringify(loginData))
    console.log("Login Successful")
    setLogin("Login Sucessfully Done! ")
  }



  return (
    <div>
      <div className='text-4xl md:text-5xl font-bold text-slate-700 font-sans text-center mt-10 px-5 leading-15'>
        Welcome Back✋
        <br />
        <span className="text-blue-400 font-semibold">
Continue your learning journey
</span>
<br />
      </div>
<br />
      <div>
        <form onSubmit={handleSubmit}>
          
        <div className='md:rounded-2xl flex flex-wrap shadow-2xl h-150 w-120  mb-500 border-4 bg-amber-50  md:ml-90  sm: h-100 w-90 '>
          

          <div className='text-4xl text-slate-700 font-serif font-bold ml-3 mt-5'>
            Email
             <textarea
              placeholder='Write Your Email...'
              rows="2"
              value={email}
              onChange={(e)=>{
                setEmail(e.target.value)
              }
              }
              className='w-full border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500'
            />

            <br />
             Password
             <textarea
              placeholder='Write Your password...'
              rows="2"
              value={password}
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
              className='w-full border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500'
            />
            <br />
 <a href="" className='text-blue-400 text-lg text-center'> Forgot Password?</a>


 <br />
 <br />
 <div className='gap-5'>
 <button  type="submit"     className='bg-blue-400 text-black text-2xl rounded-xl px-3 py-2 cursor-pointer hover:bg-blue-500'>Login
  </button>
  {login 
    &&( <p className='text-center mt-4 text-blue-500'>{login} </p>)}
 
          
 <Link to="/get" className='text-blue-400 text-xl ml-10 '> Sign Up</Link>

</div>
          </div>
          </div>      
            </form>
      </div>
    </div>
  )
}

export default Login
