import { useEffect, useState } from "react";
import InstructorCard from "../../Components/AllInstructor/InstructorCard";

const AllInstructors = () => {
  const [instructorData, setInstructorData] = useState([]);

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
        console.log(instructorData)
      })
      .catch((error) =>
        console.error(
          "There has been a problem with your fetch operation:",
          error
        )
      );
  }, []);


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {
        
      instructorData &&
        instructorData.map((instructor, index) => {
          <InstructorCard key={index} instructor={instructor}></InstructorCard>;
        })}
    </div>
  );
};

export default AllInstructors;
