import Breadcrumb from "../components/breadcrumb";
import {  Routes, Route, useMatch, Navigate, useMatches, useLocation  } from 'react-router-dom';

import Checkout2 from "../components/checkout/Checkout2"
import Checkout3 from "../components/checkout/Checkout3"
import Checkout1 from "../components/checkout/Checkout1"
import { useEffect } from "react";

const CheckoutPage = () => {

    let location = useLocation();

    // location={location}
    // const path= location
    // console.log(path.pathname);
    // useEffect(()=>{

    //     return path = location
    // },[location])
    // console.log(path);
    useEffect(() => {

    }, [location]);
    const crumbs = [
        // { label: 'Home', path: '/' },
        // { label: 'Category', path: '/category' },
        // { label: 'Product', path: '/category/product' },
        // { label: 'Current Page' },
        
        { label: 'Information', path: "/checkout" },
  { label: 'Delivery', path: "/checkout/delivery"},
  { label: 'Payment', path: "/checkout/payment" },
    ];

    return (
        <div>
            <Breadcrumb crumbs={crumbs} />

            <div>
            <Routes location={location}>
        <Route path="/" element={<Checkout1 />} />
        <Route path="/delivery" element={<Checkout2 />} />
        <Route path="/payment" element={<Checkout3 />} />
      </Routes>
            </div>

        </div>
    )
}
export default CheckoutPage