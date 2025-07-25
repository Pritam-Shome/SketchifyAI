import React from 'react'
import { assets } from './../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import {AppContext} from '../context/AppContext.jsx'



const Navbar = () => {
  const navigate = useNavigate();
  const { user,setShowLogin, logout,credit} = React.useContext(AppContext); // Accessing user state from AppContext

  return (
    <div className="flex items-center justify-between px-8 py-4 bg-gray-900 shadow-lg border-b border-teal-500">
      <Link to="/">
        <img src={assets.logo} alt="AI Platform Logo" className="h-12 w-auto cursor-pointer filter brightness-150 saturate-150" />
      </Link>

      <div>
        {user ?


          <div className="flex items-center gap-6 text-white">

            <button onClick={()=> navigate('/buy')}  className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-full text-sm font-semibold text-teal-400 shadow-md hover:bg-gray-700 transition duration-300 ease-in-out">
              <img src={assets.credit_star} alt="Credit Star" className="h-5 w-5" />
              <p>Credit left : {credit}</p>
            </button>


            <p className="text-lg font-medium text-gray-200">Hi, {user.name}</p>


            <div className='relative group cursor-pointer'>
              <img src={assets.profile_icon} alt="Profile Icon" className="h-8 w-8 rounded-full border-2 border-teal-500 hover:border-teal-400 transition duration-300 ease-in-out" />

              

              <div className='absolute hidden group-hover:block top-full right-0 w-40 bg-gray-800 rounded-md shadow-xl py-2 z-10 border border-gray-700 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100'>
                <ul className="list-none p-0 m-0">


                  <li onClick={logout} className="px-4 py-2 text-red-400 hover:bg-red-700 hover:text-white cursor-pointer rounded-md transition duration-75 ease-in-out">Logout</li>
                </ul>
              </div>
            </div>
          </div>
        :

          <div className="flex items-center gap-8">
            {/* <p
              className="text-lg text-gray-300 hover:text-teal-400 cursor-pointer font-medium transition duration-300 ease-in-out transform hover:scale-105"
              onClick={() => navigate('/buy')}
            >
              🚀 Pricing
            </p> */}
            <button onClick={()=>setShowLogin(true)} className="px-6 py-2 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold rounded-full shadow-lg hover:from-teal-600 hover:to-blue-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-75">
              Login
            </button>
          </div>
        }
      </div>
    </div>
  )
}

export default Navbar
