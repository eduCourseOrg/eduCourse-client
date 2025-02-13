import { useState } from 'react';
const AllCourse = () => {

  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
        setSearchQuery(e.target.value);}
 
const handleSearch=()=>{
    console.log("Searching for:", searchQuery);
    // Implement search logic here
    
}
 
    return (
      // This is for left side section 
     
     <div> 
     <section className="grid grid-cols-4 gap-4">
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
               
       </div>

     </section>

   {/* This is for Right side section
    */}
   <section></section>

     
     </div>
      
       
    );
};

export default AllCourse;