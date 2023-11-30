import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DropDown.css';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="dropdown-toggle">
        Click me
      </button>
   
      {isOpen && (
        <div className="dropdown-content">
          <Link to="/del">
            <p>Delete Account</p>
          </Link>
          <Link to="/delform">
            <p>Delete Reservation</p>
          </Link>
          {/* Add more Link components for additional pages */}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
