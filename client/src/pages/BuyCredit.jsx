import React from 'react'
import { assets, plans } from '../assets/assets'
import { useContext } from 'react'
import { AppContext } from './../context/AppContext';

const BuyCredit = () => {

  const {user}=useContext(AppContext)
  return (
    
    <div className="py-16 px-4 max-w-7xl mx-auto text-center">
      
      <button className="inline-flex items-center justify-center bg-gradient-to-r from-gray-700 to-gray-800 rounded-full px-8 py-3 mb-6 text-base font-semibold text-teal-400 shadow-xl hover:from-gray-600 hover:to-gray-700 transition duration-300 ease-in-out transform hover:scale-105">
        Our Plans
      </button>

      
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-12 text-white text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 drop-shadow-lg">
        Choose the plan
      </h1>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {
          plans.map((item, index) => (
           
            <div key={index} className="bg-gray-800 rounded-xl shadow-2xl p-8 border border-gray-700 flex flex-col items-center text-center transform hover:scale-103 transition duration-300 ease-in-out hover:border-teal-500">
              
              <img src={assets.logo_icon} alt="Plan Icon" className="h-16 w-16 mb-6 filter brightness-150 saturate-200 drop-shadow-lg" />
             
              <p className="text-3xl font-bold text-white mb-2">{item.id}</p>
              
              <p className="text-base text-gray-400 mb-4 leading-relaxed">{item.desc}</p>
              
              <p className="text-xl font-extrabold text-gray-300">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 text-4xl drop-shadow-lg">
                  ${item.price}
                </span> / {item.credits} credits
              </p>
              

              <button className="px-6 py-3 mt-6 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold rounded-full shadow-lg hover:from-teal-600 hover:to-blue-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-75">{user ? "Purchase": "Get Started"}</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default BuyCredit
