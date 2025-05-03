import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import InstructorCard from "../../Components/AllInstructor/InstructorCard";
import "./AllInstructor.css";

const BackEndAllInstructors = () => {

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedSkill, setSelectedSkill] = useState("All Skill");
  const [skills,setSkills] = useState([]);
  const [sortBy, setSortBy] = useState('ratings:desc'); // Default sorting by ratings

  const [filteredInstructorData, setfilteredInstructorData] = useState([]);
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
      const fetchInstructors = async () => {
        const params = new URLSearchParams();
  
        if (searchTerm) params.append("searchTerm", searchTerm);
        if (selectedSkill && selectedSkill !== "All Skill")
          params.append("selectedSkill", selectedSkill);
        if (sortBy) params.append("sortBy", sortBy);
     
        params.append("page", page);
        params.append("limit", limit);
  
        console.log("params", params);
  
        const res = await fetch(`http://localhost:5000/instructors?${params}`);
        const json = await res.json();
  
        if (json.success) {
          setfilteredInstructorData(json.data);
          console.log("data",json.data)
          setPagination(json.pagination);
        
          console.log("skills", json.filterOptions.skills);
          setSkills(["All Skill", ...new Set(json.filterOptions.skills.map(skill=>skill.label))])
       
        }
      };
  
      fetchInstructors();
    }, [
      searchTerm,
     selectedSkill,
      page,
      limit,
      sortBy
    ]);
    console.log("search", searchTerm, "skills",skills,"data", filteredInstructorData);


  // useEffect(() => {
  //   const fetchInstructorData = async () => {
  //     try {
  //       const params = new URLSearchParams({
  //         searchTerm,
  //         selectedSkills,
  //         sortBy,
  //         page,
  //         limit,
  //       });
  //       const response = await fetch(
  //         `http://localhost:5000/instructors?${params}`
  //       );
  //       const json = await response.json();
  //       console.log("json", json.data);
  //       setfilteredInstructorData(json.data);
  //       setPagination(json.pagination);
  //     } catch (error) {
  //       console.log("Error fetching instructor data:", error);
  //     }
  //   };
  //   fetchInstructorData();
  // }, [searchTerm, selectedSkills, sortBy, page, limit]);
  // console.log("filteredInstructorData", filteredInstructorData);
  

  // const skills = useMemo(
  //   () => [
  //     "All Skills",
  //     ...new Set(
  //       filteredInstructorData &&
  //         filteredInstructorData
  //           .map((instructor) => instructor.bio.skills.flat())
  //           .flat()
  //     ),
  //   ],
  //   [filteredInstructorData]
  // );
  console.log("filteredInstructorData", filteredInstructorData);
  // Load data from local.json on component mount

  // console.log("All skills", skills);

 


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
            <option value="ratings:desc">Rating: High to Low</option>
            <option value="ratings:asc">Rating: Low to High</option>
          </select>
        </div>
        <div className="grid-cols-1 block h-8">
          <select
            // multiple={true}
            id="course-select"
            value={selectedSkill}
            onChange={(e) => setSelectedSkill(e.target.value)}
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
      <section className="grid grid-cols-4 gap-2 mt-4">
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
                  pagination.page === pageNum ? "active text-blue-100 h-7" : ""
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
        <select value={limit} onChange={(e) => setLimit(e)}>
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

export default BackEndAllInstructors;
