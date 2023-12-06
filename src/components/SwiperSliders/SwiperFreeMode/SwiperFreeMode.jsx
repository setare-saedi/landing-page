import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './SwiperFreeMode.css';

// import required modules
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';

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
                modules={[Autoplay, FreeMode, Pagination]}
                className="SwiperFreeMode"
                autoplay={{
                    delay: 9000,
                    disableOnInteraction: false,
                }}
                slidesPerView={0}
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
                            <SwiperSlide className=' swiper-slide-free card relative space-y-6 px-6 py-6 group overflow-hidden bg-white  pt-10 pb-8 transition-all duration-700 hover:-translate-y-1  sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10' key={card.id}>
                                    <div className=' flex justify-between items-start text-gray-600 transition-all duration-700 group-hover:text-gray-200'>
                                        <p className='  text-lg font-bold'>{card.subTitle}</p>
                                        <p className='  font-bold text-lg'>{card.logo}</p>
                                    </div>

                                    <div className='flex gap-9  flex-1 justify-center items-center flex-col'>
                                        <div className='  flex relative justify-center items-center w-28 h-28  place-items-center rounded-full bg-violet-400 transition-all duration-700 group-hover:bg-white'>
                                            <span className="z-[-1] absolute top-0  h-28 w-28 rounded-full bg-violet-400 transition-all duration-700 group-hover:scale-[10] "></span>
                                            <img src={card.iconUrl} alt={card.title} className=' w-16 h-16 z-20' />
                                        </div>
                                        <div>
                                            <h3 className=' text-2xl font-bold text-violet-800 transition-all duration-700 group-hover:text-violet-900'>{card.title}</h3>
                                        </div>
                                        <div className='text-center  text-gray-900 transition-all duration-700 group-hover:text-white'>
                                            <p className='  pb-16 mb-3 leading-7 max-sm:text-justify'>{card.description}</p>
                                        </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </div>
            </Swiper>
        </>
    );
}

export default SwiperFreeMode;