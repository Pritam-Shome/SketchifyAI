import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    
    <div className="py-10 px-4 bg-gray-900 border-t border-teal-600 flex flex-col items-center text-center">
      
      <img src={assets.logo} alt="AI Platform Logo" className="h-12 w-auto mb-6 filter brightness-150 saturate-150" />

      
      <p className="text-sm text-gray-400 mb-2">Copyright @PritamShome | All right reserved.</p>
      <p className="text-sm text-gray-400 mb-6">Made with ❤️ in India</p>

      
      <div className="flex items-center justify-center gap-6">
        
        <img src={assets.instagram_icon} alt="Instagram Icon" className="h-10 w-10 cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out filter invert hover:brightness-125" />
        <img src={assets.facebook_icon} alt="Facebook Icon" className="h-10 w-10 cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out filter invert hover:brightness-125" />
        <img src={assets.twitter_icon} alt="Twitter Icon" className="h-10 w-10 cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out filter invert hover:brightness-125" />
      </div>
    </div>
  )
}

export default Footer
