import { FaSearch } from 'react-icons/fa';
import banner1 from '/images/compressed-banner/banner-8.jpg'
import { useEffect, useState } from 'react';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
 
    useEffect(() => {
        const interval = setInterval(() => {
        }, 3000);
        return () => clearInterval(interval);
    }, []);
    
    return (
        <div className="w-full h-[80vh] relative">
            {/* Slide Wrapper */}
            <div className="slider-wrapper w-full h-full overflow-hidden">
                {/* Slide One start here */}
                <div className="slide-1 w-full h-full bg-linear-to-r from-primary to-transparent relative">
                    {/* this div is for overlay manage */}
                    <div className='w-full h-full bg-linear-to-r from-primary from-10% to-transparent opacity-70 absolute top-0 left-0'></div>
                    {/* Image section */}
                    <img src={banner1} alt="banner1" className='w-full h-full' />
                    {/* Text and Input field Section */}
                    <div className='w-[50%] h-full flex flex-col gap-5 justify-center items-start pl-24 absolute top-0 left-0'>
                        <h1 className='text-5xl text-secondary font-bold'>2727+ Online <br /> Courses from the <br /> Best Tutors</h1>
                        {/* Input Box and serch icon */}
                        <div className='w-full relative'>
                            <input type="text" name="courseName" placeholder='What do you want to learn' id="" className=' p-3 w-full text-secondary text-lg bg-primary' />
                            <FaSearch className='absolute right-4 top-5'></FaSearch>
                        </div>
                    </div>
                </div>
                {/* Slide two start here */}
                <div className="slide-1 w-full h-full bg-linear-to-r from-primary to-transparent relative">
                    {/* this div is for overlay manage */}
                    <div className='w-full h-full bg-linear-to-r from-primary from-10% to-transparent opacity-70 absolute top-0 left-0'></div>
                    {/* Image section */}
                    <img src={banner1} alt="banner1" className='w-full h-full' />
                    {/* Text and Input field Section */}
                    <div className='w-[50%] h-full flex flex-col gap-5 justify-center items-start pl-24 absolute top-0 left-0'>
                        <h1 className='text-5xl text-secondary font-bold'>2727+ Online <br /> Courses from the <br /> Best Tutors</h1>
                        {/* Input Box and serch icon */}
                        <div className='w-full relative'>
                            <input type="text" name="courseName" placeholder='What do you want to learn' id="" className=' p-3 w-full text-secondary text-lg bg-primary' />
                            <FaSearch className='absolute right-4 top-5'></FaSearch>
                        </div>
                    </div>
                </div>
                {/* Slide three start here */}
                <div className="slide-1 w-full h-full bg-linear-to-r from-primary to-transparent relative">
                    {/* this div is for overlay manage */}
                    <div className='w-full h-full bg-linear-to-r from-primary from-10% to-transparent opacity-70 absolute top-0 left-0'></div>
                    {/* Image section */}
                    <img src={banner1} alt="banner1" className='w-full h-full' />
                    {/* Text and Input field Section */}
                    <div className='w-[50%] h-full flex flex-col gap-5 justify-center items-start pl-24 absolute top-0 left-0'>
                        <h1 className='text-5xl text-secondary font-bold'>2727+ Online <br /> Courses from the <br /> Best Tutors</h1>
                        {/* Input Box and serch icon */}
                        <div className='w-full relative'>
                            <input type="text" name="courseName" placeholder='What do you want to learn' id="" className=' p-3 w-full text-secondary text-lg bg-primary' />
                            <FaSearch className='absolute right-4 top-5'></FaSearch>
                        </div>
                    </div>
                </div>
            </div>
            {/* Slide Manager */}
            <div className='slide-manager w-[35%] h-[20%] flex justify-between absolute bottom-0 right-0 '>
                <img src={banner1} alt="Banner Image" className='w-[32%] h-full'/>
                <img src={banner1} alt="Banner Image" className='w-[32%] h-full'/>
                <img src={banner1} alt="Banner Image" className='w-[32%] h-full'/>
            </div>
        </div>
    );
};

export default Hero;