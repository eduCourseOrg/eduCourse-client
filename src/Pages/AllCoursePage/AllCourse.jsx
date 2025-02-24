import { useEffect, useMemo, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { LiaBarsSolid } from "react-icons/lia";
import CourseCart from "../../Components/AllCourse/CourseCart";

const AllCourse = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTriggered, setSearchTriggered] = useState(false); //this state will be used when we use search button instead of search input
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [selectedLevelCheckboxes, setSelectedLevelCheckboxes] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [courseData, setCourseData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    fetch("/courses.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCourseData(data.courses);
        setFilteredCourses(data.courses);
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
      ...new Set(courseData && courseData.map((course) => course.category)),
    ],
    [courseData]
  );

  const levels = useMemo(
    () => [
      ...new Set(courseData && courseData.map((course) => course.courseLevel)),
    ],
    [courseData]
  );

  console.log("level", levels);

  const filteredCourse = useMemo(() => {
    console.log(categories);
    console.log("data", courseData);
    return (
      courseData &&
      courseData.filter((course) => {
        // Search term filter

        const matchedSearch =
          searchTerm.length === 0 ||
          Object.values(course).some((value) =>
            String(value).toLowerCase().includes(searchTerm.toLowerCase())
          );
        // Dropdown category filter (single category)
        const matchesCategory =
          !selectedCategory || // Allow filtering without selecting a category
          selectedCategory === "All Categories" ||
          course.category === selectedCategory;
        console.log("matched-cat", course.category);

        // Checkbox category filter (multiple categories)
        const matchesCheckboxes =
          selectedCheckboxes.length === 0 ||
          selectedCheckboxes.includes(course.category);

        // Level Checkbox filter
        const matchesLevelCheckboxes =
          selectedLevelCheckboxes.length === 0 || // Ensure it’s always an array
          selectedLevelCheckboxes.includes(course.courseLevel);


          //calculation of pagination

          const indexOfLastCourse=currentPage*itemsPerPage
          const indexOfFirstCourse=indexOfLastCourse-itemsPerPage
          const currentCourses=filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse)

         // Step 3: Create Page Buttons Dynamically
     // Generate page numbers dynamically based on the total number of courses.

     const totalPage=Math.ceil(filteredCourses.length / itemsPerPage)

     const pageNumbers=Array.from({length: totalPage},(_,i)=>i+1)

 

        return (
          matchedSearch &&
          matchesCategory &&
          matchesCheckboxes &&
          matchesLevelCheckboxes &&
          currentCourses && totalPage && pageNumbers
        );
      })
    );
  }, [
    searchTerm,
    selectedCategory,
    selectedLevelCheckboxes,
    selectedCheckboxes,
    categories,
    courseData,
    currentPage,filteredCourses,itemsPerPage
  
  ]);

  const searchByClick = () => setSearchTriggered((prev) => !prev);

  // Function to handle Category checkbox selection
  const handleCheckboxChange = (category) => {
    setSelectedCheckboxes(
      (prev) =>
        prev.includes(category)
          ? prev.filter((c) => c !== category) // Remove if already selected
          : [...prev, category] // Add if not selected
    );
  };
  // Function to handle Level checkbox selection

  const handleLevelCheckboxChange = (level) => {
    setSelectedLevelCheckboxes((prev = []) =>
      prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]
    );
  };

  //function for pageNumber Button handle

  const handlePageNumber=(pageNumber)=>{
    setCurrentPage(pageNumber)
   }

   //functon for itemSPerPageChanges dropdown handler

   const handleItemsPerPageChanges=(e)=>{

    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); //reset to first page every time items per page changes
  
  }


  useEffect(() => {
    filteredCourses.length === 0
      ? setFilteredCourses(courseData)
      : setFilteredCourses(filteredCourse);
  }, [filteredCourse, courseData]);

  return (
    <section>
      <section className="all-filter-section mb-6 grid grid-cols-1 md:grid-cols-4 gap-2">
        {/* section for search input */}
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
        {/* section for grid change */}
        <div className="layout-btn col-span-2">
          <div className="flex justify-start gap-3 h-full items-center">
            <div className="flex gap-1 justify-start  items-center">
              <button>
                <IoGrid className="text-xl" />
              </button>
              <button>
                <LiaBarsSolid className="text-2xl font-bold" />
              </button>
            </div>
            <div>
              <h4 className="p-1">
                We found
                <span className="font-bold text-2xl mx-2 text-primary">
                  {filteredCourses && filteredCourses.length}
                </span>
                Courses Available for you
              </h4>
            </div>
          </div>
        </div>
        {/*  select option bar */}
        <div className="grid-cols-1 block h-8">
          <select
            id="course-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="h-10 rounded-sm w-full border-slate-200 border-[2px] text-gray-600 text-base block py-1 px-4 focus:outline-none"
          >
            {categories &&
              categories?.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
          </select>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-4">
        <div className="grid-cols-1 lg:mr-4 md:mr-2">
          {/* // Start left side section */}

          {/* Section for category filter */}

          <div className="ml-2 bg-secondary rounded-md p-4 h-full">
            <fieldset>
              <legend className="text-lg font-medium text-gray-900 mt-2">
                Category
              </legend>

              <div className="mt-4 space-y-2">
                {categories
                  .filter((category) => category !== "All Categories")
                  .map((category, index) => (
                    <label
                      htmlFor="Option1"
                      className="flex cursor-pointer items-start gap-4"
                      key={index}
                    >
                      <input
                        type="checkbox"
                        value={category}
                        checked={selectedCheckboxes.includes(category)}
                        onChange={() => handleCheckboxChange(category)}
                        className="size-4 rounded-sm border-gray-300"
                      />
                      {category}
                    </label>
                  ))}
              </div>
            </fieldset>
            <hr className="border-slate-300 border-2 mt-2 w-full" />
            <div className="h-40">
              {" "}
              <fieldset>
                <legend className="text-lg font-medium text-gray-900 mt-2">
                  Tags
                </legend>
              </fieldset>
            </div>

            <hr className="border-slate-300 border-2 mt-2 w-full" />

            <fieldset>
              <legend className="text-lg font-medium text-gray-900 mt-2">
                Levels
              </legend>
              <div className="mt-4 space-y-2">
                {levels.map((level, index) => (
                  <label
                    htmlFor={level}
                    className="flex font-semibold cursor-pointer items-start gap-4"
                    key={index}
                  >
                    <input
                      type="checkbox"
                      value={level}
                      className="size-4 rounded-sm border-gray-300"
                      checked={selectedLevelCheckboxes.includes(level)}
                      onChange={() => handleLevelCheckboxChange(level)}
                    />
                    {level}
                  </label>
                ))}
              </div>
            </fieldset>
          </div>
        </div>

        {/* Left side section ended */}

        {/* This is for Right side section */}
        <section className="lg:col-span-3  gap-2">
          {/*

*/}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2">
            {" "}
            {filteredCourses &&
              filteredCourses.map((singleCourse, index) => (
                <CourseCart
                  key={index}
                  singleCourse={singleCourse}
                ></CourseCart>
              ))}
          </div>

          {/* Course List */}
          <ul>
            {paginatedCourses.length > 0 ? (
              paginatedCourses.map((course) => (
                <li key={course.id}>
                  {course.name} - <strong>{course.category}</strong> (
                  <em>{course.level}</em>)
                  <span>
                    {" "}
                    📅 {course.date} | ⭐ {course.popularity}
                  </span>
                </li>
              ))
            ) : (
              <li>No results found</li>
            )}
          </ul>

        {/* Pagination */}
      <section className="grid grid-cols-4 gap-2 mt-4">
        <div className="pagination col-span-3 flex justify-center items-center gap-1">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            ◀ Prev
          </button>
          {pageNumbers.map((number)=><button key={number} className= {`bg-cyan-900 text-cyan-100 h-6 rounded-sm w-8 ${currentPage===number && 'active'}`} onClick={()=>handlePageNumber(number)}>
            {number}
            </button>)}
          <button
            disabled={currentPage === totalPage}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next ▶
          </button>
        </div>
        <select
          value={itemsPerPage}
          onChange={(e) => handleItemsPerPageChanges(e)}
        >
          {[5, 10, 15].map((size) => (
            <option key={size} value={size}>
              Show {size} per page
            </option>
          ))}
        </select>
      </section>
        </section>
      </section>
    </section>
  );
};

export default AllCourse;
