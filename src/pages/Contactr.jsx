import React, { useState } from 'react'

const Contactr = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(name)
    console.log(email)
    console.log(subject)
    console.log(message)

    const contactData = {
      name,
      email,
      subject,
      message,
    }

    localStorage.setItem("contactData", JSON.stringify(contactData))

    console.log("Saved Successfully!")
  }

  return (
    <div className="min-h-screen px-4 py-10">

      <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">

        <div className="rounded-2xl shadow-2xl border-4 bg-amber-50 p-5 sm:p-8">

          <div className="text-2xl sm:text-3xl md:text-4xl text-slate-700 font-serif font-bold">

            <label className="block mb-2">
              Full Name
            </label>

            <textarea
              placeholder="Write Your Name..."
              rows="2"
              value={name}
              onChange={(e) => {
                setName(e.target.value)
              }}
              className="w-full text-base sm:text-lg font-sans font-normal border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
            />

            <label className="block mt-5 mb-2">
              Email
            </label>

            <textarea
              placeholder="Write Your Email..."
              rows="1"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              className="w-full text-base sm:text-lg font-sans font-normal border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
            />

            <label className="block mt-5 mb-2">
              Subject
            </label>

            <textarea
              placeholder="Write Your Subject..."
              rows="2"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full text-base sm:text-lg font-sans font-normal border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
            />

            <label className="block mt-5 mb-2">
              Message ✉️
            </label>

            <textarea
              placeholder="Write Your Message..."
              rows="4"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value)
              }}
              className="w-full text-base sm:text-lg font-sans font-normal border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500"
            />

            <button
              type="submit"
              className="w-full sm:w-auto mt-6 bg-blue-400 text-black text-lg sm:text-xl rounded-xl px-5 py-3 cursor-pointer hover:bg-blue-500 transition"
            >
              Send Message
            </button>

          </div>

        </div>

      </form>

    </div>
  )
}

export default Contactr