import { useState } from "react";

// Custom hook for pagination
export const usePagination = (data, itemsPerPage = 5) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages based on the filtered data
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Paginate the data
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return {
    currentPage,
    setCurrentPage,
    totalPages,
    paginatedData,
    handlePageChange,
  };
};
