import { FaClock, FaStar } from "react-icons/fa";
import { PiCellSignalFullBold } from "react-icons/pi";
import { TbWorld } from "react-icons/tb";
import courseBanner7 from '/images/course-banner/course-banner-7.jpg';

const CourseCart = () => {
    return (
        <div className="w-full h-[86%] flex gap-4">
                {/* Card One start form here */}
                <div className="w-full h-full bg-white">
                    {/* Card Image Section */}
                    <div className="w-full h-[45%] mb-3">
                        <img src={courseBanner7} alt="" className="w-full h-full" />
                    </div>
                    {/* Card Content Section */}
                    <div className="w-full h-[55%] px-3 flex flex-col gap-1">
                        <h1 className="text-2xl font-bold">The complete Digital Marketing Bootcamp</h1>
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
                </div>
                {/* Card Two start form here */}
                <div className="w-full h-full bg-white">
                    {/* Card Image Section */}
                    <div className="w-full h-[45%] mb-3">
                        <img src={courseBanner7} alt="" className="w-full h-full" />
                    </div>
                    {/* Card Content Section */}
                    <div className="w-full h-[55%] px-3 flex flex-col gap-1">
                        <h1 className="text-2xl font-bold">The complete Digital Marketing Bootcamp</h1>
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold">By: Md. Raihan Uddin</span>
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
                </div>
                {/* Card Three start form here */}
                <div className="w-full h-full bg-white">
                    {/* Card Image Section */}
                    <div className="w-full h-[45%] mb-3">
                        <img src={courseBanner7} alt="" className="w-full h-full" />
                    </div>
                    {/* Card Content Section */}
                    <div className="w-full h-[55%] px-3 flex flex-col gap-1">
                        <h1 className="text-2xl font-bold">The complete Digital Marketing Bootcamp</h1>
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-semibold">By: Md. Ariful Islam</span>
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
                            <span className="flex items-center gap-1"><PiCellSignalFullBold></PiCellSignalFullBold> Intermediate</span>
                            <span className="flex items-center gap-1"><TbWorld></TbWorld> English</span>
                        </div>
                </div>
                </div>
            </div>
    );
};

export default CourseCart;