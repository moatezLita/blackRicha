import React from 'react';
import { Link } from 'react-router-dom';

const DropdownMenu = ({ handleLogout }) => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li onClick={handleLogout}>Logout</li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
