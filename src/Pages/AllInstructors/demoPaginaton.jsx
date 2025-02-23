// Step 1: Setup State for Pagination
// You'll need state to manage:

// The current page (currentPage)
// The number of items per page (itemsPerPage)
// The total number of pages

import { useState } from "react";

const [currentPage, setCurrentPage] = useState(1);
const [itemsPerPage, setItemsPerPage] = useState(10); // Default to 10 per page

// Step 2: Calculate Paginated Data
// Derive the paginated data based on currentPage and itemsPerPage.

const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = instructorData.slice(indexOfFirstItem, indexOfLastItem);

// Step 3: Create Page Buttons Dynamically
// Generate page numbers dynamically based on the total number of items.

const totalPages = Math.ceil(instructorData.length / itemsPerPage);
const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

// Step 4: Handle Page Change
// Update currentPage when a page button is clicked.

const handlePageChange = (pageNumber) => {
  setCurrentPage(pageNumber);
};

// Step 5: Handle Next & Previous Buttons
// Ensure users can navigate between pages.

const handleNext = () => {
  setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
};

const handlePrev = () => {
  setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
};

// Step 6: Handle Items Per Page Change
// Allow users to change how many items they want to see per page.

const handleItemsPerPageChange = (e) => {
  setItemsPerPage(Number(e.target.value));
  setCurrentPage(1); // Reset to first page
};

// Step 7: Render the Pagination Component
// Now, display the paginated items and navigation buttons.

return (
  <div>
    {/* Dropdown to select items per page */}
    <label>Items per page: </label>
    <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
      <option value="10">10</option>
      <option value="15">15</option>
      <option value="20">20</option>
    </select>

    {/* Display the current items */}
    <div>
      {currentItems.map((instructor) => (
        <p key={instructor.id}>{instructor.name}</p>
      ))}
    </div>

    {/* Pagination Buttons */}
    <div>
      <button onClick={handlePrev} disabled={currentPage === 1}>
        Previous
      </button>

      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => handlePageChange(number)}
          className={currentPage === number ? "active" : ""}
        >
          {number}
        </button>
      ))}

      <button onClick={handleNext} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  </div>
);
