import React, { createContext, useState, useEffect } from 'react';



export const ShoppingCartContext = createContext();
const CART_STORAGE_KEY = 'cartItems';
export const ShoppingCartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    // const [isCartCleared, setIsCartCleared] = useState(false);

    useEffect(() => {
      // Function to get the cart items from local storage
      const getCartItems = () => {
        const storedCartItemsData = JSON.parse(localStorage.getItem('cartItems'));
        if (storedCartItemsData && storedCartItemsData.expiresAt > Date.now()) {
          setCartItems(storedCartItemsData.cartItems);
        } else {
          setCartItems([]);
          localStorage.removeItem('cartItems');
        }
      };
  
      getCartItems();
    }, []);
  
    useEffect(() => {
      const setCartItems=()=>{
      const expirationTime = new Date().getTime() + 24 * 60 * 60 * 1000;
  
      const cartItemsData = {
        cartItems: cartItems,
        expiresAt: expirationTime,
      };
  
      localStorage.setItem('cartItems', JSON.stringify(cartItemsData));
    }
  
    setCartItems();  
    }, [cartItems]);


    // Function to add an item to the cart
//     function addItemToCart(item) {
//         // Check if item already exists in cart
//         const existingItemIndex = cartItems.find((cartItem) => cartItem.id === item.id);


//         if (existingItemIndex !== -1) {
//           // Item already exists, update its quantity instead of adding new one
//           const updatedItems = cartItems.map((cartItem, index) =>
//       index === existingItemIndex
//         ? { ...cartItem, quantity: cartItem.quantity + 1 }
//         : cartItem
//     );
//     setCartItems(updatedItems);
//   } else {
//     // Item doesn't exist yet, add it to the cart as new item with a default quantity of 1
//     setCartItems([...cartItems, { ...item, quantity: 1 }]);
//   }
//       }






const addItemToCart = (item) => {
  setCartItems((prevItems) => {
    // Check if prevItems is an array
    const itemsArray = Array.isArray(prevItems) ? prevItems : [];

    // Check if the cart is being cleared
    const isCartCleared = itemsArray.length === 0;

    // Check if the item already exists in the cart
    const existingItem = itemsArray.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      // Item already exists, update the quantity
      const updatedItems = itemsArray.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });

      return updatedItems;
    }

    // Item does not exist, add it to the cart
    return [...itemsArray, { ...item, quantity: 1 }];
  });
};


// const addItemToCart = (productId) => {
//   setCartItems((prevCart) => {
//     return [...prevCart, { id: productId, quantity: 1 }];
//   });
// };
// const addItemToCart = (product) => {
//   const existingItem = cartItems.find((item) => item.id === product.id);

//   if (existingItem) {
//     // If item already exists, update the quantity
//     const updatedCartItems = cartItems.map((item) => {
//       if (item.id === product.id) {
//         return { ...item, quantity: item.quantity + parseInt(product.quantity, 10) };
//       }
//       return item;
//     });

//     setCartItems(updatedCartItems);
//   } else {
//     // If item doesn't exist, add it to the cart
//     setCartItems([...cartItems, product]);
//   }
// };




      
    // Function to remove an item from the cart
    const removeItemFromCart = (itemId) => {
        setCartItems((prevItems) => {
          // Check if prevItems is an array
          const itemsArray = Array.isArray(prevItems) ? prevItems : [];
      
          // Filter out the item with the specified ID
          const updatedItems = itemsArray.filter((cartItem) => cartItem.id !== itemId);
      
          return updatedItems;
        });
      };

      const DecrementQuantityItem = (itemId) => {
        setCartItems((prevItems) => {
          // Check if prevItems is an array
          const itemsArray = Array.isArray(prevItems) ? prevItems : [];
      
          // Find the item with the specified ID
          const existingItem = itemsArray.find((cartItem) => cartItem.id === itemId);
      
          if (existingItem) {
            if (existingItem.quantity > 1) {
              // Decrement the quantity of the existing item
              const updatedItems = itemsArray.map((cartItem) => {
                if (cartItem.id === itemId) {
                  return { ...cartItem, quantity: cartItem.quantity - 1 };
                }
                return cartItem;
              });
      
              return updatedItems;
            } else {
              // Remove the item from the cart if the quantity is 1
              const updatedItems = itemsArray.filter((cartItem) => cartItem.id !== itemId);
              return updatedItems;
            }
          }
          
          // Item does not exist, return the original items
          return itemsArray;
        });
      };
      

    // Function to clear the cart
    const clearCart = () => {
      
        // localStorage.clear()
        setCartItems([])
        localStorage.removeItem('cartItems');
        
          
          // 
          // setIsCartCleared(true);

  
        

    };
    // Function to get the total quantity of items in the cart
    const getCartTotalQuantity = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    // Function to get the total price of items in the cart
    const getCartTotalPrice = () => {
      const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
      return totalPrice;
    };

    return (
        <ShoppingCartContext.Provider
            value={{
                cartItems,
                addItemToCart,
                removeItemFromCart,
                DecrementQuantityItem,
                clearCart,
                getCartTotalQuantity,
                getCartTotalPrice,
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    );
};
