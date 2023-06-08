import React, { createContext, useState, useEffect } from 'react';

const CheckoutContext = createContext();

const CheckoutProvider = ({ children }) => {
  const [contactInfo, setContactInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const [billingAddress, setBillingAddress] = useState({
    address: '',
    city: '',
    zipCode: '',
  });

  const [deliveryInfo, setDeliveryInfo] = useState({
    deliveryMethod: '',
    deliveryDate: '',
  });

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const storedContactInfo = localStorage.getItem('checkoutContactInfo');
    const storedBillingAddress = localStorage.getItem('checkoutBillingAddress');
    const storedDeliveryInfo = localStorage.getItem('checkoutDeliveryInfo');
    const storedTotalPrice = localStorage.getItem('checkoutTotalPrice');

    if (storedContactInfo) {
      setContactInfo(JSON.parse(storedContactInfo));
    }

    if (storedBillingAddress) {
      setBillingAddress(JSON.parse(storedBillingAddress));
    }

    if (storedDeliveryInfo) {
      setDeliveryInfo(JSON.parse(storedDeliveryInfo));
    }

    if (storedTotalPrice) {
      setTotalPrice(parseFloat(storedTotalPrice));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('checkoutContactInfo', JSON.stringify(contactInfo));
    localStorage.setItem('checkoutBillingAddress', JSON.stringify(billingAddress));
    localStorage.setItem('checkoutDeliveryInfo', JSON.stringify(deliveryInfo));
    localStorage.setItem('checkoutTotalPrice', totalPrice.toString());
  }, [contactInfo, billingAddress, deliveryInfo, totalPrice]);

  return (
    <CheckoutContext.Provider
      value={{
        contactInfo,
        setContactInfo,
        billingAddress,
        setBillingAddress,
        deliveryInfo,
        setDeliveryInfo,
        totalPrice,
        setTotalPrice,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};

export { CheckoutContext, CheckoutProvider };
