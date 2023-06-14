import React from 'react';
import { useState } from 'react';
import'./App.css';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import UserProfilePage from './pages/UserProfilePage';
import ProductListPage from './pages/productPage/ProductListPage';
import SearchPage from './pages/searchPage.jsx'
import { BrowserRouter as Router, Route, Routes,Navigate ,Outlet  } from 'react-router-dom';
import OrderPage from './pages/orderDetails';
import ProductDetailsPage from './pages/productPage/ProductDetailsPage';
import Header from './components/header/Header';
import Footer from './components/common/Footer'
import LoginPage from './pages/loginPage';
import SignupPage from './pages/signupPage';
import CategoryPage from './pages/CategoryPage';
import { useContext } from 'react';
import { AuthContext } from './context/authContext';
import CheckoutPage from './pages/CheckoutPage';
import ErrorNotFound from './pages/specificPages/ErrorNotFound'
import ContactUs from './pages/specificPages/ContactUs';
const App = () => {
  // const Navigate = useNavigate();
  const { isAuthenticated} = useContext(AuthContext);

  const PrivateWrapper = () => {
  
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
  };

  function PrivateRoute({ children }) {
    

    return isAuthenticated ()? <>{children}</> : <Navigate to="/login" />;
  }
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
        <Route path="/cart" element={
        <PrivateRoute><CartPage/></PrivateRoute>} />
        
        <Route path="/products" element={<ProductListPage/>} />
        {/* <Route path="/search" element={<searchPage/>} /> */}
        <Route path="/products/:id" element={<ProductDetailsPage/>}/>


        {/* <Route path="/userprofile/:id" element={<UserProfilePage/>}/> */}

        {/* <Route path="/userprofile" element={<PrivateWrapper />}>
        <Route path="/userprofile/:id" element={<UserProfilePage />} />
        </Route> */}

        <Route
          path="/account"
          element={
            <PrivateRoute>
              <UserProfilePage />
            </PrivateRoute>
          }
        /> 
        
        <Route path="/order" 
        element = 
          {<PrivateRoute>
              <OrderPage/>  
            </PrivateRoute>}/>


        {/* <Route path="/search" element= {<SearchPage/>}/> */}
        <Route path="/category/:categoryId" element={<CategoryPage/>} />
<Route path="/checkout/*" element= {
  <PrivateRoute>
    <CheckoutPage/>
  </PrivateRoute>}/>

        {/* test routes that i may change later */}
        <Route path="/login" element= {<LoginPage />}/>
        <Route path="/signup" element={<SignupPage/>}/>
        
        {/* Other routes goes here */}

        <Route path="/contact" element={<ContactUs/>}          />

        
        <Route path="*" element={<ErrorNotFound/>} />

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
