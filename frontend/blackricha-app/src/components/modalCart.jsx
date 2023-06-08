import {  useState } from 'react'
import Cart from './shoppingCart/cart'
import ProductDetails from './product/ProductDetails'

export default function ModalCart ({ onClose }){

    const [open, setOpen] = useState(true)


    return (
        <div>
<section onClose={setOpen}

 className="z-9999 fixed inset-20  items-center justify-center  p-6 bg-white  "
 style={{}}>
  {/* <Cart/> */}
  <ProductDetails/>
</section></div>
    )
}
