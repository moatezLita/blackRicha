// import { ShoppingCartContext } from '../../context/CartContext';
// import { CheckoutContext } from '../../context/CheckoutContext';


// import React, { Fragment, useState,useContext } from 'react'
// import { Dialog, Transition } from '@headlessui/react'
// // import { XMarkIcon } from '@heroicons/react/24/outline'
// import { Link } from 'react-router-dom'


// export default function ShoppingCart() {
//   const [open, setOpen] = useState(true)

  

//   const { cartItems, addItemToCart, removeItemFromCart,DecrementQuantityItem, clearCart,getCartTotalQuantity ,getCartTotalPrice  } = useContext(ShoppingCartContext);
//   const { setTotalPrice } = useContext(CheckoutContext);

  

//   const shippingPrice = 4.99;
//     const Total = (getCartTotalPrice() + shippingPrice).toFixed(2)
    

//     const handleRemoveFromCart = (itemId) => {
//       removeItemFromCart(itemId);
//   };
//   const [value, setValue] = useState(1);


//   const handleDecrement = (itemId) => {
        
        
//     DecrementQuantityItem(
//       itemId
      
//     );
//   };

// const handleIncrement = (itemId, itemQuantity) => {

// addItemToCart({
    
//     id: itemId,
//     quantity: itemQuantity + 1, // Increment the quantity by 1
//     // Include other item properties if needed
//   });
// };






//   return (
//     <Transition.Root show={open} as={Fragment}>
//       <Dialog as="div" className="relative z-10 " onClose={setOpen}>
//         <Transition.Child
//           as={Fragment}
//           enter="ease-in-out duration-500"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="ease-in-out duration-500"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
//         </Transition.Child>

//         <div className="relative inset-0 overflow-hidden">
//           <div className="absolute inset-0 overflow-hidden">
//             <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
//               <Transition.Child
//                 as={Fragment}
//                 enter="transform transition ease-in-out duration-500 sm:duration-700"
//                 enterFrom="translate-x-full"
//                 enterTo="translate-x-0"
//                 leave="transform transition ease-in-out duration-500 sm:duration-700"
//                 leaveFrom="translate-x-0"
//                 leaveTo="translate-x-full"
//               >
//                 <Dialog.Panel className="pointer-events-auto w-screen max-w-md relative top-[90px] overflow-y-auto max-h-[calc(100vh-80px)]">
//                   <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
//                     <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
//                       <div className="flex items-start justify-between">
//                         <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
//                         <div className="ml-3 flex h-7 items-center">
//                           <button
//                             type="button"
//                             className="-m-2 p-2 text-gray-400 hover:text-gray-500"
//                             onClick={() => setOpen(false)}
//                           >
//                             <span className="sr-only">Close panel</span>
//                             {/* <XMarkIcon className="h-6 w-6" aria-hidden="true" /> */}
//                           </button>
//                         </div>
//                       </div>

//                       <div className="mt-8">
//                         <div className="flow-root">
//                           <ul role="list" className="-my-6 divide-y divide-gray-200">
//                             {cartItems.map((product) => (
//                               <li key={product.id} className="flex py-6">
//                                 <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
//                                   <img
//                                     // src={product.imageSrc}
//                                     // alt={product.imageAlt}
//                                     className="h-full w-full object-cover object-center"
//                                   />
//                                 </div>

//                                 <div className="ml-4 flex flex-1 flex-col">
//                                   <div>
//                                     <div className="flex justify-between text-base font-medium text-gray-900">
//                                       <h3>
//                                         <a href={product.href}>{product.name}</a>
//                                       </h3>
//                                       <p className="ml-4">{product.price}</p>
//                                     </div>
//                                     <p className="mt-1 text-sm text-gray-500">{product.color}</p>
//                                   </div>
//                                   <div className="flex flex-1 items-end justify-between text-sm">
//                                     <p className="text-gray-500">Qty {product.quantity}</p>

//                                     <div className="flex">
//                                       <button
//                                       onClick={()=>handleRemoveFromCart(product.id)}
//                                         type="button"
//                                         className="font-medium text-indigo-600 hover:text-indigo-500"
//                                       >
//                                         Remove
//                                       </button>
//                                     </div>
//                                   </div>
//                                 </div>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
//                       <div className="flex justify-between text-base font-medium text-gray-900">
//                         <p>Subtotal</p>
//                         <p>€{getCartTotalPrice()}</p>
//                       </div>
//                       {/* <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p> */}
//                       <div className="mt-6">
//                         <Link
//                           to="/cart"
//                           className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
//                         >
//                           Checkout
//                         </Link>
//                       </div>
//                       <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
//                         <p>
//                           or
//                           <button
//                             type="button"
//                             className="font-medium text-indigo-600 hover:text-indigo-500"
//                             onClick={() => setOpen(false)}
//                           >
//                             Continue Shopping
//                             <span aria-hidden="true"> &rarr;</span>
//                           </button>
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </Dialog.Panel>
//               </Transition.Child>
//             </div>
//           </div>
//         </div>
//       </Dialog>
//     </Transition.Root>
//   )
// }
