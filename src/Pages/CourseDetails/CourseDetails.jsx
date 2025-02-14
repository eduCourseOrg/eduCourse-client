import { FaStar } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { GiNetworkBars } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import image1 from "/images/icons/students/svg-icon/icon-5.svg";
const CourseDetails = () => {
  return (
    <div className="w-10/12 mx-auto">
      <h1 className="text-3xl font-bold text-primary text-center mb-4">
        Video Section
      </h1>
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2 border-2 border-red-500">
          <h1 className="text-3xl font-semibold mb-2">Course Name</h1>
          <div className="w-6/12 grid grid-cols-3 gap-2 mb-4">
            <div
              className="flex gap-2 items-center 
                    "
            >
              <FaStar className="text-primary" />
              <p>4.50/5.00</p>
            </div>
            <div
              className="flex gap-2 items-center 
                    "
            >
              <FaUserGraduate className="text-primary" />
              <p>12K Enrolled</p>
            </div>
            <div
              className="flex gap-2 items-center 
                    "
            >
              <GiNetworkBars className="text-primary" />
              <p>All Levels</p>
            </div>
          </div>
          <div className="flex justify-between items-center mb-4">
            <div className="flex  items-center w-1/2 gap-4">
              <img src={image1} alt="" className="w-1/12" />
              <div>
                <h5>Instructor Name</h5>
                <p>Instructor Designation</p>
              </div>
            </div>
            <div className="gap-4 flex">
              <button className="btn">Follow</button>
              <button className="btn">Share</button>
            </div>
          </div>
          <div>
            <div className="flex gap-4 bg-secondary mb-4">
              <NavLink className="px-4 py-2 bg-primary">Overview</NavLink>
              <NavLink className="p-2">Reviews</NavLink>
              <NavLink className="p-2">FAQ</NavLink>
              <NavLink className="p-2">Comment</NavLink>
            </div>
            <div>
              <h1 className="text-xl font-semibold mb-4">Course Description</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consectetur labore ullam illum sunt est aliquam nisi, vero
                veniam accusantium nam impedit laboriosam dolor! Consequuntur
                voluptates labore omnis assumenda et. Quia illo ex porro totam
                earum tenetur cupiditate reprehenderit vitae nam in magnam,
                nulla architecto modi! Non delectus nesciunt nostrum fuga
                commodi debitis rem itaque animi sint? Neque animi natus dolor
                nulla quos accusamus id quas dignissimos, aperiam similique?
                Voluptatum molestiae labore vitae quaerat, esse aliquam voluptas
                excepturi. Dignissimos, possimus, quisquam quam cumque illum
                labore repellendus error aut doloribus voluptas nesciunt nam
                soluta non qui? Fugiat facilis eius architecto praesentium illo?
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 border-2 border-red-500">
          <h1>Right Side</h1>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
