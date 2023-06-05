import React from 'react';
import { useState } from 'react';
import'./App.css';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import UserProfilePage from './pages/UserProfilePage';
import ProductListPage from './pages/productPage/ProductListPage';
import SearchPage from './pages/searchPage.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OrderPage from './pages/orderDetails';
import ProductDetailsPage from './pages/productPage/ProductDetailsPage';
import Header from './components/header/Header';
import Footer from './components/common/Footer'
import LoginPage from './pages/loginPage';
import SignupPage from './pages/signupPage';
import CategoryPage from './pages/CategoryPage';



const App = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
    <div>

        <Header />
      
      {/* i added the router to the index.js */}
    {/* <Router  */}
    <main>
    {/* <Router> */}
      <Routes>
        <Route path="/" element={<HomePage/>} exact />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/userprofile/:id" element={<UserProfilePage/>}/>
        <Route path="/products" element={<ProductListPage/>} />
        {/* <Route path="/search" element={<searchPage/>} /> */}
        <Route path="/products/:id" element={<ProductDetailsPage/>}/>
        <Route path="/order" element = {<OrderPage/>}></Route>
        <Route path="/search" element= {<SearchPage/>}/>
        <Route path="/category/:categoryId" element={<CategoryPage/>}/>


        {/* test routes that i may change later */}
        <Route path="/login" element= {<LoginPage />}/>
        <Route path="/signup" element={<SignupPage/>}/>
        {/* use links instead of path */}
        
        {/* Other routes go here */}
      </Routes>
    {/* </Router> */}
    </main>
    
      <footer>
      <Footer />
      </footer>
    </div>
    </>
  );
}
export default App;
