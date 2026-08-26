import React, { useState } from 'react'
import { Link } from 'react-router-dom'

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
    <div className="min-h-screen bg-white px-4 py-10">

      <h1 className="text-4xl sm:text-5xl font-bold text-slate-700 text-center">
        Join Learnify!
        <br />
        <span className="text-blue-400">
          Start your Learning
          <br />
          Journey with us today.
        </span>
      </h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg mx-auto mt-10"
      >

        <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl shadow-2xl p-6 sm:p-8">

          <label className="block text-xl font-bold text-slate-700 mb-2">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Write Your Name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
          />

          <label className="block text-xl font-bold text-slate-700 mt-5 mb-2">
            Email
          </label>

          <input
            type="email"
            placeholder="Write Your Email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
          />

          <label className="block text-xl font-bold text-slate-700 mt-5 mb-2">
            Password
          </label>

          <input
            type="password"
            placeholder="Create Your Password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
          />

          <label className="block text-xl font-bold text-slate-700 mt-5 mb-2">
            Confirm Password
          </label>

          <input
            type="password"
            placeholder="Confirm Your Password..."
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
          />

          <button
            type="submit"
            className="w-full mt-7 bg-blue-400 text-white text-xl font-bold rounded-xl px-4 py-3 hover:bg-blue-500 transition"
          >
            Create Account
          </button>

          <div className="text-center mt-6">

            <p className="text-slate-600">
              Already have an Account?
            </p>

            <Link
              to="/login"
              className="inline-block mt-2 text-blue-500 text-lg font-semibold"
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

export default Get