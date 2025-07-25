import React,{useContext} from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext.jsx'

const GenerateBtn = () => {

  const navigate= useNavigate();
    const {user,setShowLogin} = useContext(AppContext);
    const onClickHandler = () => {
      if(user){
        navigate('/result');
      }
      else{
        setShowLogin(true);
        
      }
    }
  return (
    
    <div className="py-16 px-4 max-w-4xl mx-auto flex flex-col items-center">
      
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-8 text-white text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center">
        See the magic. Try now
      </h1>

      
      <button onClick={onClickHandler} className="flex items-center justify-center gap-3 px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold text-lg rounded-full shadow-lg hover:from-teal-600 hover:to-blue-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-75">
        Generate Images
        <img src={assets.star_group} alt="Star Group Icon" className="h-6 w-6" />
      </button>
    </div>
  )
}

export default GenerateBtn
