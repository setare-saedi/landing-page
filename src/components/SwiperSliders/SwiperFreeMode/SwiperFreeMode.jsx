import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './SwiperFreeMode.css';

// import required modules
import {  Autoplay, FreeMode, Pagination } from 'swiper/modules';

function SwiperFreeMode({ allInfo }) {

    return (
        <>
            <Swiper
                // slidesPerView={numItems}
                spaceBetween={40}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[ Autoplay, FreeMode, Pagination]}
                className="SwiperFreeMode"
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                slidesPerView={1}
                lazy="true"
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    900: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                // modules={[Pagination]}
            >
                <div className=' md:grid md:gap-8  md:grid-cols-2 xl:grid-cols-3 xl:gap-8 mx-16'>
                    {
                        allInfo.map((card) => (
                            <SwiperSlide className=' swiper-slide-free card relative space-y-6 px-6 py-6' key={card.id}>
                                <div className=' flex justify-between items-start'>
                                    <p className=' text-gray-400 text-lg font-bold'>{card.subTitle}</p>
                                    <p className=' text-violet-800 font-bold text-lg'>{card.logo}</p>
                                </div>
                                <div className='flex gap-9  flex-1 justify-center items-center flex-col'>
                                    <div className='  flex justify-center items-center w-20 h-20 bg-violet-200  rounded-full'>
                                        <img src={card.iconUrl} alt={card.title} className=' w-16 h-16 ' />
                                    </div>
                                    <div>
                                        <h3 className=' text-2xl font-bold'>{card.title}</h3>
                                    </div>
                                    <div className=' text-center'>
                                        <p className=' text-gray-600 pb-16 mb-3 leading-7'>{card.description}</p>
                                    </div>
                                </div>
                                {/* <div className='card-bottom-line'></div> */}
                            </SwiperSlide>
                        ))
                    }
                </div>
            </Swiper>
        </>
    );
}

export default SwiperFreeMode;