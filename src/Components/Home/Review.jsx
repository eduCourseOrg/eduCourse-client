import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

const Review = () => {
    return (
        <div className="w-full h-[80vh] p-10 flex relative items-center justify-center border-1 border-red-500">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                autoplay={{
                    delay: 4000,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="w-full h-full"
            >
                <SwiperSlide className='p-6 bg-red-500'>
                    
                </SwiperSlide>
                <SwiperSlide className='p-6 bg-green-500 '>
                    
                </SwiperSlide>
                <SwiperSlide className='p-6 bg-yellow-500 '>
                    
                </SwiperSlide>
                
            </Swiper>
            {/* <div className='w-full h-full border-1 flex p-4 relative items-center justify-center'>
                <div className='w-[50%] h-full border-1 border-yellow-300 absolute translate-x-[-40%] scale-75 bg-yellow-500'>hello1</div>
                <div className='w-[50%] h-full border-3 border-green-300 absolute bg-red-500 z-10 shadow-xl shadow-gray-600'>hello2</div>
                <div className='w-[50%] h-full border-1 border-green-300 absolute translate-x-[40%] bg-green-500 scale-75'>hello3</div>
            </div> */}
        </div>
    );
};

export default Review;