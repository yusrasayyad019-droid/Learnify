import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [login, setLogin] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(email)
    console.log(password)

    const loginData = {
      email,
      password,
    }

    localStorage.setItem("loginData", JSON.stringify(loginData))

    console.log("Login Successful")
    setLogin("Login Successfully Done!")
  }

  return (
    <div className="min-h-screen px-4 py-8">

      <div className="text-4xl sm:text-5xl font-bold text-slate-700 font-sans text-center leading-tight">

        Welcome Back✋

        <br />

        <span className="text-blue-400 font-semibold">
          Continue your learning journey
        </span>

      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md mx-auto mt-10"
      >

        <div className="rounded-2xl shadow-2xl border-4 bg-amber-50 p-5 sm:p-8">

          <div className="text-2xl sm:text-3xl md:text-4xl text-slate-700 font-serif font-bold">

            <label className="block mb-2">
              Email
            </label>

            <textarea
              placeholder="Write Your Email..."
              rows="2"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              className="w-full text-base sm:text-lg font-sans font-normal border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
            />

            <label className="block mt-5 mb-2">
              Password
            </label>

            <textarea
              placeholder="Write Your Password..."
              rows="2"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              className="w-full text-base sm:text-lg font-sans font-normal border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
            />

            <a
              href=""
              className="block text-blue-400 text-base sm:text-lg text-center mt-4"
            >
              Forgot Password?
            </a>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">

              <button
                type="submit"
                className="w-full sm:w-auto bg-blue-400 text-black text-xl rounded-xl px-5 py-3 cursor-pointer hover:bg-blue-500 transition"
              >
                Login
              </button>

              <Link
                to="/get"
                className="text-blue-400 text-lg sm:text-xl"
              >
                Sign Up
              </Link>

            </div>

            {login && (
              <p className="text-center mt-4 text-blue-500 text-base">
                {login}
              </p>
            )}

          </div>

        </div>

      </form>

    </div>
  )
}

export default Login