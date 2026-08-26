
import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Get = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [signup, setSignup] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(name)
    console.log(email)
    console.log(password)

    if (password !== confirmPassword) {
      setSignup("Passwords do not match!")
      return
    }

    const info = {
      name,
      email,
      password,
    }

    localStorage.setItem("info", JSON.stringify(info))

    console.log("SignUp Successful")
    setSignup("SignUp Successfully Done!")
  }

  return (
    <div className="min-h-screen bg-white px-4 py-8">

      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-700 leading-tight">
          Join Learnify!
          <br />
          <span className="text-blue-400 font-semibold">
            Start your Learning
            <br />
            Journey with us today.
          </span>
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto mt-10">

        <div className="rounded-2xl shadow-2xl border-2 border-amber-100 bg-amber-50 p-5 sm:p-7">

          <label className="block text-xl sm:text-2xl text-slate-700 font-serif font-bold mb-2">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Write Your Name..."
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />

          <label className="block text-xl sm:text-2xl text-slate-700 font-serif font-bold mt-5 mb-2">
            Email
          </label>

          <input
            type="email"
            placeholder="Write Your Email..."
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />

          <label className="block text-xl sm:text-2xl text-slate-700 font-serif font-bold mt-5 mb-2">
            Password
          </label>

          <input
            type="password"
            placeholder="Create Your Password..."
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />

          <label className="block text-xl sm:text-2xl text-slate-700 font-serif font-bold mt-5 mb-2">
            Confirm Password
          </label>

          <input
            type="password"
            placeholder="Confirm Your Password..."
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value)
            }}
            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />

          <button
            type="submit"
            className="w-full mt-7 bg-blue-400 text-white text-xl font-bold rounded-xl px-4 py-3 cursor-pointer hover:bg-blue-500 transition"
          >
            Create Account
          </button>

          <div className="text-center mt-6">

            <p className="text-slate-600 text-base sm:text-lg">
              Already have an Account?
            </p>

            <Link
              to="/login"
              className="inline-block mt-2 text-blue-500 text-lg font-semibold hover:text-blue-700"
            >
              Login
            </Link>

          </div>

          {signup && (
            <p className="text-center mt-5 text-blue-500 font-semibold">
              {signup}
            </p>
          )}

        </div>

      </form>

    </div>
  )
}

export default Get;
