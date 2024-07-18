import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './context/authContext';
import { UserProvider } from './context/userContext';
import { ShoppingCartProvider } from './context/CartContext';
import { CheckoutProvider } from './context/CheckoutContext';


// import 'bootstrap/dist/css/bootstrap.min.css';
// import './tailwind.css'; // if you have installed Tailwind

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <CheckoutProvider>
  <ShoppingCartProvider>
    <UserProvider>
      <AuthProvider>
          <App />
      </AuthProvider>
    </UserProvider>
  </ShoppingCartProvider>
</CheckoutProvider>

  ,
);
