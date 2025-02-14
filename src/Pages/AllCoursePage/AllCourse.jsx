import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { LiaBarsSolid } from "react-icons/lia";
import CourseCart from "../../Components/AllCourse/CourseCart";
const AllCourse = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  // const [filteredData, setFilteredData] = useState(data);
  const [courseData, setCourseData] = useState("");

  useEffect(() => {
    // If you're using Create React App and the file is in the public folder
    fetch("/courses.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCourseData(data);
        console.log("data", data.courses);
      })
      .catch((error) =>
        console.error(
          "There has been a problem with your fetch operation:",
          error
        )
      );
  }, []);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle category select change
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Handle checkbox selection
  const handleOptionChange = (e) => {
    const value = e.target.value;
    setSelectedOptions((prev) =>
      prev.includes(value)
        ? prev.filter((option) => option !== value)
        : [...prev, value]
    );
  };

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
    // Implement search logic here
  };

  return (
    <section>
      <section className="all-filter-section mb-6 grid grid-cols-1 md:grid-cols-4 gap-2">
        {/* section for search input */}
        <div className="search-bar relative w-full justify-between items-center h-8 flex mb-2">
          <input
            type="text"
            value={searchTerm}
            r
            onChange={handleSearchChange}
            placeholder="Search..."
            className=" rounded-sm w-full h-10 border-slate-200 border-[2px] search-input "
          />
          <FaSearch className="absolute right-5 top-2 font-light text-slate-600" />{" "}
          {/* Search Icon */}
          <button className="search-btn" onClick={handleSearch}></button>
        </div>
        {/* section for grid change */}
        <div className="layout-btn col-span-2">
          <div className="flex justify-start gap-3 items-center">
            <div className="flex gap-1 justify-start items-center">
              <button>
                <IoGrid className="text-xl" />
              </button>
              <button>
                <LiaBarsSolid className="text-2xl font-bold" />
              </button>
            </div>
            <div>
              <h4 className="m-1">
                We found
                <span className="font-bold text-2xl mx-2 text-primary">
                  {courseData?.length}
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
            {courseData &&
              courseData?.map((courseInfo) => (
                <option key={courseInfo.id} value={courseInfo.category}>
                  {courseInfo.category}
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
                <label
                  htmlFor="Option1"
                  className="flex cursor-pointer items-start gap-4"
                >
                  <div className="flex items-center">
                    {/* Category 01 */}
                    <input
                      type="checkbox"
                      className="size-4 rounded-sm border-gray-300"
                      id="Option1"
                    />
                  </div>

                  <div>
                    <strong className="font-medium text-gray-900">
                      {" "}
                      Desgin & Development{" "}
                    </strong>
                  </div>
                </label>

                <label
                  htmlFor="Option2"
                  className="flex cursor-pointer items-start gap-4"
                >
                  <div className="flex items-center">
                    {/* Category 02 */}
                    <input
                      type="checkbox"
                      className="size-4 rounded-sm border-gray-300"
                      id="Option2"
                    />
                  </div>

                  <div>
                    <strong className="font-medium text-gray-900">
                      {" "}
                      Digital Marketing{" "}
                    </strong>
                  </div>
                </label>

                <label
                  htmlFor="Option3"
                  className="flex cursor-pointer items-start gap-4"
                >
                  <div className="flex items-center">
                    {/* Category 03 */}
                    <input
                      type="checkbox"
                      className="size-4 rounded-sm border-gray-300"
                      id="Option3"
                    />
                  </div>

                  <div>
                    <strong className="font-medium text-gray-900">
                      {" "}
                      Video Editing{" "}
                    </strong>
                  </div>
                </label>
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
                <label
                  htmlFor="Option1"
                  className="flex cursor-pointer items-start gap-4"
                >
                  <div className="flex items-center">
                    {/* Category 01 */}
                    <input
                      type="checkbox"
                      className="size-4 rounded-sm border-gray-300"
                      id="Option1"
                    />
                  </div>

                  <div>
                    <strong className="font-medium text-gray-900">
                      {" "}
                      All Levels{" "}
                    </strong>
                  </div>
                </label>

                <label
                  htmlFor="Option2"
                  className="flex cursor-pointer items-start gap-4"
                >
                  <div className="flex items-center">
                    {/* Category 02 */}
                    <input
                      type="checkbox"
                      className="size-4 rounded-sm border-gray-300"
                      id="Option2"
                    />
                  </div>

                  <div>
                    <strong className="font-medium text-gray-900">
                      {" "}
                      Beginer{" "}
                    </strong>
                  </div>
                </label>

                <label
                  htmlFor="Option3"
                  className="flex cursor-pointer items-start gap-4"
                >
                  <div className="flex items-center">
                    {/* Category 03 */}
                    <input
                      type="checkbox"
                      className="size-4 rounded-sm border-gray-300"
                      id="Option3"
                    />
                  </div>

                  <div>
                    <strong className="font-medium text-gray-900">
                      {" "}
                      Intermediate{" "}
                    </strong>
                  </div>
                </label>
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
            {courseData &&
              courseData.map((singleCourse) => (
                <CourseCart
                  key={singleCourse.id}
                  singleCourse={singleCourse}
                ></CourseCart>
              ))}
          </div>
        </section>
      </section>
    </section>
  );
};

export default AllCourse;
