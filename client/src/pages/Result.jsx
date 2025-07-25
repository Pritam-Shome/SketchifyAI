import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext.jsx'
import { useContext } from 'react'

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageloading, setIsImageLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');

  const {generateImage} = useContext(AppContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    if(input){
      const image= await generateImage(input);
      if(image){

      setIsImageLoading(true);
      setImage(image);
    }
    }
    setLoading(false);

    
  }

  return (
    <form onSubmit={onSubmitHandler} action="" className="flex flex-col items-center p-4 md:p-8 max-w-3xl mx-auto min-h-[calc(100vh-100px)] bg-gray-950 text-white">
      {/* Image display area */}
      <div className='relative w-full aspect-square bg-gray-800 rounded-xl shadow-xl border border-teal-700 overflow-hidden mb-8'>
        <img src={image} alt="Generated Image" className={`w-full h-full object-cover ${loading ? 'filter blur-sm' : ''}`} />
        {/* Loading bar */}
        <span className={`absolute bottom-0 left-0 h-1 bg-teal-500 ${loading ? 'w-full transition-all duration-[10s] ease-in-out' : 'w-0 '}`} />
      </div>

      {/* "Loading......" text */}
      <p className={`text-xl font-semibold text-teal-400 mb-8 ${!loading ? 'hidden' : ''}`}>
        Loading......
      </p>

      {
        !isImageloading &&
        <div className="flex flex-col md:flex-row w-full gap-4 mb-8">
          <input
            onClick={e => setInput(e.target.value)}
            onChange={e => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder='Describe what you want to generate'
            className='flex-grow p-3 rounded-lg border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500'
          />
          <button
            type='submit'
            className='px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold rounded-lg shadow-md hover:from-teal-600 hover:to-blue-700 transition duration-300 ease-in-out'
          >
            Generate
          </button>
        </div>
      }

      {
        isImageloading &&
        <div className="flex flex-col md:flex-row gap-4">
          <p
            onClick={() => { setIsImageLoading(false) }}
            className="cursor-pointer text-teal-400 hover:text-teal-300 font-semibold transition duration-200 px-4 py-2 bg-gray-800 rounded-lg border border-gray-700"
          >
            Generate Another
          </p>
          <a
            href={image}
            download="generated-image.png"
            className='px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg shadow-md hover:from-blue-600 hover:to-purple-700 transition duration-300 ease-in-out'
          >
            Download
          </a>
        </div>
      }
    </form>
  )
}

export default Result
