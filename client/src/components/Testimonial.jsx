import React from 'react'
import { assets, testimonialsData } from '../assets/assets'

const Testimonial = () => {
  return (
    
    <div className="py-16 px-4 max-w-7xl mx-auto text-center">
      
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-white text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
        Customer Testimonial
      </h1>

      
      <p className="text-lg md:text-xl text-gray-300 mb-12">
        What Our Users Are Saying
      </p>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonialsData.map((item, index) => (
          
          <div key={index} className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700 flex flex-col items-center text-center transform hover:scale-105 transition duration-300 ease-in-out">
           
            <div className="flex flex-col items-center">
             
              <img src={item.image} alt={item.name} className='rounded-full w-14 h-14 object-cover mb-4 border-2 border-teal-500' />
              
              <h2 className="text-xl font-bold text-white mb-1">{item.name}</h2>
              
              <p className="text-sm text-gray-400 mb-4">{item.role}</p>
              
              <div className="flex items-center justify-center gap-1 mb-4">
                {
                  Array(item.stars).fill().map((_, starIndex) => (
                    
                    <img key={starIndex} src={assets.rating_star} alt="star" className="h-5 w-5" />
                  ))
                }
              </div>

              
              <p className="text-base text-gray-300 leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonial
