import React from 'react';
import './profile.css'
import { getUserById } from '../../api/usersApi';

import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { getOrdersByUserId } from '../../api/ordersApi';
import { PaperClipIcon } from '@heroicons/react/20/solid'


export default function ProfileComponent() {


  const [user, setuser] = useState([]);

const [orders, setorder]= useState();


const { userData } = useContext(UserContext);
  const id = userData && userData.userId;
  // const role = userData&& userData.role;
  // console.log(id);


useEffect(() => {
  const fetchOrderByUserId = async () => {
    try {
      if (id) {
      const orderData = await getOrdersByUserId(id);
      setorder(orderData) }
    } catch (error) {
      console.error('Error fetching order by user:', error);
    }
  };

  fetchOrderByUserId();
}, [id]);


useEffect(() => {
  const fetchuser = async () => {
    try {
      const userData = await getUserById(id);
      setuser(userData);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  fetchuser();
}, [id]);



// if (!orders || !user) {
//   return <div>Loading...</div>;
// }

  return (
    


  <div className="mx-auto mb-6 grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
    <div className="bg-gray-50 py-12 md:py-6 rounded-xl">
          <div className="mx-auto max-w-lg space-y-8 px-4 lg:px-8">
          <div className="px-4 sm:px-0">

            <h3 className="text-base font-semibold leading-7 text-gray-900">Applicant Information</h3>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p>
          </div>
          <div className="mt-6 border-t border-gray-100">
            
              
            <dl  className="divide-y divide-gray-100">
              
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user.username}</dd>
              </div>
              
              
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{user.email}</dd>
              </div>
              
              
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">eeeee</dd>
              </div>
              
              
              
              
            </dl>
          </div></div></div>
          <div className="bg-white py-12 md:py-2 ">
          <div className="mx-auto max-w-lg px-4 lg:px-8">    
          
                {orders && orders.map((order)=>(
              <div key={order.id} className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Salary expectation</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{order.totalprice}</dd>
              </div>))
              }
          </div>
          </div>

        </div>
      )
    }
    



    // User profile data
    
//       <div>
//         <h1 >Mon compte</h1>
//         <div className='user information mb-10' key={user.id}>
//           <h1>{user.username}</h1>
//           <p>
//             {user.email}
//           </p>
//         </div>
//         <div>
//           {orders.map((order)=>
//           <div key={order.id} className='orders'>
// <Link to="/order">
          
//           <h1>
//             Order History
//           </h1>
//           <p>
//             {order.totalprice}
//             {order.status}
//           </p>

//           </Link>
//           </div>
//         )}

//         </div>

//       </div>

      
 


