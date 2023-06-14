import CheckoutCart from "./CheckoutCart"
import { CheckoutContext } from "../../context/CheckoutContext";
import { useContext, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import PersonalInfoCheckout from "./personalInfoCheckout";


export default function Checkout2() {


    const { state, contactInfo, deliveryInfo,setDeliveryInfo,setTotalPrice, totalPrice } = useContext(CheckoutContext);

    const [selectedOption, setSelectedOption] = useState('Shipped');
    const navigate = useNavigate();

    const shippingPrice = 10
    const Total = (parseFloat(totalPrice) + shippingPrice)


  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);}
   

    const handleNextButtonClick = () => {
        const updatedDeliveryInfo = {
          ...deliveryInfo,
          deliveryMethod: selectedOption,
        };
        setTotalPrice (Total)
        setDeliveryInfo(updatedDeliveryInfo);
        navigate ("/checkout/payment");
        // localStorage.setItem('deliveryInfo', JSON.stringify(updatedDeliveryInfo));
      };


    return (
        <div>
            <section>
                <h1 className="sr-only">Checkout</h1>

                <div className="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
                    <CheckoutCart />

                    <div className="bg-white py-12 md:py-2">
                        <div className="mx-auto max-w-lg px-4 lg:px-8">

                            <PersonalInfoCheckout></PersonalInfoCheckout>
                            {/* <div class="mt-5 bg-white shadow cursor-pointer rounded-xl">
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
                                        <Link to="/checkout">
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
                            </div> */}






                            <div className="mt-12">
                            <div className="text-xl font-light mb-2">Mode de livraison</div>

                                <fieldset className="grid grid-cols-2 gap-4">
                                    <legend className="sr-only">Delivery</legend>
                                    
                                    <div>
                                        <input
                                            type="radio"
                                            name="DeliveryOption"
                                            value="Shipped"
                                            id="Shipped"
                                            className="peer hidden [&:checked_+_label_svg]:block"
                                            checked={selectedOption === 'Shipped'}
                                            onChange={handleOptionChange}     
                                            required                                   />

                                        <label
                                            htmlFor="Shipped"
                                            className="block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
                                        >
                                            <div className="flex items-center justify-between">
                                                <p className="text-gray-700">Expédier</p>
                                                {selectedOption === 'Shipped' && (

                                                <svg
                                                    className=" h-5 w-5 text-blue-600"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                            )}

                                            </div>

                                            <p className="mt-1 text-gray-900">{shippingPrice}</p>
                                        </label>
                                    </div>

                                    <div>
                                        <input
                                            type="radio"
                                            name="DeliveryOption"
                                            value="PickedUp"
                                            id="PickedUp"
                                            className="peer hidden [&:checked_+_label_svg]:block"
                                            checked={selectedOption === 'PickedUp'}
                                            onChange={handleOptionChange}
                                            required
                                        />

                                        <label
                                            htmlFor="PickedUp"
                                            className="block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
                                        >
                                            <div className="flex items-center justify-between">
                                                <p className="text-gray-700">Récupérer</p>
                                                {selectedOption === 'PickedUp' && (
                                                <svg
                                                    className=" h-5 w-5 text-blue-600"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                 )}
                                            </div>

                                            <p className="mt-1 text-gray-900">free</p>
                                        </label>
                                    </div>
                                </fieldset>
                            </div>
                            <div className="mt-12">
                                <button
                                    onClick={handleNextButtonClick}
                                    type="submit"
                                    className="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg"
                                >
                                    Pay Now
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}