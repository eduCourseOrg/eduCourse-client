import { FaClock, FaStar } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { TbWorld } from "react-icons/tb";
import { Link } from "react-router-dom";

const CourseCart = ({ singleCourse }) => {
  const {
    name,
    _id,
    thumbnail,
    category,
    description,
    ratings,
    courseContent,
    pdf,
    level,
    quizzes,
    enrolledCount,
    createdDateTime,
    banner,
    courseLevel,
  } = singleCourse;
  console.log(singleCourse, "singleCourse in single card");
  console.log(singleCourse._id, "id singleCourse in single card");
  // console.log(category, description,name)

  return (
    <Link to={`/courses/${singleCourse._id}`} className="course-card">
      <div className="w-full border-1  rounded-md border-gray-300 p-2 h-full">
        {/* Card One start form here */}

        <div className="w-full h-[460px] p-2 bg-white">
          {/* Card Image Section */}
          <div className="w-full h-[45%] mb-3">
            <img src={thumbnail} alt="" className="w-full h-full" />
          </div>
          {/* Card Content Section */}
          <div className="w-full h-[55%] px-3 flex flex-col gap-1">
            <h1 className="text-2xl font-bold">{name}</h1>
            <div className="flex items-center justify-between">
              <span className="text-sm text-lime-900 font-bold">
                {category}
              </span>
              <h2 className="text-xl font-bold">$99</h2>
            </div>
            <div>
              <h2 className="flex items-center">
                <FaStar className="text-yellow-400"></FaStar>
                <FaStar className="text-yellow-400"></FaStar>
                <FaStar className="text-yellow-400"></FaStar>
                <FaStar className="text-yellow-400"></FaStar>
                <FaStar className="text-yellow-400"></FaStar>({ratings})
              </h2>
            </div>
            <h3>{description}</h3>
            <hr className="bg-primary h-[2px] mt-5" />
            <div className="mt-2 flex items-center justify-between font-semibold">
              <span className="flex items-center gap-1">
                <FaClock></FaClock> {enrolledCount}
              </span>
              <span className="flex items-center gap-1">
                <GiProgression></GiProgression> {level}
              </span>
              <span className="flex items-center gap-1">
                <TbWorld></TbWorld> English
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCart;
