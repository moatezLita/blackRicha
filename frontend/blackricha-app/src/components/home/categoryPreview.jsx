
import { Link } from 'react-router-dom';
import { getAllCategories } from '../../api/categoriesApi';
import React, { useState, useEffect } from 'react';

const CategoryPreview = () => {
  //   const [categories, setCategories]= useState([])
  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     try {
  //       const categoriesData = await getAllCategories();
  //       setCategories(categoriesData);
  //     } catch (error) {
  //       console.error('Error fetching categories:', error);
  //     }
  //   };
  
  //   fetchCategories();
  // }, []);
  
  // if (!categories) {
  //   return <div>Loading...</div>;
  // }
  return (
    <div className="mx-auto py-5 px-4 w-full max-w-md sm:max-w-2xl lg:max-w-7xl">
        {/* {categories.map((category)=>
              
              (<div key={category.id}> */}
                
      <div className="grid lg:grid-rows-2 grid-cols-2 lg:grid-cols-5 lg:grid-flow-col gap-5">

        {/* :TITLE */}
        <h2 className="sr-only">Categories preview</h2>

        

        {/* :CATEGORY 1 -> LARGEST, LEFT */}
        <div className="order-1 lg:row-span-2 col-span-2 relative shadow rounded-md overflow-hidden bg-pink-100 filter hover:shadow-lg hover:brightness-125">
          <Link to="/category/1" className="pt-8 pb-20 px-5 block w-full h-full">
            <div>
              <img src="https://www.exist.com.tn/img/milieu.jpg" alt="lit coffre" className="absolute inset-0 w-full h-full object-cover object-center" />
              <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-gray-600 opacity-70" />
            </div>
            <div className="relative h-full flex flex-col items-start text-white">
              
              <h3 className="text-3xl font-playfair tracking-wider leading-relaxed antialiased">
                <span className="block text-white">Men's</span>
                <span className="block text-white">clothes</span>
              </h3>
              {/* <p className="mt-4 text-base font-medium font-serif">Summer 2022</p>
              <span className="mt-4 inline-flex justify-center items-center py-1 px-3 border-none rounded bg-white bg-opacity-30 text-xs text-white font-semibold">Popular</span>
             */}
            </div>
          </Link>
        </div>



        {/* :CATEGORY 2 -> SMALL, CENTER LEFT */}
        <div className="order-2 lg:row-span-1 col-span-full sm:col-span-1 relative shadow rounded-md overflow-hidden bg-gray-800 filter hover:shadow-lg hover:brightness-125">
          <a href="#link" className="py-5 px-5 block w-full h-full">
            {/* ::Background Picture */}
            <div>
              {/* :::picture */}
              <img src="https://row.gymshark.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fwl6q2in9o7k3%2F18RVdH6SI8wkA4Gz0hF1Ja%2F44b495d495307ba069a278b0a2d35cb4%2Frun-club.jpg&w=1664&q=85" alt="matelas" className="absolute inset-0 w-full h-full object-cover object-center" />
              {/* :::overlay */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-gray-600 opacity-70" />
            </div>
            {/* ::Category Infos */}
            <div className="pt-10 relative h-full flex flex-col justify-end items-start text-white">
              {/* :::description */}
              {/* <p className="text-sm font-light">To have that <br /> "je ne sais quoi"</p> */}
              {/* :::name */}
              <h3 className="text-2xl font-playfair tracking-wide leading-relaxed antialiased">Gym</h3>
            </div>
          </a>
        </div>



        {/* :CATEGORY 3 -> LARGE, CENTER BOTTOM*/}
        <div className="order-4 lg:order-3 lg:row-span-1 col-span-full sm:col-span-1 lg:col-span-2 relative shadow rounded-md overflow-hidden  filter hover:shadow-lg hover:brightness-125">
          <a href="#link" className="py-5 px-5 block w-full h-full">
            {/* ::Background Picture */}
            <div>
              {/* :::picture */}
              <img src="https://www.decathlon.tn/img/cms/solde%20hiver%202024/Banner-Desktop-Meuble.jpg" alt="cadre de lit" className="absolute top-0 right-0 w-full lg:w-auto h-full object-cover lg:object-contain object-center" />
              {/* :::overlay */}
              {/* <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-300 lg:via-pink-100" /> */}
            </div>
            {/* ::Category Infos */}
            <div className="relative h-full flex flex-col justify-between items-start text-white">
              {/* :::badge tag */}
              <span className="inline-flex justify-center items-center py-1 px-3 border-none rounded bg-white bg-opacity-30 text-xs text-white font-semibold">Trendy</span>
              {/* :::name */}
              <h3 className="mt-16 text-2xl font-playfair tracking-wide leading-relaxed antialiased">Accessories</h3>
            </div>
          </a>
        </div>



        {/* :CATEGORY 4 -> SMALL, CENTER RIGHT */}
        
        
        <div class="order-4 lg:order-4 lg:row-span-1 col-span-full sm:col-span-1 relative shadow rounded-md overflow-hidden bg-gray-500 filter hover:shadow-lg hover:brightness-125">
            <a href="#link" class="py-5 px-5 block w-full h-full">
            <div>
                <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c8294970-6e75-49cc-8334-dc15bb827a57/pegasus-easyon-blueprint-mens-road-running-shoes-gfqzHD.png" alt="chevets" class="absolute inset-0 w-full h-full object-cover object-center"/>            <div class="absolute inset-0 w-full h-full bg-gradient-to-r from-black via-transparent opacity-70">

            </div>
            </div>
            <div class="relative h-full flex flex-col justify-between items-start space-y-16 text-white">
                <span class="inline-flex justify-center items-center py-1 px-3 border-none rounded bg-white bg-opacity-30 text-xs text-white font-semibold">New</span>
                <h3 class="text-2xl font-playfare tracking-wide leading-relaxed antialiased">Running</h3>
                </div>
                </a>
        </div>
        
        
        {/* :CATEGORY 5 -> TALL, RIGHT */}
        <div className="order-5 lg:row-span-2 col-span-full sm:col-span-1 relative shadow rounded-md overflow-hidden bg-blue-800 filter hover:shadow-lg hover:brightness-125">
          <a href="/categoty/3" className="py-5 px-5 block w-full h-full">
            {/* ::Background Picture */}
            <div>
              {/* :::picture */}
              <img src="https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/Search/676/537510.jpg?im=Resize,width=350" alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
              {/* :::overlay */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-700 opacity-50" />
            </div>
            {/* ::Category Infos */}
            <div className="relative h-full flex flex-col justify-between items-start space-y-10 text-white">
              {/* :::badge tag */}
              <span className="inline-flex justify-center items-center py-1 px-3 border-none rounded bg-white bg-opacity-30 text-xs text-white font-semibold">Popular</span>
              {/* :::name */}
              <h3 className="text-3xl font-playfair tracking-wider leading-relaxed antialiased">
                <span className="block">women's</span>
                <span className="block">clothes</span>
              </h3>
            </div>
          </a>
        </div>

      </div>
      </div>
    //           ))}
    // </div>
  )
}

export default CategoryPreview
