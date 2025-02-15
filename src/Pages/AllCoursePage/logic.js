import { useState, useEffect } from "react";

function SearchAndFilter() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]); // For select filter
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Load data from local JSON file (replace 'data.json' with your file path)
    fetch("data.json") // Make sure data.json is in the public folder or adjust path
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
        setFilteredData(jsonData); // Initialize filtered data with all data
      })
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  useEffect(() => {
    // Filtering logic (both search and select)
    const filtered = data.filter((item) => {
      const searchMatch = Object.values(item).some((value) => {
        // Search in all fields
        if (typeof value === "string") {
          // Handle string values
          return value.toLowerCase().includes(searchTerm.toLowerCase());
        } else if (typeof value === "number") {
          // Handle number values (optional)
          return value.toString().includes(searchTerm);
        }
        return false;
      });

      const selectMatch =
        selectedOptions.length === 0 ||
        selectedOptions.every((option) => {
          // Adapt this to how your select options relate to your data
          // Example:  item.category.includes(option) or item.tags.includes(option)
          if (item.category) {
            // Check if the property exists before accessing it
            return item.category.includes(option);
          }
          return false;
        });

      return searchMatch && selectMatch;
    });
    setFilteredData(filtered);
  }, [searchTerm, selectedOptions, data]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSelectChange = (event) => {
    const selected = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setSelectedOptions(selected);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />

      {/* Example Select Filter (Adapt to your data structure) */}
      <select multiple value={selectedOptions} onChange={handleSelectChange}>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Books">Books</option>
        {/* ... more options from your data */}
        {/* Dynamically generate options if needed (see below) */}
      </select>

      <ul>
        {filteredData.map((item) => (
          <li
            key={
              item.id ||
              item.name ||
              /* other unique identifier */ Math.random()
            }
          >
            {/* Display your data here.  Make it dynamic: */}
            {Object.entries(item).map(([key, value]) => (
              <p key={key}>
                {key}: {value}
              </p>
            ))}
            {/* Example:  <p>{item.name} - {item.price}</p> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchAndFilter;

// Example of dynamically generating select options from your data:

// Inside your component, after fetching the data:
/*
const uniqueCategories = [...new Set(data.map(item => item.category))]; // Get unique categories

// ... in the JSX:
<select multiple value={selectedOptions} onChange={handleSelectChange}>
  {uniqueCategories.map(category => (
    <option key={category} value={category}>{category}</option>
  ))}
</select>
*/
