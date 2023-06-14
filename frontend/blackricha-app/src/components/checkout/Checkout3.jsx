import { useContext, useState } from 'react';

import CheckoutCart from "./CheckoutCart"
import PersonalInfoCheckout from "./personalInfoCheckout"
import { useNavigate } from 'react-router-dom';
import AlertOk from '../common/alertOk';
import AlertNotOk from '../common/alertNotOk';
import CreditCard from './creditCard';
import { createOrder } from '../../api/ordersApi';
import { UserContext } from '../../context/userContext';
import { ShoppingCartContext } from '../../context/CartContext';
import { CheckoutContext } from '../../context/CheckoutContext';


export default function Checkout3() {
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
    const [paymentStatus, setPaymentStatus] = useState(null);




    const { userData } = useContext(UserContext);
    const id = userData && userData.userId;

   const { setTotalPrice, totalPrice } = useContext(CheckoutContext);


    const [orderData, setOrderData]= useState({
        "quantity": 1,
        "totalprice": parseFloat(totalPrice),
        "status": "processing",
        "UserId":parseInt(id),
        "ProductId":4
    })

    


    //hanDle option : cash payment or credit card
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    }
    const navigate = useNavigate();




    const handleSubmit = async (e) => {
        e.preventDefault();


        
try{
        await createOrder (orderData);


        try {
            if (selectedOption === 'OnlinePayment') {
                // Logic for processing cash payment
                console.log('Processing cash payment...');
                setPaymentStatus('comingsoon');
            }

            else if (selectedOption === 'CashPayment') {
                setPaymentStatus('success');
                navigate("/order");
            }

            else {
                // Display an error or show a message that payment method is not selected
                console.log('Payment method not selected.');
                setPaymentStatus('error');
            }

        } catch (error) {
            console.error('payment failed:', error);
            setPaymentStatus('error');
            // Handle any errors
            // ...
        }}
        catch (error) {
            console.error('there is a problem', error);}
    };






    return (
        <div>
            <section>
                <h1 className="sr-only">Paiment</h1>
                <div className="mx-auto grid max-w-screen-2xl grid-cols-2 md:grid-cols-2">
                    <div className="grid grid-rows-3 grid-flow-col gap-4 mb-12 ">
                        <div className="row-span-2 col-span-2"><CheckoutCart /></div>
                        <div className="col-span-2 "><PersonalInfoCheckout /> </div>
                    </div>

                    <div className="bg-white py-12 md:py-2">

                        <div className="mx-auto max-w-lg px-4 lg:px-8">
                        {paymentStatus === 'success' && (
        <AlertOk message="Paiement réussi"
        description="Votre achat a été effectué avec succès"
      />
      )}
      {paymentStatus === 'error' && (
        <AlertNotOk message="Paiement échoué"
        description="Une erreur s'est produite lors du traitement de votre paiement"
      />
    )}
    {paymentStatus === 'comingsoon' && (
        <AlertNotOk message="Prochainement disponible"
        description=""
      />
    )}
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
                                        <p className="text-gray-900">Paiement en espèce </p>
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
                                        className="flex cursor-pointer justify-between items-center  rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
                                    >
                                        {selectedOption === 'OnlinePayment' && (
                                            <div className="flex  items-center gap-2">
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
                                                <p className="text-gray-700">Coming soon</p>
                                            </div>
                                        )}
                                        <p className="text-gray-900">Paiement par carte bancaire</p>
                                    </label>
                                </div>
                            </fieldset>


                            {selectedOption === 'OnlinePayment' && (
                               <CreditCard></CreditCard>
                             
                            )}


                            {selectedOption === 'CashPayment' && (
                                <div className='mt-6'>
                                    {/* Online payment methods */}
                                    <p>Paiement en espèce à la livraisons</p>

                                </div>
                            )}
                            <div className='mt-4'>



        
                                <button
                                     onClick={handleSubmit}
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