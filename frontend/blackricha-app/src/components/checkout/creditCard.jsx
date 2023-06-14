
import { useContext, useState } from 'react';

export default function CreditCard (){
const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
const [creditCardInfo, setCreditCardInfo] = useState({
    cardNumber: '',
    nameOnCard: '',
    expirationDate: '',
    cvc: '',
});
const handleCreditCardInputChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;

    if (name === 'cardNumber') {
        // Remove any non-digit characters from the card number
        updatedValue = value.replace(/\D/g, '');

        // Limit the card number to a specific length (e.g., 16 digits for Visa/Mastercard)
        const maxCardNumberLength = 16;
        updatedValue = updatedValue.slice(0, maxCardNumberLength);

        // Add hyphens (-) between every 4 digits
        const formattedCardNumber = updatedValue.match(/.{1,4}/g)?.join('-') || '';
        updatedValue = formattedCardNumber;
    }
    else if (name === 'cvc') {
        // Remove any non-digit characters from the CVC
        updatedValue = value.replace(/\D/g, '');

        // Limit the CVC to a specific length (e.g., 3 digits)
        const maxCvcLength = 3;
        updatedValue = updatedValue.slice(0, maxCvcLength);
    } else if (name === 'expirationDate') {
        // Remove any non-digit characters from the expiration date
        updatedValue = value.replace(/\D/g, '');

        // Add slashes (/) between month and year and ensure year has 4 digits
        if (updatedValue.length > 2) {
            const month = updatedValue.slice(0, 2);
            const year = updatedValue.slice(2, 6);
            updatedValue = `${month}/${year}`;
        }
    }

    setCreditCardInfo((prevInfo) => ({
        ...prevInfo,
        [name]: updatedValue,
    }));
};

const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
};


    return (
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
                                            checked={selectedPaymentMethod === 'CreditCard'}
                                            onChange={handlePaymentMethodChange}
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
                                            checked={selectedPaymentMethod === 'PayPal'}
                                            onChange={handlePaymentMethodChange}
                                        />
                                        <label htmlFor="PayPal"> PayPal</label>
                                    </div>



                                    {/* Credit card information */}
                                    <div>
                                        <label htmlFor="cardNumber" className="mt-3 block text-xs font-medium text-gray-700">Card Number:</label>
                                        <input type="text"
                                            id="cardNumber"
                                            name="cardNumber"
                                            placeholder="Card Number"
                                            value={creditCardInfo.cardNumber}
                                            onChange={handleCreditCardInputChange}
                                            className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                            required />
                                    </div>

                                    <div>
                                        <label htmlFor="nameOnCard" className="mt-3 block text-xs font-medium text-gray-700">Name on Card:</label>
                                        <input type="text"
                                            id="nameOnCard"
                                            name="nameOnCard"
                                            placeholder="Name on Card"
                                            value={creditCardInfo.nameOnCard}
                                            onChange={handleCreditCardInputChange}
                                            className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                        />
                                    </div>

                                    <div className='grid  grid-cols-2 gap-12  '>
                                        <div>
                                            <label htmlFor="expirationDate" className="mt-3 block text-xs font-medium text-gray-700">Expiration Date (MM/YY):</label>
                                            <input type="text"
                                                id="expirationDate"
                                                name="expirationDate"
                                                placeholder="Expiration Date"
                                                value={creditCardInfo.expirationDate}
                                                onChange={handleCreditCardInputChange}
                                                className="mt-1 w-250 rounded-md border-gray-200 shadow-sm sm:text-sm" />
                                        </div>

                                        <div>
                                            <label htmlFor="cvc" className=" mt-3 block text-xs font-medium text-gray-700">CVC:</label>
                                            <input type="text"
                                                id="cvc"
                                                name="cvc"
                                                placeholder="CVC"
                                                value={creditCardInfo.cvc}
                                                onChange={handleCreditCardInputChange}
                                                className="mt-1 w-150 rounded-md border-gray-200 shadow-sm sm:text-sm" />
                                        </div>
                                    </div>
                                </div>
    )

}