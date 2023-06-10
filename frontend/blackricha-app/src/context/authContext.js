// auth/AuthContext.js
import { createContext, useState } from 'react';
import { login, register } from '../api/authApi';


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // State to hold the token
    const [token, setToken] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const expiryTime = new Date().getTime() + 3600000;
    // Login function
    const handleSignup = async (username,email,password)=>{
      try{
    const credential = {
          username: username,
          email: email,
          password: password,
        };  
        const response = await register(credential);
        const token = response.token;
        const tokenData= {token: token,
        expiresAt: expiryTime,
      };
        // setToken(token);
        localStorage.setItem('token', JSON.stringify(tokenData));
        setIsLoggedIn(true);


}
catch(error){
  throw new Error('Failed to log in');
}

    }
    const handleLogin = async (email, password) => {
      try {
        const credential = {
          email: email,
          password: password,
        };
        
  
        const response = await login(credential); // Use the login function from authApi.js
        // console.log(response);
        // Assuming the response contains a token
        const token = response.token;
        const tokenData= {token: token,
        expiresAt: expiryTime,
      };
        // setToken(token);
        localStorage.setItem('token', JSON.stringify(tokenData));
        setIsLoggedIn(true);
      } catch (error) {
        throw new Error('Failed to log in');
      }
    };
  
    // Logout function
    const handleLogout = () => {
        // if (isAuthenticated()) {
            // Clear the token or perform any necessary cleanup
            // setToken(null);
            localStorage.removeItem('token');
            setIsLoggedIn(false);
        //   }
    };
  
    // Check if the user is authenticated
    const isAuthenticated = () => {
        const tokenDataString = localStorage.getItem('token');
  if (tokenDataString) {
    const tokenData = JSON.parse(tokenDataString);
    const currentTime = new Date().getTime();

    if (currentTime > tokenData.expiresAt) {
      // Token has expired, remove it from local storage
      localStorage.removeItem('token');
      return false;
    } else {
      // Token is still valid
      return tokenDataString !== null;   
    }
  }
      return tokenDataString !== null;        
    };
  
    // Provide the context values to the components
    const authContextValues = {
      token,
      login: handleLogin,
      signup: handleSignup,
      logout: handleLogout,
      isAuthenticated: isAuthenticated,
    };
  
    return (
      <AuthContext.Provider value={authContextValues}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export default AuthProvider;

export { AuthContext, AuthProvider };
