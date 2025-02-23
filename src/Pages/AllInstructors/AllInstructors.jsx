import { useEffect, useMemo, useState } from "react";
import { FaSearch } from "react-icons/fa";
import InstructorCard from "../../Components/AllInstructor/InstructorCard";

const AllInstructors = () => {
  const [instructorData, setInstructorData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [selectedSkills, setSelectedSkills] = useState("All Skills");
  const [sortBy, setSortBy] = useState("Ascending");
  const [filteredInstructorData, setfilteredInstructorData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  useEffect(() => {
    fetch("/instructors.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setInstructorData(data);
        setfilteredInstructorData(data);
      })
      .catch((error) =>
        console.error(
          "There has been a problem with your fetch operation:",
          error
        )
      );
  }, []);

  const skills = useMemo(
    () => [
      "All Skills",
      ...new Set(
        instructorData &&
          instructorData
            .map((instructor) => instructor.bio.skills.flat())
            .flat()
      ),
    ],
    [instructorData]
  );

  // Load data from local.json on component mount

  console.log("All skills", skills);

  const applyFilters = () => {
    let filtered = [...instructorData];

    // 🔎 1️⃣ Search Filter

    if (searchTerm) {
      filtered = filtered.filter((instructor) =>
        Object.values(instructor).some((value) =>
          String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    // Apply skill filter

    if (selectedSkills !== "All Skills") {
      filtered = filtered.filter((item) =>
        item.bio?.skills?.includes(selectedSkills)
      );
    }

    // Apply sorting
    if (sortBy === "Ascending") {
      filtered.sort((a, b) => a.rating - b.rating); // Ascending order
    } else {
      filtered.sort((a, b) => b.rating - a.rating); // Descending order
    }

    setfilteredInstructorData(filtered);
  };

  // Pagination Logic
  const totalPages = Math.ceil(filteredInstructorData.length / itemsPerPage);

  useEffect(() => {
    applyFilters();
  }, [searchTerm, sortBy, selectedSkills]);

  return (
    <section>
      <section className="all-filter-section mb-6 grid grid-cols-1 md:grid-cols-4 gap-2">
        {/* section for search input  */}
        <div className="search-bar relative w-full justify-between items-center h-8 flex mb-2">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            placeholder="Search..."
            className=" rounded-sm w-full h-10 border-slate-200 border-[2px] search-input "
          />
          <FaSearch className="absolute right-5 top-2 font-light text-slate-600" />{" "}
          {/* Search Icon */}
          <button className="search-btn"></button>
        </div>

        {/*  select sorting filter */}
        <div className="grid-cols-1 block h-8">
          <select
            id="course-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="h-10 rounded-sm w-full border-slate-200 border-[2px] text-gray-600 text-base block py-1 px-4 focus:outline-none"
          >
            <option value="">Sort By</option>
            <option value="Ascending">Rating: Low to High</option>
            <option value="Descending">Rating: High to Low</option>
          </select>
        </div>
        <div className="grid-cols-1 block h-8">
          <select
            // multiple={true}
            id="course-select"
            value={selectedSkills}
            onChange={(e) => setSelectedSkills(e.target.value)}
            className="h-10 rounded-sm w-full border-slate-200 border-[2px] text-gray-600 text-base block py-1 px-4 focus:outline-none"
          >
            {skills &&
              skills?.map((singleSkill, index) => (
                <option key={index} value={singleSkill}>
                  {singleSkill}
                </option>
              ))}
          </select>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredInstructorData &&
          filteredInstructorData.map((instructor, index) => (
            <InstructorCard
              key={index}
              instructor={instructor}
            ></InstructorCard>
          ))}
      </div>

      {/* Items Per Page */}

      {/* Pagination */}
      <section className="flex justify-between items-center mt-4">
        <div className="pagination">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            ◀ Prev
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next ▶
          </button>
        </div>
        <select
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(Number(e.target.value))}
        >
          {[5, 10, 15].map((size) => (
            <option key={size} value={size}>
              Show {size} per page
            </option>
          ))}
        </select>
      </section>
    </section>
  );
};

export default AllInstructors;
