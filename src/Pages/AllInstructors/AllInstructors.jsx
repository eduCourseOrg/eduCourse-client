import { useCallback, useEffect, useMemo, useState } from "react";
import { FaSearch } from "react-icons/fa";
import InstructorCard from "../../Components/AllInstructor/InstructorCard";

const AllInstructors = () => {
  const [instructorData, setInstructorData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTriggered, setSearchTriggered] = useState(false); //this state will be used when we use search button instead of search input
  const [selectedRating, setselectedRating] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
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
  console.log("All skills", skills);

  // const ratings = useMemo(
  //   () => [
  //     "All Rating",
  //     ...new Set(
  //       instructorData && instructorData.map((instructor) => instructor.ratings)
  //     ),
  //   ],
  //   [instructorData]
  // );

  const sortByRating = useCallback((order, data) => {
    return [...data].sort((a, b) => {
      if (order === "Ascending") return a.ratings - b.ratings;
      if (order === "Descending") return b.ratings - a.ratings;
      return 0;
    });
  }, []);

  // const filteredData = useCallback(() => {

  //   console.log("data", instructorData);

  //   if (!instructorData) return [];
  //   return instructorData.filter((instructor) => {
  //     // Search term filter

  //     const matchedSearch =
  //       searchTerm.length === 0 ||
  //       Object.values(instructor).some((value) =>
  //         String(value).toLowerCase().includes(searchTerm.toLowerCase())
  //       );
  //     // Dropdown skills filter (single skills)
  //     const matchesSkills =
  //       !selectedSkills || // Allow filtering without selecting a category
  //       selectedSkills === "All Skills" ||
  //       instructor.bio.skills?.includes(selectedSkills);
  //     console.log("matched-cat", matchesSkills);

  //     // Dropdown sorting filter
  //     const matchesSorting =
  //       !sortBy || // Allow filtering without selecting a category
  //       sortBy === "All" ||
  //       instructor.ratings === sortBy;
  //     console.log("matched-rating", ratings);

  //     return matchedSearch && matchesSorting && matchesSkills;
  //   });
  // }, [searchTerm, sortBy, instructorData, selectedSkills]);
  const filteredData = useMemo(() => {
    if (!instructorData) return [];

    let filtered = [...instructorData];

    // 🔎 1️⃣ Search Filter
    if (searchTerm.trim().length > 0) {
      filtered = filtered.filter((instructor) =>
        Object.values(instructor).some((value) =>
          String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    // ✅ 2️⃣ Skills Filter
    if (selectedSkills !== "All Skills") {
      filtered = filtered.filter((instructor) =>
        instructor.bio.skills?.includes(selectedSkills)
      );
    }

    // 📊 3️⃣ Sorting (APPLY SORTING HERE!)
    sortByRating(filtered, sortBy); // ⬅️ Proper sorting function

    return filtered;
  }, [searchTerm, selectedSkills, sortBy, instructorData, sortByRating]);

  const searchByClick = () => setSearchTriggered((prev) => !prev);
  useEffect(() => {
    setfilteredInstructorData(filteredData);
  }, [filteredData]);

  console.log("filterd Data", filteredInstructorData);

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
