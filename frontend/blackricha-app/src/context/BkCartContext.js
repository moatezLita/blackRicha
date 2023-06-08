import React, { createContext, useReducer, useEffect } from 'react';

export const ShoppingCartContext = createContext();
const CART_STORAGE_KEY = 'cartItems';

// Define the reducer function to handle state updates based on actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existingItem = state.cartItems.find((cartItem) => cartItem.id === action.payload.item.id);
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.id === action.payload.item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload.item, quantity: 1 }],
        };
      }
    case 'REMOVE_ITEM':
      return {
        ...state,
        cartItems: state.cartItems.filter((cartItem) => cartItem.id !== action.payload.itemId),
      };
    case 'DECREMENT_QUANTITY':
      const existingCartItem = state.cartItems.find((cartItem) => cartItem.id === action.payload.itemId);
      if (existingCartItem) {
        if (existingCartItem.quantity > 1) {
          return {
            ...state,
            cartItems: state.cartItems.map((cartItem) =>
              cartItem.id === action.payload.itemId
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
            ),
          };
        } else {
          return {
            ...state,
            cartItems: state.cartItems.filter((cartItem) => cartItem.id !== action.payload.itemId),
          };
        }
      }
      return state;
    case 'CLEAR_CART':
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export const ShoppingCartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { cartItems: [] });

  useEffect(() => {
    const getCartItems = () => {
      const storedCartItemsData = JSON.parse(localStorage.getItem(CART_STORAGE_KEY));
      if (storedCartItemsData && storedCartItemsData.expiresAt > Date.now()) {
        dispatch({ type: 'SET_CART_ITEMS', payload: storedCartItemsData.cartItems });
      } else {
        dispatch({ type: 'CLEAR_CART' });
        localStorage.removeItem(CART_STORAGE_KEY);
      }
    };

    getCartItems();
  }, []);

  useEffect(() => {
    const expirationTime = new Date().getTime() + 24 * 60 * 60 * 1000;
    const cartItemsData = {
      cartItems: state.cartItems,
      expiresAt: expirationTime,
    };
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItemsData));
  }, [state.cartItems]);

  const addItemToCart = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: { item } });
  };

  const removeItemFromCart = (itemId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { itemId } });
  };

  const decrementQuantityItem = (itemId) => {
    dispatch({ type: 'DECREMENT_QUANTITY', payload: { itemId } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const getCartTotalQuantity = () => {
    return state.cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getCartTotalPrice = () => {
    return state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems: state.cartItems,
        addItemToCart,
        removeItemFromCart,
        decrementQuantityItem,
        clearCart,
        getCartTotalQuantity,
        getCartTotalPrice,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
