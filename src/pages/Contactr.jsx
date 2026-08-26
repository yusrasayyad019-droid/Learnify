import React, { useState } from 'react'

const Contactr = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(subject);
    console.log(message);

    const contactData={
      name,
      email,
      subject,
      message,

    }
    
  
localStorage.setItem("contactData",JSON.stringify(contactData));
console.log("Saved Successfully!")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
    
        <div className='rounded-2xl flex flex-wrap ml-20 shadow-2xl h-250 w-120 mb-500 border-4 bg-amber-50'>

          <div className='text-4xl text-slate-700 font-serif font-bold ml-3 mt-5'>

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
              rows="1"
              value={email}
              onChange={(e)=>{
                setEmail(e.target.value)
              }}
              
              className='w-full border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500'
            />

            <br />
            <br />

            Subject

            <textarea
              placeholder='Write Your Subject...'
              rows="2"
              value={subject}
           
              onChange={(e) => setSubject(e.target.value)}
              className='w-full border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500'
            />

            <br />

            Message ✉️

            <textarea
              placeholder='Write Your Message...'
              rows="3"
              value={message}
              onChange={(e)=>{
                setMessage(e.target.value)
              }}
            
              className='w-full border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500'
            />

            <button
              type="submit"
              className='bg-blue-400 text-black text-2xl rounded-xl px-3 py-2 cursor-pointer hover:bg-blue-500'
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