import { useCallback, useEffect, useMemo, useState } from "react";
import InstructorCard from "../../Components/AllInstructor/InstructorCard";
import useEduCourseContexts from "../../Hooks/useEduCourseContexts";

const AllInstructors = () => {
  const [instructorData, setInstructorData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTriggered, setSearchTriggered] = useState(false); //this state will be used when we use search button instead of search input
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedSortBy, setSelectedSortBy] = useState([]);

  const { loading, setLoading } = useEduCourseContexts();

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

  const categories = useMemo(
    () => [
      "All Categories",
      ...new Set(
        instructorData &&
          instructorData.map((instructor) => instructor.category)
      ),
    ],
    [instructorData]
  );

  const YearOfExperience = useMemo(
    () => [
      ...new Set(
        instructorData &&
          instructorData.map((instructor) => instructor.courseLevel)
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
        const matchesCategory =
          !selectedCategory || // Allow filtering without selecting a category
          selectedCategory === "All Categories" ||
          instructorData.category === selectedCategory;
        console.log("matched-cat", instructorData.category);

        // Dropdown SortBy filter
        const matchesSortBy =
          !selectedSortBy || // Allow filtering without selecting a category
          selectedSortBy === "All" ||
          instructorData.yearsOfExperience === selectedSortBy;
        console.log("matched-cat", instructorData.yearsOfExperience);

        return matchedSearch && matchesCategory && matchesSortBy;
      })
    );
  }, [searchTerm, selectedCategory, instructorData, selectedSortBy]);

  // const displayCourses = useMemo(() => filteredCourse(), [filteredCourse]);

  // const searchByClick = () => setSearchTriggered((prev) => !prev);

  return (
    // <section>
    //   {/* <section className="all-filter-section mb-6 grid grid-cols-1 md:grid-cols-4 gap-2">
    //     {/* section for search input */}
    //     <div className="search-bar relative w-full justify-between items-center h-8 flex mb-2">
    //       <input
    //         type="text"
    //         value={searchTerm}
    //         onChange={(e) => {
    //           setSearchTerm(e.target.value);
    //           setSearchTriggered(false);
    //         }}
    //         placeholder="Search..."
    //         className=" rounded-sm w-full h-10 border-slate-200 border-[2px] search-input "
    //       />
    //       <FaSearch className="absolute right-5 top-2 font-light text-slate-600" />{" "}
    //       {/* Search Icon */}
    //       <button className="search-btn" onClick={searchByClick}></button>
    //     </div>
    //     {/* section for grid change */}
    //     <div className="layout-btn col-span-2">
    //       <div className="flex justify-start gap-3 h-full items-center">
    //         <div className="flex gap-1 justify-start  items-center">
    //           <button>
    //             <IoGrid className="text-xl" />
    //           </button>
    //           <button>
    //             <LiaBarsSolid className="text-2xl font-bold" />
    //           </button>
    //         </div>
    //         <div>
    //           <h4 className="p-1">
    //             We found
    //             <span className="font-bold text-2xl mx-2 text-primary">
    //               {filteredCourses && filteredCourses.length > 0
    //                 ? filteredCourses.length
    //                 : courseData.length}
    //             </span>
    //             Courses Available for you
    //           </h4>
    //         </div>
    //       </div>
    //     </div>
    //     {/*  select option bar */}
    //     <div className="grid-cols-1 block h-8">
    //       <select
    //         id="course-select"
    //         value={selectedCategory}
    //         onChange={(e) => setSelectedCategory(e.target.value)}
    //         className="h-10 rounded-sm w-full border-slate-200 border-[2px] text-gray-600 text-base block py-1 px-4 focus:outline-none"
    //       >
    //         {categories &&
    //           categories?.map((category, index) => (
    //             <option key={index} value={category}>
    //               {category}
    //             </option>
    //           ))}
    //       </select>
    //     </div>
    //   </section> */}

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {instructorData &&
        instructorData?.map((instructor, index) => (
          <InstructorCard key={index} instructor={instructor}>
            {console.log(instructorData.name)}
          </InstructorCard>
        ))}
    </div>
    // </section>
  );
};

export default AllInstructors;
