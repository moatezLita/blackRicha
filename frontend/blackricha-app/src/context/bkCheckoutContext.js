import React, { useEffect, useReducer } from 'react';

// Define the initial state
const initialState = {
  userData: {},
//   billingAddress: {},
  deliveryInfo: {},
  totalPrice: 0,
};

// Define the reducer
const checkoutReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CONTACT_INFO':
      return {
        ...state,
        userData: {
          ...state.userData,
          ...action.payload,
        },
      };
    // case 'SET_BILLING_ADDRESS':
    //   return { ...state, billingAddress: action.payload };
    case 'SET_DELIVERY_INFO':
      return { ...state, deliveryInfo: action.payload };
    case 'SET_TOTAL_PRICE':
      return { ...state, totalPrice: action.payload };
    case 'RESET_CHECKOUT':
      return initialState;
    default:
      return state;
  }
};

// Create the CheckoutContext
export const CheckoutContext = React.createContext();

// Create the CheckoutProvider
export const CheckoutProvider = ({ children }) => {
  const [state, dispatch] = useReducer(checkoutReducer, initialState);

  // Load initial state from local storage
  useEffect(() => {
    const storedState = localStorage.getItem('checkoutState');
    if (storedState) {
      dispatch({ type: 'LOAD_CHECKOUT_STATE', payload: JSON.parse(storedState) });
    }
  }, []);

  // Save state to local storage when it changes
  useEffect(() => {
    localStorage.setItem('checkoutState', JSON.stringify(state));
  }, [state]);

  const setContactInfo = (contactInfo) => {
    dispatch({ type: 'SET_CONTACT_INFO', payload: contactInfo });
  };

//   const setBillingAddress = (billingAddress) => {
//     dispatch({ type: 'SET_BILLING_ADDRESS', payload: billingAddress });
//   };

  const setDeliveryInfo = (deliveryInfo) => {
    dispatch({ type: 'SET_DELIVERY_INFO', payload: deliveryInfo });
  };

  const setTotalPrice = (totalPrice) => {
    dispatch({ type: 'SET_TOTAL_PRICE', payload: totalPrice });
  };

  const resetCheckout = () => {
    dispatch({ type: 'RESET_CHECKOUT' });
  };

  const checkoutContextValue = {
    state,
    setContactInfo,
    // setBillingAddress,
    setDeliveryInfo,
    setTotalPrice,
    resetCheckout,
  };

  return (
    <CheckoutContext.Provider value={checkoutContextValue}>
      {children}
    </CheckoutContext.Provider>
  );
};