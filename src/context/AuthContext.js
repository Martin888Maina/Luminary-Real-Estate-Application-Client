import React, { useState, useContext } from 'react';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider(props) {
  const storedToken = sessionStorage.getItem('access_token');
  const [accessToken, setAccessToken] = useState(storedToken);
  const [isLoggedIn, setIsLoggedIn] = useState(!!storedToken);

  const updateAccessToken = (token) => {
    sessionStorage.setItem('access_token', token);
    setAccessToken(token);
    setIsLoggedIn(true);
    console.log('Updated access token:', token);
  };

  const value = {
    isLoggedIn,
    accessToken,
    updateAccessToken, // Provide a function to update the access token
    setIsLoggedIn,
  };

  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  );
}





