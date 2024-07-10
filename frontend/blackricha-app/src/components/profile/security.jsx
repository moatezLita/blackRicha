import React from 'react';
import './profile.css'
import { getUserById, updateUser } from '../../api/usersApi';

import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { getOrdersByUserId } from '../../api/ordersApi';
import SideBar from './sideBar';
// import { PaperClipIcon } from '@heroicons/react/20/solid'


export default function SecutityComponent() {


  const [user, setuser] = useState([]);
  const [alert, setAlert] = useState({ type: '', message: '' });

  const [orders, setorder] = useState();


  const { userData } = useContext(UserContext);
  const id = userData && userData.userId;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    
  });
  // const role = userData&& userData.role;
  // console.log(id);


  // useEffect(() => {
  //   const fetchOrderByUserId = async () => {
  //     try {
  //       if (id) {
  //       const orderData = await getOrdersByUserId(id);
  //       setorder(orderData) }
  //     } catch (error) {
  //       console.error('Error fetching order by user:', error);
  //     }
  //   };

  //   fetchOrderByUserId();
  // }, [id]);


  useEffect(() => {
    const fetchuser = async () => {
      try {
        const userData = await getUserById(id);
        // console.log(userData);
        setFormData({
            email: userData.email,
            newEmail: '',
            password: userData.password,
            newPassword: ''
        });
        // setuser(userData);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchuser();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        console.log(formData);
        await updateUser(id, formData);
        setAlert({ type: 'success', message: 'information updated successfully!' });

        // Handle successful update
      } catch (error) {
        if (error.response) {
          if (error.response.status === 401) {
              setAlert({ type: 'error', message: 'Unauthorized. Please log in.' });
              setTimeout(() => {
                   navigate('/login');
              }, 1000);

          } else if (error.response.status === 403) {
          setAlert({ type: 'error', message: 'Forbidden. You do not have permission to edit this offer.' });
          setTimeout(() => {
              navigate('/unauthorized');
          }, 1000);  


          } else {
              setTimeout(() => {
                  setAlert({ type: 'error', message: 'An error occurred. Please try again.' });

              }, 1000);
          }
        } else {
          setAlert({ type: 'error', message: 'An error occurred. Please try again.' });

        }
      }
    };

    const handleCloseAlert = () => {
      setAlert({ type: '', message: '' });
  };
  // if (!orders || !user) {
  //   return <div>Loading...</div>;
  // }

  return (

    <div className=" pb-8 ">
      <div className='fixed  top-32 right-10 space-y-4 z-50'>
        {alert.type === 'success' && (
                    <div className="relative flex gap-2 items-center w-full p-4 mb-4 text-base leading-5 text-white bg-green-500 rounded-lg shadow-lg opacity-100 font-regular">
                        {alert.message}
                        <button
                            className='select-none rounded-lg py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:bg-white/10 active:bg-white/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
                            type="button"
                            onClick={handleCloseAlert}
                        >
                            Close
                        </button>
                    </div>
                )}
                {alert.type === 'error' && (
                    <div className="relative flex gap-2 items-center w-full p-4 mb-4 text-base leading-5 text-white bg-red-500 rounded-lg shadow-lg opacity-100 font-regular">
                        {alert.message}
                        <button
                            className='select-none rounded-lg py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:bg-white/10 active:bg-white/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
                            type="button"
                            onClick={handleCloseAlert}
                        >
                            Close
                        </button>
                    </div>
            )}
            </div>
      
      <div>

        <main>

          {/* 
          <div className="mx-auto mb-6 grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
            <div className="bg-gray-50 py-12 md:py-6 rounded-xl">
              <div className="mx-auto max-w-lg space-y-8 px-4 lg:px-8"> */}
          <div className="px-4 sm:px-0">

            <h3 className="ml-8 text-2xl font-semibold leading-7 text-gray-900">Personal Informations</h3>
            {/* <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">.</p> */}
          </div>

          <form onSubmit={handleSubmit}>

            <div className='mt-8 flex flex-col gap-4 items-center px-6'>
              <div className='flex gap-4 w-full'>
                <div className='flex flex-col gap-3 basis-1/2 '>
                <label className='self-start block text-base font-medium text-dark dark:text-white'>
                    Email
                  </label>
                  <input
                    type='text'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Current email'
                    className='w-full bg-transparent rounded-md border border-primary py-[10px] px-5 text-dark-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2'
                  />
                </div>

                <div className='flex flex-col gap-3 basis-1/2 '>
                  <label className='self-start block text-base font-medium text-dark dark:text-white'>
                    New Email
                  </label>
                  <input
                    type='text'
                    name='newEmail'
                    value={formData.newEmail}
                    onChange={handleChange}
                    placeholder='New email'
                    className='w-full bg-transparent rounded-md border border-primary py-[10px] px-5 text-dark-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2'
                  />
                </div>
              </div>

              <div className='flex gap-4 w-full mt-12'>
                <div className='flex flex-col gap-3 basis-1/2 '>
                  <label className='self-start block text-base font-medium text-dark dark:text-white'>
                    Password
                  </label>
                  <input
                    type='password'
                    name='password'
                    // value={formData.password}
                    onChange={handleChange}
                    placeholder='Current password'
                    className='w-full bg-transparent rounded-md border border-primary py-[10px] px-5 text-dark-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2'
                  />
                </div>

                <div className='flex flex-col gap-3 basis-1/2'>
                  <label className='self-start block text-base font-medium text-dark dark:text-white'>
                    New Password
                  </label>
                  <input
                    type='password'
                    name='newPassword'
                    value={formData.newPassword}
                    onChange={handleChange}
                    placeholder='New password'
                    className='w-full bg-transparent rounded-md border border-primary py-[10px] px-5 text-dark-5 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2'
                  />
                </div>
              </div>
              
              <button
                className="mt-12 block w-48 select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="submit">
                Save
              </button>
       
          </div>
           </form>
          <div className="bg-white py-12 md:py-2 ">
            <div className="mx-auto max-w-lg px-4 lg:px-8">

              {orders && orders.map((order) => (
                <div key={order.id} className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">Salary expectation</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{order.totalprice}</dd>
                </div>))
              }
            </div>
          </div>

          {/* </div> */}

        </main>
      </div>


    </div>
  )
}






