import React from 'react';
import './profile.css'
import { getUserById } from '../../api/usersApi';

import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { getOrdersByUserId } from '../../api/ordersApi';



export default function ProfileComponent() {


  const [user, setuser] = useState([]);

const [orders, setorder]= useState();


const { userData } = useContext(UserContext);
  const id = userData && userData.userId;
console.log(id);
useEffect(() => {
  const fetchOrderByUserId = async () => {
    try {
      const orderData = await getOrdersByUserId(id);
      setorder(orderData)
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  fetchOrderByUserId();
}, []);


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
if (!orders || !user) {
  return <div>Loading...</div>;
}

  return (




    // User profile data
    
      <div>
        <h1 >Mon compte</h1>
        <div className='user information mb-10' key={user.id}>
          <h1>{user.username}</h1>
          <p>
            {user.email}
          </p>
        </div>
        <div>
          {orders.map((order)=>
          <div key={order.id} className='orders'>
<Link to="/order">
          
          <h1>
            Order History
          </h1>
          <p>
            {order.totalprice}
            {order.status}
          </p>

          </Link>
          </div>
        )}

        </div>

      </div>

      
  );
};



