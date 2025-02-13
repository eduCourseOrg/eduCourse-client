import  { useState } from 'react';
const AllCourse = () => {

  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
        setSearchQuery(e.target.value);}
 
const handleSearch=()=>{
    console.log("Searching for:", searchQuery);
    // Implement search logic here
    
}
 

  




    return (
        <div>
               <div className="search-bar">
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search..."
        className="search-input"
      />
      <button className="search-btn" onClick={()=>handleSearch}>
        <i className="fas fa-search"></i> {/* Search Icon */}
      </button>
    </div>
                   <h1>This is all course page</h1>   
        </div>
    );
};

export default AllCourse;