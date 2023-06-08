

import { ShoppingCartContext } from "../../context/CartContext";
import { useContext, useState } from 'react';
import { CheckoutContext } from "../../context/CheckoutContext";


const CheckoutCart = () => {

    const { cartItems, getCartTotalPrice } = useContext(ShoppingCartContext);
    // const shippingPrice = 4.99;
    const { state,  totalPrice } = useContext(CheckoutContext);
    // const userData = state.userData;
    // const totalPrice = state.totalPrice;

    return(
            <div >

            <div className="bg-gray-50 py-12 md:py-24">
                <div className="mx-auto max-w-lg space-y-8 px-4 lg:px-8">
                    <div className="flex items-center gap-4">
                        <span className="h-10 w-10 rounded-full bg-blue-700"></span>

                        <h2 className="font-medium text-gray-900">BambooYou</h2>
                    </div>

                    <div>
                        <p className="text-2xl font-medium tracking-tight text-gray-900">
                            ${totalPrice}
                        </p>

                        <p className="mt-1 text-sm text-gray-600">For the purchase of</p>
                    </div>

                    <div>
                        {cartItems.map((item) => (
                            <div className="flow-root">
                                <ul className="my-4 divide-y divide-gray-100 ">
                                    <li className="flex items-center gap-4 py-4">
                                        <img
                                            src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                                            alt=""
                                            className="h-32 w-32 rounded object-cover"
                                        />

                                        <div>
                                            <h3 className="text-lg text-gray-900">{item.name}</h3>

                                            <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                                                <div>
                                                    <dt className="inline">Size:</dt>
                                                    <dd className="inline">XXS</dd>
                                                </div>

                                                <div>
                                                    <dt className="inline">Color:</dt>
                                                    <dd className="inline">White</dd>
                                                </div>
                                            </dl>
                                        </div>
                                    </li>


                                </ul>
                            </div>))}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CheckoutCart;