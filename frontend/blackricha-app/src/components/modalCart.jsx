import { useState } from 'react'
import Cart from './shoppingCart/cart'
import ProductDetails from './product/ProductDetails'
import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
// import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { useParams  } from 'react-router-dom';


export default function ModalCart({ SetOpen }) {
    const   { id } = useParams();

    const [open, setOpen] = useState(true)

  const cancelButtonRef = useRef(null)

    return (
//         <div>
//             <section onClick={() => SetOpen(false)}

//                 className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none
//  fixed inset-20  items-center justify-center  p-6 bg-white  "
 
//                 style={{display: 'block', padding: 30}}>
//                     <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
//                 {/* <Cart/> */}
//                 <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
            
//                   <ProductDetails />
//                 </div>  </div>
//             </section></div>
<Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className=" mt-20 fixed inset-0 z-50 overflow-y-auto">
          <div className="flex  justify-center p-6 text-center items-center j">
<div className='border-10 rounded-lg shadow-lg relative flex flex-col w-full bg-white '>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-visible rounded-lg bg-white text-left shadow-xl transition-all  sm:w-full ">
                <ProductDetails id={id}/>
              </Dialog.Panel>
            </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
    )
}
