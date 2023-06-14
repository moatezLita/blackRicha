import { createContext, useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      const decodedToken = jwt_decode(token);
      const userId = decodedToken.id;
      const email = decodedToken.email;
      const role = decodedToken.role;

      setUser({ userId, email,role });
    }
  }, []);

  return (
    <UserContext.Provider value={{  userData, setUser }}>
      {children}
    </UserContext.Provider>
  );
};