import { Link, useMatch } from "react-router-dom";
import ShoppingCart from '../shoppingCart/ShoppingCart';
import React, { useEffect, useState } from 'react';
import SearchBar from "../search/searchBar";

import './header.css'
import useScrollHeader from "./showHeaderScroll";

import { useContext } from 'react';
import { AuthContext } from "../../context/authContext";
import DropdownMenu from "./dropdownMenu";

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import CategoryMenu from "./categoryMenu";

const Navbar = ({ getProducts }) => {

  const match = useMatch('/category/:id');
  const showButton = !!match;
  //logout, and isAuth features 
  const { isAuthenticated, logout } = useContext(AuthContext);
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [showCart, setShowCart] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const showHeader = useScrollHeader();


  const categories = [
    { id: 1, name: 'Acceuil', path: '/' },
    { id: 2, name: 'Men', path: '/category/2' },
    { id: 3, name: 'Women', path: '/category/3' },
    {
      id: 4, name: 'Sports', subcategories: [
        { id: 7, name: 'Running', path: '/category/7' },
        { id: 8, name: 'Gym', path: '/category/8' },
        { id: 9, name: 'Cycling', path: '/category/9' },
      ]
    },
    { id: 5, name: 'Kids', path: '/category/5' },
    { id: 6, name: 'Accessories', path: '/category/6' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCartClick = () => {
    setShowCart(!showCart);
  };
  // const products = [
  //     { id: 1, name: 'DJI Phantom' },
  //     { id: 2, name: 'GoPro Hero8 Black' },
  //     { id: 3, name: 'Canon EOS R5' }
  //    ];
  return (
    // <!-- component -->
    <div className="sticky top-0 z-50  bg-white shadow-md py-2 px-6" >
      <div className="container px-4 py-3 mx-auto">



        {/* <div className="border py-2 px-6"> */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img className="h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
              src="/images/logo/logo.png" alt="logo" />
          </div>
          
          <div className="justify-center  flex-1 items-center  ">

            <SearchBar getProducts={getProducts} />
          </div>

          <div className="flex">

            <div onClick={handleCartClick} className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100" >

              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
              </div>
              <span className="text-sm font-medium  hidden md:bloc">Panier {showCart && <ShoppingCart />}</span>
            </div>

            {isAuthenticated() ? (

              <DropdownMenu />
            ) : (
              <div className="ml-2 flex  cursor-pointer items-center gap-x-1 rounded-md border py-0 px-4 hover:bg-gray-100">
                <Link to="/login">
                  <span className="text-sm font-medium">Connexion</span>
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="mt-0 flex items-center justify-between mx-auto ">
          <div className="flex gap-x-2 py-1 px-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
            </svg>
            <span className="text-sm font-medium">Tunisie</span>
          </div>


          <div className="hidden lg:flex  gap-x-8 items-center justify-center flex-grow">
            {categories.map(category => (
        category.subcategories ? (
          <div className="lg:relative inline-block" key={category.id}>
            <Menu>
              <MenuHandler>
                <Button variant="text" className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">
                  {category.name}
                </Button>
              </MenuHandler>
              <MenuList className="z-10 mt-2 bg-white rounded-md shadow-lg w-40">
                {category.subcategories.map(sub => (
                  <Link to={sub.path} key={sub.id}>
                    <MenuItem>
                      <li className="px-4 py-2 hover:bg-gray-100" style={{ cursor: 'pointer' }}>
                        {sub.name}
                      </li>
                    </MenuItem>
                  </Link>
                ))}
              </MenuList>
            </Menu>
          </div>
        ) : (
          <Link to={category.path} key={category.id}>
            <Button variant="text" className=" cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">
                
              {category.name}
            </Button>
          </Link>
        )
      ))}
          </div>
          </div>
          <div className="flex lg:hidden items-center">
            <CategoryMenu categories={categories} />
          </div>
          {/* <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">frf</span> */}
        
        {/* </div> */}
      </div>
    </div>
  )
}
export default Navbar;