
import React from 'react';
import { Link } from 'react-router-dom';


const Footer1 = () => {
  return (
    <div>
    <footer className="w-full py-5 sm:py-10 px-4 bg-gray-800"> {/* Container */}
      <h2 className="sr-only">Footer</h2>
      <div className="flex flex-col-reverse sm:flex-row md:justify-between lg:justify-around">

        {/* :SITE NAME & SOCIAL NETWORKS */}
        <div className="relative mt-14 sm:mt-0 px-5 flex flex-col justify-center items-center text-gray-500">
          {/* ::Site name */}
          <h1 className="font-title text-4xl text-center font-semibold mt-auto">Black Richa</h1>
          {/* ::Social & copyright */}
          <div className="mt-auto flex flex-col items-center">
            {/* :::Social */}
            <span className="inline-flex mt-6 w-full justify-center md:justify-start md:w-auto">
              {/* Facebook */}
              <a href="#link" className="text-gray-200">
                <span className="sr-only">Facebook</span>
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a href="#link" className="ml-3 text-gray-200">
                <span className="sr-only">Tiktok</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12.525.02c1.31-.02 2.61-.01 3.91-.02c.08 1.53.63 3.09 1.75 4.17c1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97c-.57-.26-1.1-.59-1.62-.93c-.01 2.92.01 5.84-.02 8.75c-.08 1.4-.54 2.79-1.35 3.94c-1.31 1.92-3.58 3.17-5.91 3.21c-1.43.08-2.86-.31-4.08-1.03c-2.02-1.19-3.44-3.37-3.65-5.71c-.02-.5-.03-1-.01-1.49c.18-1.9 1.12-3.72 2.58-4.96c1.66-1.44 3.98-2.13 6.15-1.72c.02 1.48-.04 2.96-.04 4.44c-.99-.32-2.15-.23-3.02.37c-.63.41-1.11 1.04-1.36 1.75c-.21.51-.15 1.07-.14 1.61c.24 1.64 1.82 3.02 3.5 2.87c1.12-.01 2.19-.66 2.77-1.61c.19-.33.4-.67.41-1.06c.1-1.79.06-3.57.07-5.36c.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                         </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/black.richa/?igshid=OGQ5ZDc2ODk2ZA==&fbclid=IwAR21Zlpfq82BqeYcbs60PW8eJ6a-a677KVvGTVtbN9OyMMNaZgZrGVi0fXw" className="ml-3 text-gray-200">
                <span className="sr-only">Instagram</span>
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              {/* Linkedin */}
              {/* <a href="#link" className="ml-3 text-gray-200">
                <span className="sr-only">Linkedin</span>
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-6 h-6" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a> */}
            </span>
            {/* :::Copyright */}
            <span className="py-4 text-xs">&copy;2024, Black Richa All Rights Reserved.</span>
          </div>
          {/* ::Mobile separator line */}
          <span className="sm:hidden absolute -top-4 left-1/2 w-1/4 h-px bg-gray-400 transform -translate-x-1/2" aria-hidden="true"/>
        </div>

        {/* :NAVIGATION */}
        <div className="grid grid-cols-2 gap-5 text-gray-400">
          {/* ::Navigation */}
          <div className="col-span-2 md:col-span-1 pb-0 md:py-3 px-4">
            <h3 className="py-1.5 md:py-4 text-center sm:text-left text-xl text-gray-500 font-bold tracking-wide">Navigation</h3>
            <nav className="flex justify-around md:flex-col font-medium list-none">

              <li><Link  to="/" className="hover:text-gray-200">Home</Link></li>
              <li><a href="/category/3" className="hover:text-gray-200">Categories</a></li>
              <li><a href="/products" className="hover:text-gray-200">Products</a></li>
              {/* <li><a href="#link" className="hover:text-gray-200">About</a></li> */}
            </nav>
          </div>
          {/* ::Address */}
          <div className="col-span-2 md:col-span-1 pb-0 md:py-3 px-4 flex flex-col items-center sm:items-start">
            <h3 className="py-1.5 md:py-4 text-xl text-gray-500 font-bold tracking-wide">Address</h3>
            <p className="md:w-48 text-center sm:text-left text-lg md:text-xl font-medium">72 Route de Paris 72470 saint Mars la Brière</p>
          </div>
          {/* ::Email */}
          <div className="col-span-2 md:col-span-1 pb-0 md:py-3 px-4 flex flex-col items-center sm:items-start">
            <h3 className="py-1.5 md:py-4 text-xl text-gray-500 font-bold tracking-wide">Black Richa</h3>
            <p className="inline-flex justify-center sm:justify-start text-sm text-gray-400 font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a href="#email">moatezaminesabri@gmail.com</a>
            </p>
          </div>
          {/* ::Phone */}
          <div className="col-span-2 md:col-span-1 pb-0 md:py-3 px-4 flex flex-col items-center sm:items-start">
            <h3 className="py-1.5 md:py-4 text-xl text-gray-500 font-bold tracking-wide">Phone contact</h3>
            <p className="inline-flex justify-center sm:justify-start text-sm text-gray-400 font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-1 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+216 90 318 391</span>
            </p>
          </div>
        </div>

      </div>
    </footer>
 </div> )
}

export default Footer1


