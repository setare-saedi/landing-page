import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './SwiperSliderPerView.css';

// import required modules
// import { Pagination } from 'swiper/modules';

function SwiperSliderPerView({ allSkills }) {
    const [isShowReadMore, setIsShowReadMore] = useState(false);
    return (
        <>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                // modules={[Pagination]}
                className="swiper-per-view"
            >
                {
                    allSkills.map((skill) => (
                        <SwiperSlide className=' min-h-max  swiper-slide-per-view flex flex-row justify-center items-center p-6 bg-violet-50' key={skill.id}>
                            <div className=''>
                                <h3 className=' text-xl font-bold'>{skill.title}</h3>
                                <div className='  text-sm  mt-2 text-justify '>
                                    {skill.description.length > 250 ?
                                        <p className=' '>
                                            {skill.description.substring(0, 250)}
                                            {
                                                !isShowReadMore ?
                                                    <button className=' bg-black text-red-700  ' onClick={() => setIsShowReadMore(!isShowReadMore)}>
                                                        ادامه مطلب ...
                                                    </button>
                                                    :
                                                    <>{skill.description.substring(250, skill.description.length)}</>
                                            }
                                        </p>
                                        :
                                        <p>{skill.description}</p>
                                    }
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }


            </Swiper>
        </>
    );
}

export default SwiperSliderPerView;