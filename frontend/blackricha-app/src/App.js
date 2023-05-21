import React from 'react';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import UserProfilePage from './pages/UserProfilePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} exact />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/userprofile" element={<UserProfilePage/>}></Route>
        
        {/* Other routes go here */}
      </Routes>
    </Router>
  );
}
export default App;
