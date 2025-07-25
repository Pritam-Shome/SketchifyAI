import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import {AppContext} from '../context/AppContext.jsx'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {
  const [state, setState] = useState('Login');
  const { setShowLogin, backendUrl, setToken,setUser} = useContext(AppContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (state === 'Login') {
        const { data } = await axios.post(backendUrl + '/api/user/login', { email, password });
        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem('token', data.token);
          setShowLogin(false);
        } else {
          toast.error(data.message || 'Login failed');
        }
      } else {
        const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password });
        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem('token', data.token);
          setShowLogin(false);
        } else {
          toast.error(data.message || 'Signup failed');
        }
      }
    } catch (err) {
      toast.error(
        err.response?.data?.message ||
        err.message ||
        'Login failed'
      );
    }
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    }
  },[])


  return (
    
    <div className='fixed absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex items-center justify-center '>
      
      <form onSubmit={onSubmitHandler} action="" className="bg-gray-900 p-8 md:p-10 rounded-xl shadow-2xl w-full max-w-md flex flex-col gap-6 border border-teal-600 relative">
        
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 drop-shadow-lg">{state}</h1>
       
        <p className="text-base text-gray-300 mb-4">Welcome back! Please sign in to continue</p>
        
        {state !=='Login'&&
          <div className="flex items-center gap-3 bg-gray-800 rounded-lg px-4 py-3 border border-gray-700 shadow-inner">
            <img src={assets.profile_icon} alt="Profile Icon" className="h-5 w-5 filter brightness-200 drop-shadow-sm" />
            <input onChange={e => setName(e.target.value)} value={name} type="text" placeholder='Full Name' className="flex-grow bg-transparent text-white placeholder-gray-500 focus:outline-none focus:ring-0" />
          </div>
        }

        <div className="flex items-center gap-3 bg-gray-800 rounded-lg px-4 py-3 border border-gray-700 shadow-inner">
          <img src={assets.email_icon} alt="Email Icon" className="h-5 w-5 filter brightness-200 drop-shadow-sm" />
          <input onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder='Email id' className="flex-grow bg-transparent text-white placeholder-gray-500 focus:outline-none focus:ring-0" />
        </div>

        <div className="flex items-center gap-3 bg-gray-800 rounded-lg px-4 py-3 border border-gray-700 shadow-inner">
          <img src={assets.lock_icon} alt="Lock Icon" className="h-5 w-5 filter brightness-200 drop-shadow-sm" />
          <input onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder='Password' className="flex-grow bg-transparent text-white placeholder-gray-500 focus:outline-none focus:ring-0" />
        </div>

        
        <p className="text-sm text-teal-400 hover:text-teal-300 cursor-pointer text-right">Forgot password? </p>

       
        <button className="px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold rounded-full shadow-lg hover:from-teal-600 hover:to-blue-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-75 hover:shadow-xl">
          {state==='Login' ? 'login' : 'create account'}
        </button>

        {state==='Login'
          ?
          <p className="text-sm text-gray-400 mt-4">Don't have an account? <span onClick={()=>setState('Sign Up')} className="text-teal-400 hover:text-teal-300 cursor-pointer font-semibold">Sign Up</span></p>
          :
          <p className="text-sm text-gray-400 mt-4">Already have an account? <span onClick={()=>setState('Login')} className="text-teal-400 hover:text-teal-300 cursor-pointer font-semibold">Login</span></p>
        }
        
        <img src={assets.cross_icon} alt="Close" onClick={()=>setShowLogin(false)} className='absolute top-5 right-5 cursor-pointer h-6 w-6 text-gray-400 hover:text-red-500 transition duration-200'/>
      </form>
    </div>
  )
}

export default Login;
