import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext.jsx'


const Header = () => {
  const navigate= useNavigate();
  const {user,setShowLogin} = React.useContext(AppContext);
  const onClickHandler = () => {
    if(user){
      navigate('/result');
    }
    else{
      setShowLogin(true);
    }
  }
  return (
    
    <div className="flex flex-col items-center py-16 px-4 max-w-4xl mx-auto text-center">
    
      <div>
        <p className="inline-flex items-center gap-2 bg-gray-800 rounded-full px-4 py-1 mb-4 text-sm font-semibold text-teal-400 shadow-md">
          Best text to image generator
          <img src={assets.star_icon} alt="Star Icon" className="h-4 w-4" />
        </p>
      </div>

      
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-white">
        Turn text to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">image</span>, in seconds.
      </h1>

      
      <p className="text-lg text-gray-300 mb-10 max-w-2xl">
        Unleash your creativity with AI. Turn your imagination into visual art
        in seconds with our advanced text-to-image generator.
      </p>

      
      <button onClick={onClickHandler} className="flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold text-lg rounded-full shadow-lg hover:from-teal-600 hover:to-blue-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-75 mb-12">
        Generate Images
        <img src={assets.star_group} alt="Star Group Icon" className="h-6 w-6" />
      </button>

      
      <div className="flex justify-center flex-wrap gap-4 mb-4">
        {
          Array(6).fill('').map((item, index) => (
            <img
              src={index % 2 === 0 ? assets.sample_img_1 : assets.sample_img_2}
              alt={`Sample Image ${index + 1}`}
              key={index}
              width={80} // Explicit width for consistent sizing
              className="w-20 h-20 object-cover rounded-lg shadow-lg border border-gray-700 transform hover:scale-110 transition duration-300 ease-in-out"
            />
          ))
        }
      </div>

      
      <p className="text-sm text-gray-400">
        Generated images from imagify
      </p>
    </div>
  )
}

export default Header
