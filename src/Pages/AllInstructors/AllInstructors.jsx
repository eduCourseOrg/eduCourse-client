import { useEffect, useMemo, useState } from "react";
import { FaSearch } from "react-icons/fa";
import InstructorCard from "../../Components/AllInstructor/InstructorCard";

const AllInstructors = () => {
  const [instructorData, setInstructorData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [selectedSkills, setSelectedSkills] = useState("All Skills");
  const [sortBy, setSortBy] = useState("");
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
  console.log("instructorData", instructorData);
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
    if (sortBy === "Descending") {
      filtered.sort((a, b) => b.ratings - a.ratings); // Descending order
    } else if (sortBy === "Ascending") {
      filtered.sort((a, b) => a.ratings - b.ratings); // Ascending order
    }

    setfilteredInstructorData(filtered);

  }

       //Calculatie pagination

       const indexOfLastInstructor = currentPage * itemsPerPage;
       const indexOfFirstInstructor = indexOfLastInstructor - itemsPerPage;
       const currentInstructors = filteredInstructorData.slice(indexOfFirstInstructor, indexOfLastInstructor );
     
       // Step 3: Create Page Buttons Dynamically
     // Generate page numbers dynamically based on the total number of items.
     
     const totalPages = Math.ceil(instructorData.length / itemsPerPage);
     const pageNumbers=Array.from({length:totalPages},(_,i)=>(i+1))
     

  const handlePageChanges=(pageNumber)=>{
    setCurrentPage(pageNumber)
  }
  
  //Handle Previous and Next page function
  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
  };
  
  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
  };
  
  const handleItemsPerPageChanges=(e)=>{
  
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); //reset to first page every time items per page changes
  
  }
  useEffect(() => {
    applyFilters();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm,sortBy, selectedSkills]);

  return (
    <section className="p-4 border border-primary rounded-sm">
      <section className="all-filter-section mb-2 grid grid-cols-1 text-center md:grid-cols-3 gap-2">
        {/* section for search input  */}
        <div className="search-bar relative w-full justify-between items-center h-8 flex ">
          {" "}
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            placeholder="Search..."
            className=" rounded-sm w-full h-8 border-slate-200 border-[2px] search-input py-1 px-4"
          />
          <FaSearch className="absolute right-5 top-2 font-light text-slate-600" />{" "}
          {/* Search Icon */}
          <button className="search-btn"></button>
        </div>

        {/*  select sorting filter */}
        <div className="grid-cols-1 h-8 block ">
          <select
            id="course-select"
            onChange={(e) => setSortBy(e.target.value)}
            className="h-8 rounded-sm w-full border-slate-200 border-[2px] text-gray-600 text-base block py-1 px-4 focus:outline-none"
          >
            <option selected disabled value="">
              Sort By
            </option>
            <option value="Descending">Rating: High to Low</option>
            <option value="Ascending">Rating: Low to High</option>
          </select>
        </div>
        <div className="grid-cols-1 block h-8">
          <select
            // multiple={true}
            id="course-select"
            value={selectedSkills}
            onChange={(e) => setSelectedSkills(e.target.value)}
            className="h-8 rounded-sm w-full border-slate-200 border-[2px] text-gray-600 text-base block py-1 px-4 focus:outline-none"
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
        {currentInstructors &&
          currentInstructors.map((instructor, index) => (
            <InstructorCard
              key={index}
              instructor={instructor}
            ></InstructorCard>
          ))}
      </div>

      {/* Items Per Page */}

      {/* Pagination */}
      <section className="grid grid-cols-4 gap-2 mt-4">
        <div className="pagination col-span-3 flex justify-center items-center gap-1">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            ◀ Prev
          </button>
          {pageNumbers.map((number)=><button key={number} className= {`bg-cyan-900 text-cyan-100 h-6 rounded-sm w-8 ${currentPage===number && 'active'}`} onClick={()=>handlePageChanges(number)}>
            {number}
            </button>)}
          <button
            disabled={currentPage === totalPages}
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
  );
};

export default AllInstructors;
