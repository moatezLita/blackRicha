import React from 'react';
import ShoppingCart from '../components/shoppingCart/ShoppingCart';

// This is just an example. You'd fetch these from your API or local storage.
// const cartItems = [{
//     product: {
//         id: 1,
//         name: "Product 1",
//         price: "19.99"
//     },
//     quantity: 2
// }];

const CartPage = () => {
    return (
        <>
            <ShoppingCart />
        </>
    );
}

export default CartPage;
