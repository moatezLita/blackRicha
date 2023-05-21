import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ShoppingCart from '../components/ShoppingCart';

// This is just an example. You'd fetch these from your API or local storage.
const cartItems = [{
    product: {
        id: 1,
        name: "Product 1",
        price: "19.99"
    },
    quantity: 2
}];

const CartPage = () => {
    return (
        <>
            <Header />
            <ShoppingCart cartItems={cartItems} />
            <Footer />
        </>
    );
}

export default CartPage;
