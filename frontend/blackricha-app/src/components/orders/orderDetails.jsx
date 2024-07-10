import React, { useContext, useEffect, useState } from "react";
import { getOrdersByUserId } from "../../api/ordersApi";
import { UserContext } from "../../context/userContext";


export default function OrderDetails() {

  const [orders, setorder] = useState();
  const { userData } = useContext(UserContext);
  const id = userData && userData.userId;
  console.log(id);
  useEffect(() => {
    const fetchOrderByUserId = async () => {
      try {
        if (id) {
          const orderData = await getOrdersByUserId(id);
          setorder(orderData)
        }
      } catch (error) {
        console.error('Error fetching order by user:', error);
      }
    };

    fetchOrderByUserId();
  }, [id]);
  console.log(orders);
  return (
    <div class="flex bg-white py-4 px-12 container mx-auto shadow-md rounded-xl bg-clip-border">
      <div class="relative flex flex-col text-gray-700  w-96 ">
        <nav class="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
          <div role="button"
            class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
            <div class="grid mr-4 place-items-center">
              <img alt="candice" src="https://docs.material-tailwind.com/img/face-1.jpg"
                class="relative inline-block h-12 w-12 !rounded-full  object-cover object-center" />
            </div>
            <div>
              <h6
                class="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                Tania Andrew
              </h6>
              <p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                Software Engineer @ Material Tailwind
              </p>
            </div>
          </div>
          <div role="button"
            class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
            <div class="grid mr-4 place-items-center">
              <img alt="alexander" src="https://docs.material-tailwind.com/img/face-2.jpg"
                class="relative inline-block h-12 w-12 !rounded-full  object-cover object-center" />
            </div>
            <div>
              <h6
                class="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                Alexander
              </h6>
              <p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                Backend Developer @ Material Tailwind
              </p>
            </div>
          </div>
          <div role="button"
            class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
            <div class="grid mr-4 place-items-center">
              <img alt="emma" src="https://docs.material-tailwind.com/img/face-3.jpg"
                class="relative inline-block h-12 w-12 !rounded-full  object-cover object-center" />
            </div>
            <div>
              <h6
                class="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                Emma Willever
              </h6>
              <p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                UI/UX Designer @ Material Tailwind
              </p>
            </div>
          </div>
        </nav>
      </div>
      <div class="relative flex flex-col text-gray-700  w-96 ">
        <nav class="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
          <div role="button"
            class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
            <div class="grid mr-4 place-items-center">
              <img alt="candice" src="https://docs.material-tailwind.com/img/face-1.jpg"
                class="relative inline-block h-12 w-12 !rounded-full  object-cover object-center" />
            </div>
            <div>
              <h6
                class="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                Tania Andrew
              </h6>
              <p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                Software Engineer @ Material Tailwind
              </p>
            </div>
          </div>
          <div role="button"
            class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
            <div class="grid mr-4 place-items-center">
              <img alt="alexander" src="https://docs.material-tailwind.com/img/face-2.jpg"
                class="relative inline-block h-12 w-12 !rounded-full  object-cover object-center" />
            </div>
            <div>
              <h6
                class="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                Alexander
              </h6>
              <p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                Backend Developer @ Material Tailwind
              </p>
            </div>
          </div>
          <div role="button"
            class="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
            <div class="grid mr-4 place-items-center">
              <img alt="emma" src="https://docs.material-tailwind.com/img/face-3.jpg"
                class="relative inline-block h-12 w-12 !rounded-full  object-cover object-center" />
            </div>
            <div>
              <h6
                class="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                Emma Willever
              </h6>
              <p class="block font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                UI/UX Designer @ Material Tailwind
              </p>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}