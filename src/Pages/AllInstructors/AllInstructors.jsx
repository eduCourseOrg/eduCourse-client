import { useCallback, useEffect, useMemo, useState } from "react";
import { FaSearch } from "react-icons/fa";
import InstructorCard from "../../Components/AllInstructor/InstructorCard";

const AllInstructors = () => {
  const [instructorData, setInstructorData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTriggered, setSearchTriggered] = useState(false); //this state will be used when we use search button instead of search input
  const [selectedRating, setselectedRating] = useState([]);
  const [sortBy, setSortBy] = useState([]);
  const [filteredInstructorData, setfilteredInstructorData] = useState([]);

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
      })
      .catch((error) =>
        console.error(
          "There has been a problem with your fetch operation:",
          error
        )
      );
  }, []);

  const ratings = useMemo(
    () => [
      "All Rating",
      ...new Set(
        instructorData && instructorData.map((instructor) => instructor.ratings)
      ),
    ],
    [instructorData]
  );

  const yearsOfExperience = useMemo(
    () => [
      "All",
      ...new Set(
        instructorData &&
          instructorData.map((instructor) => instructor.bio.yearsOfExperience)
      ),
    ],
    [instructorData]
  );

  const filteredData = useCallback(() => {
    console.log("data", instructorData);
    return (
      instructorData &&
      instructorData.filter((instructor) => {
        // Search term filter

        const matchedSearch =
          searchTerm.length === 0 ||
          Object.values(instructor).some((value) =>
            String(value).toLowerCase().includes(searchTerm.toLowerCase())
          );
        // Dropdown category filter (single category)
        const matchesRating =
          !selectedRating || // Allow filtering without selecting a category
          selectedRating === "All Rating" ||
          instructorData.rating === selectedRating;
        console.log("matched-cat", instructorData.category);

        // Dropdown SortBy filter

        const sortByExperiences = (order) => {
          const shortedInstructors = [...yearsOfExperience].sort((a, b) => {
            if (order == "Ascending") {
              return a.yearsOfExperience - b.yearsOfExperience;
            } else if (order == "Descending") {
              return b.yearsOfExperience - a.yearsOfExperience;
            }
          });
          setSortBy(shortedInstructors);
        };

        // Dropdown category filter (single category)
        const matchesSorting =
          !sortBy || // Allow filtering without selecting a category
          sortBy === "All" ||
          instructorData.rating === sortBy;
        console.log("matched-cat", instructorData.category);

        return matchedSearch && matchesRating && sortByExperiences;
      })
    );
  }, [searchTerm, selectedRating, instructorData, selectedSortBy]);

  const displayInstructor = useMemo(() => filteredData(), [filteredData]);

  const searchByClick = () => setSearchTriggered((prev) => !prev);
  useEffect(() => {
    setfilteredInstructorData(displayInstructor);
  }, [displayInstructor]);

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
              setSearchTriggered(false);
            }}
            placeholder="Search..."
            className=" rounded-sm w-full h-10 border-slate-200 border-[2px] search-input "
          />
          <FaSearch className="absolute right-5 top-2 font-light text-slate-600" />{" "}
          {/* Search Icon */}
          <button className="search-btn" onClick={searchByClick}></button>
        </div>

        {/*  select option bar */}
        <div className="grid-cols-1 block h-8">
          <select
            id="course-select"
            value={selectedRating}
            onChange={(e) => setselectedRating(e.target.value)}
            className="h-10 rounded-sm w-full border-slate-200 border-[2px] text-gray-600 text-base block py-1 px-4 focus:outline-none"
          >
            {ratings &&
              ratings?.map((singleRating, index) => (
                <option key={index} value={singleRating}>
                  {singleRating}
                </option>
              ))}
          </select>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredInstructorData
          ? filteredInstructorData.map((instructor, index) => (
              <InstructorCard
                key={index}
                instructor={instructor}
              ></InstructorCard>
            ))
          : instructorData &&
            instructorData?.map((instructor, index) => (
              <InstructorCard
                key={index}
                instructor={instructor}
              ></InstructorCard>
            ))}
      </div>
    </section>
  );
};

export default AllInstructors;
