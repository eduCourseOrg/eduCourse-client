import React, { useState, useEffect } from "react";

const itemsPerPage = 5;

const FilterComponent = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState(data);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle category select change
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Handle checkbox selection
  const handleOptionChange = (e) => {
    const value = e.target.value;
    setSelectedOptions((prev) =>
      prev.includes(value)
        ? prev.filter((option) => option !== value)
        : [...prev, value]
    );
  };

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Filtering the data based on search, category, and selected options
  useEffect(() => {
    const filtered = data.filter((item) => {
      const matchesSearchTerm =
        !searchTerm ||
        Object.values(item).some(
          (value) =>
            (typeof value === "string" || typeof value === "number") &&
            String(value).toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesCategory =
        !selectedCategory || item.category === selectedCategory;

      const matchesOptions =
        selectedOptions.length === 0 ||
        selectedOptions.every((option) => item.options.includes(option));

      return matchesSearchTerm && matchesCategory && matchesOptions;
    });

    setFilteredData(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [searchTerm, selectedCategory, selectedOptions, data]);

  // Pagination logic
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div>
      {/* Search Input */}
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search..."
      />

      {/* Category Select */}
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Select Category</option>
        {["Category1", "Category2", "Category3"].map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      {/* Checkbox Filters */}
      <div>
        <label>
          <input
            type="checkbox"
            value="Option1"
            checked={selectedOptions.includes("Option1")}
            onChange={handleOptionChange}
          />
          Option 1
        </label>
        <label>
          <input
            type="checkbox"
            value="Option2"
            checked={selectedOptions.includes("Option2")}
            onChange={handleOptionChange}
          />
          Option 2
        </label>
        <label>
          <input
            type="checkbox"
            value="Option3"
            checked={selectedOptions.includes("Option3")}
            onChange={handleOptionChange}
          />
          Option 3
        </label>
      </div>

      {/* Data Display */}
      <ul>
        {paginatedData.map((item, index) => (
          <li key={index}>
            {JSON.stringify(item)}{" "}
            {/* Displaying entire object for simplicity */}
          </li>
        ))}
      </ul>

      {/* Pagination Controls */}
      <div>
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FilterComponent;
