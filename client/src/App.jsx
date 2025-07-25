import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Home from './pages/Homes.jsx';
import Result from './pages/Result.jsx';
import BuyCredit from './pages/BuyCredit.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Login from './components/Login.jsx';
import {AppContext} from './context/AppContext.jsx'

export const App = () => {

  const { showLogin } = React.useContext(AppContext);
  return (
    
    <div className='min-h-screen bg-gray-950 text-white flex flex-col'>
     
      <ToastContainer position="bottom-right" autoClose={4000} />
      <Navbar/>
      {showLogin &&<Login />}

      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
          {/* <Route path="/buy" element={<BuyCredit />} /> */}
        </Routes>
      </main>

       <Footer />
    </div>
  );
};

export default App;
