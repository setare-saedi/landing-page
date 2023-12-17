import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

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
                <div className='swiper-free-container '>
                    {
                        allInfo.map((card) => (
                            <SwiperSlide className=' swiper-slide-free group' key={card.id}>
                                    <div className='swiper-free-header '>
                                        <p className='  text-lg font-bold'>{card.subTitle}</p>
                                        <p className='  font-bold text-lg'>{card.logo}</p>
                                    </div>

                                    <div className='swiper-free-body '>
                                        <div className='swiper-free-img '>
                                            <span className="swiper-free-img-effect "></span>
                                            <img src={card.iconUrl} alt={card.title} className=' w-16 h-16 z-20' />
                                        </div>
                                        <div>
                                            <h3 className='swiper-free-title '>{card.title}</h3>
                                        </div>
                                        <div className='swiper-free-description '>
                                            <p className='swiper-free-text  '>{card.description}</p>
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