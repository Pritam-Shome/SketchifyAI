import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [credit, setCredit] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;   
  const navigate = useNavigate();
  
  const loadCreditData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/credits`, {headers:{token}})
      if (data.success) {
        setCredit(data.credits);
        setUser(data.user);
      } else {
        toast.error(data.message || 'Failed to load credits');
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
      
    }
  }

  const generateImage = async (prompt) => {
    try {
      const { data } = await axios.post(`${backendUrl}/api/image/generate-image`, { prompt }, { headers: { token } });
      if (data.success) {
        loadCreditData();
        return data.resultImage;
      }
    } catch (error) {
      // Try to get backend error details
      const backendData = error.response?.data;
      if (backendData?.creditBalance === 0) {
        toast.error('You have no credits left to generate images.');
        // Remove or comment out the redirect:
        // navigate('/buy');
      } else if (backendData?.message) {
        toast.error(backendData.message);
      } else {
        toast.error(error.message);
      }
      loadCreditData();
    }
  }

  const logout=() => {
    localStorage.removeItem('token');
    setToken('');
    setUser(null);
  }

  useEffect(() => {
    if (token) {
      loadCreditData();
    }
  }, [token]);

  const value = {
    user: user,
    setUser: setUser,
    showLogin: showLogin,
    setShowLogin: setShowLogin,
    backendUrl: backendUrl,
    token: token,
    setToken: setToken,
    credit: credit,
    setCredit: setCredit,
    loadCreditData: loadCreditData,
    logout: logout,
    generateImage: generateImage,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;