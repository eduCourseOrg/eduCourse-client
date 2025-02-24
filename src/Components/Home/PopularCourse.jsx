import { NavLink } from "react-router-dom";
import courseBanner1 from "/images/course-banner/course-banner-3.jpg";
import { FaClock, FaStar } from "react-icons/fa";
import { PiCellSignalFullBold } from "react-icons/pi";
import { TbWorld } from "react-icons/tb";
import { useQuery } from "@tanstack/react-query";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";

const PopularCourse = () => {
  const [select, setSelect] = useState("All");
  const [dWidth, setDWidth] = useState(0);

  useEffect(() => {
    setDWidth(window.innerWidth);
  }, []);

  const { data: courses = [], isLoading } = useQuery({
    queryKey: ["course"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/courses");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="w-full h-[100vh] flex items-center justify-center">
        <h1 className="text-5xl">Loading....</h1>
      </div>
    );
  }
  return (
    <div className="w-full 2xl:h-[100vh] bg-white shadow-lg rounded-md p-4 flex flex-col gap-3">
      <div className="w-full lg:flex items-center justify-between">
        <div className="text-center lg:text-start mb-3 lg:mb-0">
          <h5 className="text-sm">eduCourse</h5>
          <h2 className="text-3xl font-bold text-[var(--color-primary)]">
            Popular Courses
          </h2>
        </div>
        <div className="flex gap-3 xl:gap-6 bg-white sm:justify-between">
          <NavLink
            onClick={() => setSelect("All")}
            className={`px-2 md:px-4 py-1 md:py-2 ${
              select == "All" && "bg-primary text-[var(--color-secondary)]"
            } text-[var(--color-primary)] flex items-center`}
          >
            All
          </NavLink>
          <NavLink
            onClick={() => setSelect("Data Science")}
            className={`px-2 md:px-4 py-1 md:py-2 ${
              select == "Data Science" &&
              "bg-primary text-[var(--color-secondary)]"
            } text-[var(--color-primary)] flex items-center`}
          >
            Data Science
          </NavLink>
          <NavLink
            onClick={() => setSelect("Cyber Security")}
            className={`px-2 md:px-4 py-1 md:py-2 ${
              select == "Cyber Security" &&
              "bg-primary text-[var(--color-secondary)]"
            } text-[var(--color-primary)] flex items-center`}
          >
            Cyber Security
          </NavLink>
          <NavLink
            onClick={() => setSelect("Development")}
            className={`px-2 md:px-4 py-1 md:py-2 ${
              select == "Development" &&
              "bg-primary text-[var(--color-secondary)]"
            } text-[var(--color-primary)] flex items-center`}
          >
            Development
          </NavLink>
          <NavLink
            onClick={() => setSelect("Graphic Design")}
            className={`px-2 md:px-4 py-1 md:py-2 ${
              select == "Graphic Design" &&
              "bg-primary text-[var(--color-secondary)]"
            } text-[var(--color-primary)] flex items-center`}
          >
            Graphic Design
          </NavLink>
        </div>
      </div>

      <div className="w-full h-[86%] flex gap-4 bg-[var(--color-secondary)] p-3 rounded-md">
        <Swiper
          modules={[Pagination]}
          slidesPerView={dWidth < 640 ? 1 : dWidth > 768 ? 3 : 2}
          grabCursor={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          className="mySwiper w-full h-full"
        >
          {courses
            .filter((course) => {
              if (select == "All") {
                return true;
              } else if (select == "Development") {
                return course.category == "Web Development";
              } else if (select == "Data Science") {
                return course.category == "Data Science";
              } else if (select == "Cyber Security") {
                return course.category == "Cyber Security";
              } else if (select == "Graphic Design") {
                return course.category == "Graphic Design";
              }
            })
            .map((course, idx) => (
              <SwiperSlide
                key={idx}
                className="w-full h-full bg-white rounded-md pb-4"
              >
                {/* Card Image Section */}
                <div className="w-full h-[45%] mb-3">
                  <img
                    src={courseBanner1}
                    alt=""
                    className="w-full h-full rounded-md"
                  />
                </div>
                {/* Card Content Section */}
                <div className="w-full h-[52%] px-3 flex flex-col gap-1">
                  <h1 className="text-lg xl:text-2xl font-bold">
                    {course.name}
                  </h1>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold">
                      By: Md. Foysal Uddin
                    </span>
                    <h2 className="text-md xl:text-xl font-bold">$99</h2>
                  </div>
                  <div className="flex gap-2 text-sm xl:text-md">
                    <h2 className="flex items-center">
                      <FaStar className="text-yellow-400"></FaStar>
                      <FaStar className="text-yellow-400"></FaStar>
                      <FaStar className="text-yellow-400"></FaStar>
                      <FaStar className="text-yellow-400"></FaStar>
                      <FaStar className="text-yellow-400"></FaStar>
                    </h2>
                    <span>(2)</span>
                  </div>
                  <h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Suscipit, modi.
                  </h3>
                  <hr className="bg-primary h-[2px] mt-3 2xl:mt-5" />
                  <div className="flex items-center justify-between font-semibold grow ">
                    <span className="flex items-center gap-1">
                      <FaClock></FaClock> 3 Days
                    </span>
                    <span className="flex items-center gap-1">
                      <PiCellSignalFullBold></PiCellSignalFullBold> Beginner
                    </span>
                    <span className="flex items-center gap-1">
                      <TbWorld></TbWorld> English
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularCourse;
