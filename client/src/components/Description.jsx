import React from 'react'
import { assets } from '../assets/assets'

const Description = () => {
  return (
    
    <div className="py-16 px-4 max-w-7xl mx-auto text-center">
      
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-white text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Create AI Images
      </h1>

      
      <p className="text-lg md:text-xl text-gray-300 mb-12">
        Turn your imagination into visuals
      </p>

      
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
        
        <div className="flex-1 rounded-xl overflow-hidden shadow-2xl border border-gray-700">
          <img
            src={assets.sample_img_1}
            alt="Sample AI Image"
            
            className="w-full h-auto object-cover"
          />
        </div>

        
        <div className="flex-1 text-left p-6 md:p-8 bg-gray-800 rounded-xl shadow-lg border border-gray-700">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Introducing the AI-Powered Text to Image
              <br />
              Generator
            </h1>
          </div>
          <div>
            <p className="text-base md:text-lg text-gray-300 mb-4 leading-relaxed">
              Easily bring your ideas to life with our free AI image generator. Whether you need stunning visuals or unique imagery, our tool transforms your text into eye-catching images with just a few clicks. Imagine it, describe it, and watch it come to life instantly.
            </p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Simply type in a text prompt, and our cutting-edge AI will generate high-quality images in seconds. From product visuals to character designs and portraits, even concepts that don't yet exist can be visualized effortlessly. Powered by advanced AI technology, the creative possibilities are limitless.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Description;
