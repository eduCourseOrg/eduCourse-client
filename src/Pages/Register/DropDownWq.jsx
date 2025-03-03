/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const DropDownWq = ({ className, selected, setSelected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null); // Track open submenu

  // Define main options with nested sub-options
  const options = [
    {
      label: "Web Development",
      subOptions: ["Beginner", "Intermediate", "Advance"],
    },
    {
      label: "Data Science",
      subOptions: ["Beginner", "Intermediate", "Advance"],
    },
    {
      label: "Cyber Security",
      subOptions: ["Beginner", "Intermediate", "Advance"],
    },
    {
      label: "Graphic Design",
      subOptions: ["Beginner", "Intermediate", "Advance"],
    },
  ];

  return (
    <div className={`relative ${className} flex items-center`}>
      {/* Selected Items Display */}
      <div
        className="w-full p-2 rounded bg-white text-primary text-left cursor-default"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-fit flex gap-1 flex-wrap">
          {selected.length
            ? selected.map((item, idx) => (
                <span
                  key={idx}
                  className="w-fit bg-gray-200 px-2 py-1 rounded mr-1 flex items-center"
                >
                  {item.main} - {item.sub}
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelected(selected.filter((_, i) => i !== idx));
                    }}
                    className="ml-1 font-bold cursor-pointer"
                  >
                    X
                  </span>
                </span>
              ))
            : "Select an option"}
        </div>
      </div>
      <IoMdArrowDropdown className="text-xl absolute top-[30%] right-3" />

      {/* Main Dropdown Options */}
      {isOpen && (
        <ul className="absolute bottom-0 translate-y-full w-full max-h-[200px] overflow-y-auto bg-white border border-gray-300 rounded-md mt-1 shadow-lg z-40">
          {options.map((option, index) => (
            <li
              key={index}
              className="p-2 cursor-pointer hover:bg-gray-200 flex gap-5 items-center relative"
              onClick={(e) => {
                e.stopPropagation();
                setOpenSubMenu(openSubMenu === index ? null : index); // Toggle sub-menu
              }}
            >
              {option.label}
              <IoMdArrowDropdown
                className={`text-lg transform ${
                  openSubMenu === index ? "rotate-180" : ""
                }`}
              />

              {/* Nested Sub-options */}
              {openSubMenu === index && (
                <ul className="absolute left-[40%] top-0 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-50">
                  {option.subOptions.map((subOption, subIndex) => {
                    // Check if the sub-option is already selected under the same main option
                    const isSubOptionSelected = selected.some(
                      (item) =>
                        item.main === option.label && item.sub === subOption
                    );

                    return (
                      <li
                        key={subIndex}
                        className={`p-2 cursor-pointer ${
                          isSubOptionSelected
                            ? "text-gray-400 cursor-not-allowed"
                            : "hover:bg-blue-500 hover:text-white"
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (!isSubOptionSelected) {
                            setSelected([
                              ...selected,
                              { main: option.label, sub: subOption },
                            ]);
                            setIsOpen(false);
                            setOpenSubMenu(null); // Close sub-menu
                          }
                        }}
                      >
                        {subOption}
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDownWq;
