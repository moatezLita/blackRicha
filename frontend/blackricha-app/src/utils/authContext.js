// auth/AuthContext.js
import { createContext, useState } from 'react';
import { login } from '../api/authApi';


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // State to hold the token
    const [token, setToken] = useState(null);
  
    // Login function
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
        setToken(token);
      } catch (error) {
        throw new Error('Failed to log in');
      }
    };
  
    // Logout function
    const handleLogout = () => {
      setToken(null);
    };
  
    // Check if the user is authenticated
    const isAuthenticated = () => {
      return token !== null;
    };
  
    // Provide the context values to the components
    const authContextValues = {
      token,
      login: handleLogin,
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
