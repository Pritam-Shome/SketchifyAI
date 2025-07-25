import React from 'react';
import { stepsData } from '../assets/assets';

const Steps = () => {
  return (
    
    <div className="py-16 px-4 max-w-6xl mx-auto text-center">
      

      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-white text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
        How it works
      </h1>

      
      <p className="text-lg md:text-xl text-gray-300 mb-12">
        Transform Words Into Stunning Images
      </p>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {stepsData.map((item, index) => (
          
          <div key={index} className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center border border-gray-700 transform hover:scale-105 transition duration-300 ease-in-out">
            
            <img src={item.icon} alt={item.title} className="h-20 w-20 mb-4 filter brightness-125 saturate-150" />
            
            <div>
              
              <h2>{item.title}</h2>
              
              <p className="text-base text-gray-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
