// <!-- component -->
// <!-- Create By Joker Banny -->
// <style>
//     @layer utilities {
//     input[type="number"]::-webkit-inner-spin-button,
//     input[type="number"]::-webkit-outer-spin-button {
//       -webkit-appearance: none;
//       margin: 0;
//     }
//   }
// </style>
import React, { useState, useContext } from 'react';
import { ShoppingCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { CheckoutContext } from '../../context/CheckoutContext';

export default function Cart() {
    const { cartItems, addItemToCart, removeItemFromCart,DecrementQuantityItem, clearCart,getCartTotalQuantity ,getCartTotalPrice  } = useContext(ShoppingCartContext);
    const { setTotalPrice } = useContext(CheckoutContext);

    
    const tax = 4.99;
    const Total = (getCartTotalPrice() + tax).toFixed(2)
    // setTotalPrice(Total);

    
    const handleRemoveFromCart = (itemId) => {
        removeItemFromCart(itemId);
    };
    



    const [value, setValue] = useState(1); // Initial value

    const handleDecrement = (itemId) => {
        
        
            DecrementQuantityItem(
              itemId
              
            );
          };

    const handleIncrement = (itemId, itemQuantity) => {
       
        addItemToCart({
            
            id: itemId,
            quantity: itemQuantity + 1, // Increment the quantity by 1
            // Include other item properties if needed
          });

    };
    if (cartItems === null) {
    
            return (
              <div>
                 <p>buy something.</p>
                {/* Render any other components or messages for logged-in users */}
              </div>
            );
          }
    return (
        <div>
            
 
            <div class="mb-10 bg-gray-100 pt-20">
                <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1>
                <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                    
                    <div class="rounded-lg md:w-2/3">
                    {cartItems.map((item) => (
                        <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                            <img src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="product-image" class="w-full rounded-lg sm:w-40" />
                            <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                <div 
                                key={item.id} 
                                class="mt-5 sm:mt-0">
                                    <h2 class="text-lg font-bold text-gray-900">
                                        {item.name}
                                        </h2>
                                    <p class="mt-1 text-xs text-gray-700">{item.description}</p>
                                </div>
                                <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                    <div class="flex items-center border-gray-100">


                                        <span onClick={()=>handleDecrement(item.id)} class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>


                                        <input
                                            className="h-8 w-12 border  text-center text-xs outline-none"
                                            type="number"
                                            value={item.quantity}
                                            min="1"
                                            onChange={(e) => setValue(Number(e.target.value))}
                                        />


                                        <span onClick={()=>handleIncrement(item.id,item.quantity)} class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                                    </div>
                                    <div class="flex items-center space-x-4">
                                        <p class="text-sm">€{`${(item.price * item.quantity).toFixed(2)}`} </p>
                                        <svg 
                                        onClick={()=>handleRemoveFromCart(item.id)}
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        ))} 
                   
                    </div>
                    
                    {/* <!-- Sub total --> */}
                    <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                        <div class="mb-2 flex justify-between">
                            <p class="text-gray-700">Subtotal</p>
                            <p class="text-gray-700">€{getCartTotalPrice()} </p>
                        </div>
                        <div class="flex justify-between">
                            <p class="text-gray-700">tax</p>
                            <p class="text-gray-700">${tax.toFixed(2)}</p>
                        </div>
                        <hr class="my-4" />
                        <div class="flex justify-between">
                            <p class="text-lg font-bold">Total</p>
                            <div class="">
                                <p class="mb-1 text-lg font-bold">${Total}</p>
                                <p class="text-sm text-gray-700">including TVA</p>
                            </div>
                        </div>
                        <Link to ="/checkout">
                        <button onClick={()=>setTotalPrice(Total)} class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
                   </Link>
                    </div>
                </div> 
                <div className='flex justify-center'>
                            <button  onClick={clearCart} class="mt-6 w-30  rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Clear Cart</button>

                          </div>
            </div> 
              
        </div>

    )
}