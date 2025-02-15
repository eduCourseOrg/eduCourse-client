import { useState } from "react";

// Custom hook for handling filters
export const useFilter = (initialData) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);

  // Update the search term
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Update the selected category
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Handle checkbox option changes
  const handleOptionChange = (e) => {
    const value = e.target.value;
    setSelectedOptions((prev) =>
      prev.includes(value)
        ? prev.filter((option) => option !== value)
        : [...prev, value]
    );
  };

  // Filter the data based on the current filters
  const filteredData = initialData.filter((item) => {
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

  return {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    selectedOptions,
    setSelectedOptions,
    filteredData,
    handleSearchChange,
    handleCategoryChange,
    handleOptionChange,
  };
};
