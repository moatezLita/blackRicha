import { useContext, useState } from 'react';

import CheckoutCart from "./CheckoutCart"
import PersonalInfoCheckout from "./personalInfoCheckout"

export default function Checkout3() {
    const [selectedOption, setSelectedOption] = useState('');


    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    }



    return (
        <div>
            <section>
                <h1 className="sr-only">Checkout</h1>
                <div className="mx-auto grid max-w-screen-2xl grid-cols-2 md:grid-cols-2">
                    <div className="grid grid-rows-3 grid-flow-col gap-4 mb-12 ">
                        <div className="row-span-2 col-span-2"><CheckoutCart /></div>
                         <div className="col-span-2 "><PersonalInfoCheckout /> </div>
                    </div>

                    <div className="bg-white py-12 md:py-2">
                        
                        <div className="mx-auto max-w-lg px-4 lg:px-8">
                        <div className="text-xl font-light mb-2">Paiment </div>
                            <fieldset className="space-y-4">
                                <legend className="sr-only">Mode de paiement</legend>

                                <div>
                                    <input
                                        type="radio"
                                        name="DeliveryOption"
                                        value="CashPayment"
                                        id="CashPayment"
                                        className="peer hidden [&:checked_+_label_svg]:block"
                                        checked={selectedOption === 'CashPayment'}
                                            onChange={handleOptionChange} 
                                    />

                                    <label
                                        htmlFor="CashPayment"
                                        className="flex cursor-pointer items-center  rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
                                    >
                                        {selectedOption === 'CashPayment' && (
                                        <div className="flex items-center gap-2">
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

                                            {/* <p className="text-gray-700">Paiement en espèce à la livraisons</p> */}
                                        </div>
                                        )}
                                        <p className="text-gray-900">Paiement en espèce à la livraisons</p>
                                    </label>
                                </div>

                                <div>
                                    <input
                                        type="radio"
                                        name="DeliveryOption"
                                        value="OnlinePayment"
                                        id="OnlinePayment"
                                        
                                        
                                        className="peer hidden [&:checked_+_label_svg]:block"
                                        checked={selectedOption === 'OnlinePayment'}
                                            onChange={handleOptionChange}
                                    />

                                    <label
                                        htmlFor="OnlinePayment"
                                        className="flex cursor-pointer items-center  rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
                                    >
                                        {selectedOption === 'OnlinePayment' && (
                                        <div className="flex items-center gap-2">
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
                                            {/* <p className="text-gray-700">Next Day</p> */}
                                        </div>
)}
                                        <p className="text-gray-900">Paiement par carte bancaire</p>
                                    </label>
                                </div>
                            </fieldset>
                            {selectedOption === 'OnlinePayment' && (
        <div className='mt-6 '>
          {/* Online payment methods */}
          <p>Online Payment Methods:</p>
          <div >
            {/* Credit Card */}
            <input
              type="radio"
              name="paymentMethod"
              value="CreditCard"
              id="CreditCard"
              className='mt-1'
            />
            <label htmlFor="CreditCard"> Credit Card</label>
          </div>

          <div>
            {/* PayPal */}
            <input
              type="radio"
              name="paymentMethod"
              value="PayPal"
              id="PayPal"
              className='mt-1'
            />
            <label htmlFor="PayPal"> PayPal</label>
          </div>

          

          {/* Credit card information */}
          <div>
            <label htmlFor="cardNumber"className="mt-3 block text-xs font-medium text-gray-700">Card Number:</label>
            <input type="text" id="cardNumber" name="cardNumber"
            placeholder="First Name"
            className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
            required />
          </div>

          <div>
            <label htmlFor="nameOnCard"className="mt-3 block text-xs font-medium text-gray-700">Name on Card:</label>
            <input type="text" id="nameOnCard" name="nameOnCard" placeholder="First Name"
            className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
            />
          </div>

          <div className='grid  grid-cols-2 gap-12  '>
          <div>
            <label htmlFor="expirationDate"className="mt-3 block text-xs font-medium text-gray-700">Expiration Date (MM/YY):</label>
            <input type="text" id="expirationDate" name="expirationDate" placeholder="First Name"
            className="mt-1 w-250 rounded-md border-gray-200 shadow-sm sm:text-sm"/>
          </div>

          <div>
            <label htmlFor="cvc"className=" mt-3 block text-xs font-medium text-gray-700">CVC:</label>
            <input type="text" id="cvc" name="cvc" placeholder="First Name"
            className="mt-1 w-150 rounded-md border-gray-200 shadow-sm sm:text-sm"/>
          </div>
          </div>
        </div>
      )}


      {selectedOption === 'CashPayment' && (
        <div className='mt-6'>
          {/* Online payment methods */}
          <p>Online Payment Methods:</p>
          
        </div>
      )}
      <div className='mt-4'>
<button
                                    // onClick={handleNextButtonClick}
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
        </div>)
}