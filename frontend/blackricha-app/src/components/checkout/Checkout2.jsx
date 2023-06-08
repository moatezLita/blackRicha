import CheckoutCart from "./CheckoutCart"
import { CheckoutContext } from "../../context/CheckoutContext";
import { useContext, useState } from 'react';
import { Link } from "react-router-dom";


export default function Checkout2() {


    const { state, contactInfo,  deliveryInfo, totalPrice } = useContext(CheckoutContext);
    // const userData = state.userData;
    // const billingAddress = state.billingAddress;
    // const deliveryInfo = state.deliveryInfo;
    // const totalPrice = state.totalPrice;
//  console.log(userData)
const firstName = contactInfo.firstName;
const lastName = contactInfo.lastName;
const email = contactInfo.email;
const phone = contactInfo.phone;


const address = deliveryInfo.address;
const city = deliveryInfo.city;
const zipcode = deliveryInfo.zipCode;


return (
        <div>
            <section>
                <h1 className="sr-only">Checkout</h1>

                <div className="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
                    <CheckoutCart />

                <div className="bg-white py-12 md:py-24">
                    <div className="mx-auto max-w-lg px-4 lg:px-8">


                        <div class="mt-5 bg-white shadow cursor-pointer rounded-xl">
                            <div class="flex">
                                <div class="flex-1 py-5 pl-5 overflow-hidden">
                                    <ul>
                                        <span className="text-gray-600 uppercase">
                                            Contact Informations
                                        </span>
                                        <li class="mt-3 text-xs text-gray-600 uppercase "></li>
                                        <li>{firstName}</li>
                                        <li>{email}</li>
                                        <li>{phone}</li>
                                    </ul>
                                </div>
                                <div class="flex-1 py-5 pl-1 overflow-hidden ">
                                    <ul>
                                        <span className="text-gray-600 uppercase">
                                        Delivery Informations
                                        </span>
                                        <li class="mt-3 text-xs text-gray-600 uppercase"></li>
                                        <li>{address}</li>
                                        <li>{city}</li>
                                        <li>{zipcode}</li>
                                    </ul>
                                </div>
                                <div class="flex-none pt-2.5 pr-2.5 pl-1">
                  <Link to = "/checkout">
                  <button 
                  type="button" 
                  class="px-2 py-2 font-medium tracking-wide text-black capitalize transition duration-300 ease-in-out transform rounded-xl hover:bg-gray-300 focus:outline-none active:scale-95">
                     <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                        <path d="M0 0h24v24H0V0z" fill="none"></path>
                        <path d="M5 18.08V19h.92l9.06-9.06-.92-.92z" opacity=".3"></path>
                        <path d="M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19z"></path>
                     </svg>
                  </button>
                  </Link>
               </div>
                            </div>
                        </div>


</div>
                    </div>
                </div>
            </section>
        </div>
    )
}