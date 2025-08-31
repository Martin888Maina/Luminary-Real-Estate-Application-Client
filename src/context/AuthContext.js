import React, { useState, useContext } from 'react';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider(props) {
  const storedToken = sessionStorage.getItem('access_token');
  const [accessToken, setAccessToken] = useState(storedToken);
  const [isLoggedIn, setIsLoggedIn] = useState(!!storedToken);
  const [redirectUrl, setRedirectUrl] = useState(null); // New state for redirect URL

  const updateAccessToken = (token) => {
    sessionStorage.setItem('access_token', token);
    setAccessToken(token);
    setIsLoggedIn(true);
    // console.log('Updated access token:', token);
  };

  const updateRedirectUrl = (url) => {
    setRedirectUrl(url); // Store redirect URL in state
    sessionStorage.setItem('redirect_url', url); // Optionally persist in sessionStorage
  };

  const clearRedirectUrl = () => {
    setRedirectUrl(null); // Clear the stored redirect URL
    sessionStorage.removeItem('redirect_url');
  };

  const value = {
    isLoggedIn,
    accessToken,
    updateAccessToken,
    setIsLoggedIn,
    redirectUrl,
    updateRedirectUrl, // Function to update the redirect URL
    clearRedirectUrl, // Function to clear the redirect URL
  };

  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  );
}
