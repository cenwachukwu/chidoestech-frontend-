import React from 'react';
import './Navbar.css';
import Dropdown from '../components/dropdown/dropdown';
import Searchbar from '../components/searchbar/searchbar';

function Navbar(props) {
  return (
    <div className="navContainer">
      <div className="navlinkscontainer">
        <a>Logo</a>
        <ul>
          <li>
            {' '}
            <a>About me</a>
          </li>
          <li>
            <Dropdown />
          </li>
          <li>
            <a>contact me</a>
          </li>
        </ul>
        <Searchbar />
      </div>
    </div>
  );
}

export default Navbar;
