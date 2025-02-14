import { NavLink } from "react-router-dom";
import courseBanner1 from '/images/course-banner/course-banner-3.jpg'
import { FaClock, FaStar } from "react-icons/fa";
import { PiCellSignalFullBold } from "react-icons/pi";
import { TbWorld } from "react-icons/tb";
import { useQuery } from '@tanstack/react-query';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './PopularCourse';
import { useState } from "react";

const PopularCourse = () => {
    const [select, setSelect] = useState('All')
    const {data: courses = [], isLoading } = useQuery({
        queryKey: ['course'],
        queryFn: async() => {
            const res = await fetch('http://localhost:3000/courses')
            const data = await res.json()
            return data;
        }

    })

    if (isLoading) {
        return <div className="w-full h-[100vh] flex items-center justify-center"><h1 className="text-5xl">Loading....</h1></div>
    }
    return (
        <div className="w-full h-[100vh] bg-secondary p-4 flex flex-col gap-3">
            <div className="w-full flex items-center justify-between">
                <div className="flex flex-col">
                    <h5 className="text-sm">eduCourse</h5>
                    <h2 className="text-3xl font-bold">Popular Courses</h2>
                </div>
                <div className="flex gap-7 bg-white">
                    <NavLink onClick={()=> setSelect('All')} className={`px-4 py-2 ${select == "All" && 'bg-primary'}`}>All</NavLink>
                    <NavLink onClick={()=> setSelect('Data Science')} className={`px-4 py-2 ${select == 'Data Science' && 'bg-primary'}`}>Data Science</NavLink>
                    <NavLink onClick={()=> setSelect('Cyber Security')} className={`px-4 py-2 ${select == 'Cyber Security' && 'bg-primary'}`}>Cyber Security</NavLink>
                    <NavLink onClick={()=> setSelect('Development')} className={`px-4 py-2 ${select == 'Development' && 'bg-primary'}`}>Development</NavLink>
                    <NavLink onClick={()=> setSelect('Graphic Design')} className={`px-4 py-2 ${select == 'Graphic Design' && 'bg-primary'}`}>Graphic Design</NavLink>
                </div>
            </div>

            <div className="w-full h-[86%] flex gap-4">
                <Swiper
                    modules={[Pagination]}
                    slidesPerView={3}
                    grabCursor={true}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                        containerClass: 'pagination-container'
                    }}
                >
                    {
                        (courses.filter(course => {
                            if (select == "All") {
                                return true
                            } else if (select == "Development") {
                                return course.category == "Web Development"
                            } else if (select == "Data Science") {
                                return course.category == "Data Science"
                            } else if (select == "Cyber Security") {
                               return  course.category == "Cyber Security"
                            } else if (select == "Graphic Design") {
                                return course.category == "Graphic Design"
                            }
                    })).map((course, idx) => <SwiperSlide key={idx} className="w-full h-full bg-white">
                    {/* Card Image Section */}
                    <div className="w-full h-[45%] mb-3">
                        <img src={courseBanner1} alt="" className="w-full h-full" />
                    </div>
                    {/* Card Content Section */}
                    <div className="w-full h-[55%] px-3 flex flex-col gap-1">
                        <h1 className="text-2xl font-bold">{course.name}</h1>
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold">By: Md. Foysal Uddin</span>
                            <h2 className="text-xl font-bold">$99</h2>
                        </div>
                        <div>
                            <h2 className="flex items-center">
                                <FaStar className="text-yellow-400"></FaStar>
                                <FaStar className="text-yellow-400"></FaStar> 
                                <FaStar className="text-yellow-400"></FaStar> 
                                <FaStar className="text-yellow-400"></FaStar> 
                                <FaStar className="text-yellow-400"></FaStar> 
                                (2)
                            </h2>
                        </div>
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, modi.</h3>
                        <hr className="bg-primary h-[2px] mt-5"/>
                        <div className="mt-2 flex items-center justify-between font-semibold">
                            <span className="flex items-center gap-1"><FaClock></FaClock> 3 Days</span>
                            <span className="flex items-center gap-1"><PiCellSignalFullBold></PiCellSignalFullBold> Beginner</span>
                            <span className="flex items-center gap-1"><TbWorld></TbWorld> English</span>
                        </div>
                </div>
                </SwiperSlide>)
                }
                </Swiper>
                
            </div>
            
        </div>
    );
};

export default PopularCourse;