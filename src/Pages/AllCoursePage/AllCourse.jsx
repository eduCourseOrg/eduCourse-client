import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import CourseCart from "../../Components/AllCourse/CourseCart";
const AllCourse = () => {
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
        console.log("data", courseData);
        setCourseData(data);
      })
      .catch((error) =>
        console.error(
          "There has been a problem with your fetch operation:",
          error
        )
      );
  }, []);

  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
    // Implement search logic here
  };

  return (
    // This is for left side section

    <div className="grid grid-cols-1 md:grid-cols-4">
      <section className="grid-cols-1 lg:mr-4 md:mr-2">
        {/* section for search input */}
        <div className="search-bar relative w-full justify-between items-center flex mb-2">
          <input
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            placeholder="Search..."
            className=" rounded-sm w-full border-slate-200 border-[2px] search-input "
          />
          <FaSearch className="absolute right-5 top-2 font-light text-slate-600" />{" "}
          {/* Search Icon */}
          <button className="search-btn" onClick={() => handleSearch}></button>
        </div>

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

        {/* line break */}
      </section>

      {/* This is for Right side section */}
      <section className="grid-cols-1 md:grid-cols-2 gap-2">
        {/*
 right-side select option bar
*/}

        <div className="block w-full">
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-600 w-full"
          >
            Course Category
          </label>
          <select
            id="countries"
            className="h-12 border border-gray-300 text-gray-600 text-base rounded-lg block w-full py-2.5 px-4 focus:outline-none"
          >
            <option selected>Latest</option>
            <option value="web-development">Web Development</option>
            <option value="digital-marketing">Digital Marketing</option>
            <option value="video-editing">video Editing</option>
          </select>
        </div>
        <div className="grid-cols-1 md:grid-cols-2 lg:gird-cols-3 gap-2">
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
    </div>
  );
};

export default AllCourse;
