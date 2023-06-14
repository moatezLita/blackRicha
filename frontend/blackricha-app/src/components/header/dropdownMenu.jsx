import React from 'react';
import { Link } from 'react-router-dom';

import { useContext, useState } from 'react';
import { AuthContext } from "../../context/authContext";
import { UserContext } from '../../context/userContext';
import { useNavigate } from 'react-router-dom';



const DropdownMenu = () => {
  const navigate = useNavigate();

  const {  logout } = useContext(AuthContext);
const{userData}= useContext(UserContext);

const handleProfileClick = () => {
  if (userData && userData.userId) {
    navigate(`/account`);
    setIsDropdownOpen(false);
  }
};
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

const handleLogout = () => {
    logout();
    setIsDropdownOpen(false);
    // Perform any necessary cleanup or redirection
    // ...
  };
  return(
    
    <div class="relative inline-block text-left">
    <div>
        <button  onClick={toggleDropdown} type="button" class="  flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500" id="options-menu">
            <svg width="20" fill="currentColor" height="20" class="text-gray-800" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path d="M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
                </path>
            </svg>
        </button>
    </div>
    {isDropdownOpen  && (
    <div class="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
        <div class="py-1 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {/* <a href="#" class="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                <span class="flex flex-col">
                    <span>
                        Stripe
                    </span>
                </span>
            </a> */}
            <a onClick={handleProfileClick} style={{ cursor: 'pointer' }} class="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                <span class="flex flex-col">
                    <span>
                        Profile
                    </span>
                </span>
            </a>
            <Link to="/"  onClick={handleLogout} class="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                <span class="flex flex-col">
                    <span>
                        Logout
                    </span>
                </span>
            </Link>
        </div>
    </div>)}
</div>

  );
};

export default DropdownMenu;
