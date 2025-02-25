/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const CustomDropdown = ({className}) => {
  const [selected, setSelected] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  
  const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5", "Option 6", "Option 7", "Option 8", "Option 9"];

  return (
      <div className={`relative ${className} flex items-center`}>
      <div
        className="w-full p-2 rounded bg-white text-primary text-left cursor-default"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-fit flex gap-1 flex-wrap">
            {selected?.length ? selected.map((value, idx) => <span
            key={idx}
            className="w-fit bg-gray-200 px-2 py-2 rounded mr-1"
            >{value} <span onClick={() => selected.splice(idx, 1)} className="font-bold cursor-pointer">X</span></span>) : "Select an option"}    
        </div>
        </div> 
        <IoMdArrowDropdown className="text-xl absolute top-[30%] right-3"></IoMdArrowDropdown>
          
      {/* Dropdown Option */}
      {isOpen && (
        <ul className="absolute bottom-0 translate-y-full w-full max-h-[200px] overflow-x-scroll bg-white border border-gray-300 rounded-md mt-1 shadow-lg z-40">
          {options.map((option, index) => (
            <li
                key={index}
              className={`p-2 ${selected.includes(option) ? 'hover:bg-[var(--color-secondary)] hover:text-[var(--color-primary)]' : 'hover:bg-[var(--color-primary)] hover:text-[var(--color-secondary)] cursor-pointer'}`}
                onClick={() => {
                if (selected.includes(option)) {
                    setSelected((prev) => [...prev])
                } else {
                    setSelected((prev) => [...prev, option]);
                    setIsOpen(false);
                }
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
