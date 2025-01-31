import React from 'react'

function Signup() {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="w-full max-w-sm p-6 bg-gray-600 rounded-lg shadow-md">
        <div className="flex flex-col items-center mb-6">
          <img src="logo-url" alt="Company Logo" className="w-24 h-24 mb-2" />
          <h1 className="text-2xl text-white font-bold">FreedomTrack</h1>
        </div>
        <form>
        <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full p-2 text-gray-700 bg-gray-200 rounded focus:outline-none focus:bg-white"
              type="name"
              id="name"
              placeholder="Enter your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="fathername">
              Father Name
            </label>
            <input
              className="w-full p-2 text-gray-700 bg-gray-200 rounded focus:outline-none focus:bg-white"
              type="fatherName"
              id="fathername"
              placeholder="Father Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-2 text-gray-700 bg-gray-200 rounded focus:outline-none focus:bg-white"
              type="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full p-2 text-gray-700 bg-gray-200 rounded focus:outline-none focus:bg-white"
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
           
          </div>
          <div>
            <p className='text-white mt-2 text-center'>Already have an account</p> 
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
