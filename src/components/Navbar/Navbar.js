import React from 'react';
import './Navbar.css';
import Dropdown from '../dropdown/dropdown';
import CustomizedInputBase from '../searchbar/searchbar';

function Navbar() {
  return (
    <div className="navContainer">
      <div className="navlinkscontainer">
        <a>Logo</a>
        <ul>
          <li>
            <a>About me</a>
          </li>
          <li>
            <Dropdown />
          </li>
          <li>
            <a>contact me</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
