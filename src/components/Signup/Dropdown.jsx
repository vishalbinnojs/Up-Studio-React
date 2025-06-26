import React, { useState, useRef, useEffect } from "react";
import "./Dropdown.css"; 

const CustomDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Account Type");
  const dropdownRef = useRef(null);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  const handleOptionClick = (option) => {
      setSelected(option);
      setIsOpen(false);
    };
    
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        console.log(dropdownRef.current)
        // console.log(!dropdownRef.current.contains(event.target))
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div className="dropdown-button" onClick={toggleDropdown}>
        <span>{selected}</span>
        <span className="arrow">▼</span>
      </div>

      {isOpen && (
        <div className="dropdown-content">
          <div onClick={() => handleOptionClick("Artist")}>Artist</div>
          <div onClick={() => handleOptionClick("Technician")}>Technician</div>
          <div onClick={() => handleOptionClick("Studio Owner")}>Studio Owner</div>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
