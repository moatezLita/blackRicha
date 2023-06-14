import { updateUser } from "../../api/usersApi";
import { ShoppingCartContext } from "../../context/CartContext";
import { useContext, useState,useEffect } from 'react';
import { UserContext } from '../../context/userContext';
import CheckoutCart from "./CheckoutCart";
import Breadcrumb from "../breadcrumb";
import { CheckoutContext } from "../../context/CheckoutContext";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

{/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

export default function Checkout1 () {

    const { cartItems ,getCartTotalPrice} = useContext(ShoppingCartContext);
    const { setContactInfo,setDeliveryInfo } = useContext(CheckoutContext);
    const [formValid, setFormValid] = useState(false);

    
    // const {userData}=useContext(UserContext)
    
    // console.log(userData)
    // const shippingPrice = 4.99;
    const { userData } = useContext(UserContext);
    const id = userData && userData.userId;
  // console.log(id)
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zipCode: '',
      }); 
      
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value
        }));
      };

      const contactData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone
      };
      
      const deliveryData = {
        address: formData.address,
        city: formData.city,
        zipCode: formData.zipCode
      };

      const setDataToLocal =()=>{
        setContactInfo(contactData);
        setDeliveryInfo(deliveryData);

      }


      const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          
        
        await updateUser(id, { contactData, deliveryData });
        navigate ("/checkout/delivery");
          // Reset the form
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            zipCode: ''
          });

        } catch (error) {
            console.error('Failed to update user:', error);
          // Handle any errors
          // ...
        }
      };

      
    //   useEffect(() => {
    //     // Check if all required fields are filled
    //     const isFormValid = Object.values(formData).every((field) => field.trim() !== '');
    //     setFormValid(isFormValid);
    //   }, [formData]);
    return (
        
<div>
<section>
  <h1 className="sr-only">Checkout</h1>
  

  <div className="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
    
    <CheckoutCart/>
    {/* <div className="bg-gray-50 py-12 md:py-24">
      <div className="mx-auto max-w-lg space-y-8 px-4 lg:px-8">
        <div className="flex items-center gap-4">
          <span className="h-10 w-10 rounded-full bg-blue-700"></span>

          <h2 className="font-medium text-gray-900">BambooYou</h2>
        </div>

        <div>
          <p className="text-2xl font-medium tracking-tight text-gray-900">
          ${(getCartTotalPrice() + shippingPrice).toFixed(2)}
          </p>

          <p className="mt-1 text-sm text-gray-600">For the purchase of</p>
        </div>

        <div>
        {cartItems.map((item) => (
          <div className="flow-root">
            <ul className="my-4 divide-y divide-gray-100 ">
              <li className="flex items-center gap-4 py-4">
                <img
                  src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                  alt=""
                  className="h-32 w-32 rounded object-cover"
                />

                <div>
                  <h3 className="text-lg text-gray-900">{item.name}</h3>

                  <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                    <div>
                      <dt className="inline">Size:</dt>
                      <dd className="inline">XXS</dd>
                    </div>

                    <div>
                      <dt className="inline">Color:</dt>
                      <dd className="inline">White</dd>
                    </div>
                  </dl>
                </div>
              </li>

              
            </ul>
          </div>))} 
        </div>
      </div>
    </div> */}

    <div className="bg-white py-12 md:py-2">
      <div className="mx-auto max-w-lg px-4 lg:px-8">
        <form onSubmit={handleSubmit} className="grid grid-cols-6 gap-4">
          <div className="col-span-3">
            <label
              htmlFor="FirstName"
              className="block text-xs font-medium text-gray-700"
            >
              First Name
            </label>

            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="First Name"
              className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
              required
            />
          </div>

          <div className="col-span-3">
            <label
              htmlFor="LastName"
              className="block text-xs font-medium text-gray-700"
            >
              Last Name
            </label>

            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="last Name"
              className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
              required
            />
          </div>

          <div className="col-span-6">
            <label htmlFor="Email" className="block text-xs font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="email"
              className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
              required
            />
          </div>

          <div className="col-span-6">
            <label htmlFor="Phone" className="block text-xs font-medium text-gray-700">
              Phone
            </label>

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="tel"
              className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
              required
            />
          </div>

          {/* <fieldset className="col-span-6">
            <legend className="block text-sm font-medium text-gray-700">
              Card Details
            </legend>

            <div className="mt-1 -space-y-px rounded-md bg-white shadow-sm">
              <div>
                <label htmlFor="CardNumber" className="sr-only"> Card Number </label>

                <input
                  type="text"
                  id="CardNumber"
                  placeholder="Card Number"
                  className="relative mt-1 w-full rounded-t-md border-gray-200 focus:z-10 sm:text-sm"
                />
              </div>

              <div className="flex">
                <div className="flex-1">
                  <label htmlFor="CardExpiry" className="sr-only"> Card Expiry </label>

                  <input
                    type="text"
                    id="CardExpiry"
                    placeholder="Expiry Date"
                    className="relative w-full rounded-es-md border-gray-200 focus:z-10 sm:text-sm"
                  />
                </div>

                <div className="-ms-px flex-1">
                  <label htmlFor="CardCVC" className="sr-only"> Card CVC </label>

                  <input
                    type="text"
                    id="CardCVC"
                    placeholder="CVC"
                    className="relative w-full rounded-ee-md border-gray-200 focus:z-10 sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </fieldset> */}

          <fieldset className="col-span-6">
            <legend className="block text-sm font-medium text-gray-700">
              Billing Address
            </legend>

            <div className="mt-1 -space-y-px rounded-md bg-white shadow-sm">
            <div>
                <label htmlFor="address" className="sr-only"> adderss </label>

                <input
                  type="text"
                  name="address"
                  value={formData.address}
                onChange={handleInputChange}
                  placeholder="adderss"
                  className="mb-3 relative mt-1 w-full rounded-t-md border-gray-200 focus:z-10 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="City" className="sr-only"> Cité </label>

                <input
                  type="text"
                  name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="cité"
                  className="mb-3 relative mt-1 w-full rounded-t-md border-gray-200 focus:z-10 sm:text-sm"
                  required
                />
              </div>
              {/* <div>
                <label htmlFor="Country" className="sr-only">Country</label>

                <select
                  id="Country"
                  className="mb-3 relative w-full rounded-md border-gray-200 focus:z-10 sm:text-sm"
                >
                  <option>Paris</option>
                  <option>Wales</option>
                  <option>Scotland</option>
                  <option>France</option>
                  <option>Belgium</option>
                  <option>Japan</option>
                </select>
              </div> */}

              <div>
                <label className="sr-only" htmlFor="PostalCode"> ZIP/Post Code </label>

                <input
                  type="text"
                  name="zipCode"
              value={formData.zipCode}
              onChange={handleInputChange}
                  placeholder="ZIP/Post Code"
                  className="relative w-full rounded-b-md border-gray-200 focus:z-10 sm:text-sm"
                  required
                />
              </div>
            </div>
          </fieldset>

          <div className="col-span-6">
            <button
              onClick={setDataToLocal}
              type="submit"
              className="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg"
            >
              Pay Now
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
</div>
    );
}

