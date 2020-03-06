import React, { useState, useRef, useEffect } from 'react';
import './dropdown.scss';

const Dropdown = props => {
  console.log(props.data.data);

  const data = props.data.data;

  const activatorRef = useRef(null);

  const dropdownListRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = e => {
    setIsOpen(!isOpen);
  };

  const keyHandler = e => {
    console.log(e.code);
    // Code for esc is 27
    if (e.code === 27 && isOpen) {
      setIsOpen(false);
    }
  };

  //   if what the user is clicking isnt in the dropdown, close the dropdown
  const clickOutsideHandler = e => {
    //   event.target
    if (
      dropdownListRef.current.contains(event.target) ||
      activatorRef.current.contains(event.target)
    ) {
      return;
    }
    setIsOpen(false);
  };

  //   we'll use useEffect toggled with isOpen to send focus to the first element in the dropdown
  //   we'll also use it to be able to close the dropdown by clicking outside of it. we will achieve this using a document.addEventListener
  useEffect(() => {
    if (isOpen) {
      dropdownListRef.current.querySelector('a').focus();
      document.addEventListener('mousedown', clickOutsideHandler);
    } else {
      // if it's not open and to prevent a memory leak, we remove eventListener
      document.removeEventListener('mousedown', clickOutsideHandler);
    }
  }, [isOpen]);

  return (
    <div className="dropdown-wrap">
      {/* button is our activator */}
      <button
        aria-haspopup="true"
        aria-controls="dropdown1"
        className="dropdown-activator"
      >
        Categories
      </button>
      <ul
        id="dropdown1"
        // we now say if isOpen is true, we want to add an active class but if its false, dont add a class
        className={`dropdown-itemList ${isOpen ? 'active' : ''}`}
        // adding role="list" helps us make sure that assistive technology eg screen readers will annouce how many items are in the list
        role="list"
      >
        {data.map((item, index) => {
          console.log(item);
          return (
            <li key={index}>
              <a href="#">{item.blogCategory}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
