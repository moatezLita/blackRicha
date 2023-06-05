import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './context/authContext';
import { UserProvider } from './context/userContext';
import { ShoppingCartProvider } from './context/CartContext';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './tailwind.css'; // if you have installed Tailwind

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ShoppingCartProvider>
    <UserProvider>
      <AuthProvider>
        <Router>
          <App />
        </Router>
      </AuthProvider>
    </UserProvider>
  </ShoppingCartProvider>

  ,
);
