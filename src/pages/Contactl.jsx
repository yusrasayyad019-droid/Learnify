import React from 'react'

const Contactl = () => {

  return (
    <div className="min-h-screen px-4 py-10">

      <div className="w-full max-w-2xl mx-auto bg-amber-50 rounded-2xl shadow-2xl border-4 p-6 sm:p-8 md:p-10">

        <div className="text-3xl sm:text-4xl md:text-5xl text-slate-700 font-serif font-bold text-center">
          Get In Touch
        </div>

        <div className="mt-8 space-y-8">

          <div className="text-2xl sm:text-3xl text-blue-500 font-mono font-semibold">
            Email📧
            <span className="block sm:inline text-xl sm:text-2xl text-blue-400 font-sans sm:ml-2 mt-2 sm:mt-0 break-words">
              support@learnify.com
            </span>
          </div>

          <div className="text-2xl sm:text-3xl text-blue-500 font-mono font-semibold">
            Phone📞
            <span className="block sm:inline text-xl sm:text-2xl text-blue-400 font-sans sm:ml-2 mt-2 sm:mt-0">
              +91 9786875949
            </span>
          </div>

          <div className="text-2xl sm:text-3xl text-blue-500 font-mono font-semibold">
            Location📍
            <span className="block sm:inline text-xl sm:text-2xl text-blue-400 font-sans sm:ml-2 mt-2 sm:mt-0">
              Pune, Maharashtra
            </span>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Contactl