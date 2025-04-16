import { useEffect, useMemo, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { LiaBarsSolid } from "react-icons/lia";
import CourseCart from "../../Components/AllCourse/CourseCart";

const BackEndAllcourse = () => {
  const [courseData, setCourseData] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [selectedLevelCheckboxes, setSelectedLevelCheckboxes] = useState([]);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 1,
  });

  // const [selectedTags, setSelectedTags] = useState([]);
  useEffect(() => {
    const fetchCourses = async () => {
      const params = new URLSearchParams({
        // searchTerm,
        // selectedCategory,
        // selectedCheckboxes: selectedCheckboxes.join(","),
        // selectedLevelCheckboxes: selectedLevelCheckboxes.join(","),
        // page,
        // limit,
      });

      if (searchTerm) params.append("searchTerm", searchTerm);
      if (selectedCategory && selectedCategory !== "All Categories")
        params.append("selectedCategory", selectedCategory);
      if (selectedCheckboxes.length > 0)
        params.append("selectedCheckboxes", selectedCheckboxes.join(","));
      if (selectedLevelCheckboxes.length > 0)
        params.append(
          "selectedLevelCheckboxes",
          selectedLevelCheckboxes.join(",")
        );
      params.append("page", page);
      params.append("limit", limit);

      console.log("params", params);

      const res = await fetch(`http://localhost:5000/courses?${params}`);
      const json = await res.json();

      if (json.success) {
        setCourseData(json.data);
        setPagination(json.pagination);
      }
    };

    fetchCourses();
  }, [
    searchTerm,
    selectedCategory,
    selectedCheckboxes,
    selectedLevelCheckboxes,
    page,
    limit,
  ]);
  console.log("search", searchTerm, courseData);

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

  console.log(
    "level",
    selectedCategory,
    selectedCheckboxes,
    selectedLevelCheckboxes,
    searchTerm
  );
  console.log("category", categories);

  const handleSearchClick = () => {
    setPage(1); // Reset to page 1
    setSearchTerm(searchTerm.trim());
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    console.log("selectedCategory", e.target.value);
    setPage(1);
  };

  const handleCheckboxChange = (category) => {
    setSelectedCheckboxes((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
    console.log("selectedCheckboxes", selectedCheckboxes);
    setPage(1);
  };

  const handleLevelCheckboxChange = (level) => {
    setSelectedLevelCheckboxes((prev) =>
      prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]
    );
    setPage(1);
  };

  // const handlePageChange = (newPage) => {
  //   setPage(newPage);
  // };

  const handleItemsPerPageChange = (e) => {
    setLimit(parseInt(e.target.value));
    setPage(1); // Reset page when changing limit
  };

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
              // setSearchTriggered(false);
            }}
            placeholder="Search..."
            className=" rounded-sm w-full h-10 border-slate-200 border-[2px] search-input "
          />
          <FaSearch className="absolute right-5 top-2 font-light text-slate-600" />{" "}
          {/* Search Icon */}
          <button className="search-btn" onClick={handleSearchClick}></button>
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
                  {courseData && courseData.length}
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
            onChange={handleCategoryChange}
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
          {/* */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-3">
            {" "}
            {courseData &&
              courseData.map((singleCourse, index) => (
                <CourseCart
                  key={index}
                  singleCourse={singleCourse}
                ></CourseCart>
              ))}
          </div>

          {/* Pagination */}
          <div className=" pagination-container grid grid-cols-4 gap-2 my-4">
            <div className="pagination col-span-3 flex justify-center items-center gap-1">
              <button
                disabled={pagination.page === 1}
                onClick={() => setPage((prev) => prev - 1)}
              >
                ◀ Prev
              </button>
              {[...Array(pagination.totalPages)].map((_, index) => {
                const pageNum = index + 1;
                return (
                  <button
                    key={pageNum}
                    className={`bg-cyan-900 text-cyan-100 h-6 rounded-sm w-8 ${
                      pagination.page === pageNum
                        ? "active font-bold rounded-4xl text-orange-100 h-7"
                        : ""
                    }`}
                    onClick={() => setPage(pageNum)}
                  >
                    {pageNum}
                  </button>
                );
              })}

              <button
                disabled={pagination.page === pagination.totalPages}
                onClick={() => setPage((prev) => prev + 1)}
              >
                Next ▶
              </button>
            </div>
            <select value={limit} onChange={(e) => handleItemsPerPageChange(e)}>
              {[5, 10, 15].map((size) => (
                <option key={size} value={size}>
                  Show {size} per page
                </option>
              ))}
            </select>
          </div>
        </section>
      </section>
    </section>
  );
};

export default BackEndAllcourse;
