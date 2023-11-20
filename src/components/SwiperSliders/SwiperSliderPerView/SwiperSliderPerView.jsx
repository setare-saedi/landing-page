import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './SwiperSliderPerView.css';

// import required modules
// import { Pagination } from 'swiper/modules';
 import ProgressBar1 from '../../ProgressBar/ProgressBar';
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
                        <SwiperSlide className='bg-slide  min-h-max   swiper-slide-per-view' key={skill.id}>
                                <div>
                                    <h3 className=' text-xl font-bold'>{skill.title}</h3>
                                </div>
                                <div className='z-20 leading-loose text-sm  mt-2 text-justify '>
                                    {skill.description.length > 250 ?
                                        <p className=' '>
                                            {skill.description.substring(0, 250)}
                                            {
                                                !isShowReadMore ?
                                                    <button className=' text-violet-800 px-2 text-md font-bold ' onClick={() => setIsShowReadMore(!isShowReadMore)}>
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
                                <div className=' w-2/4 my-4 mx-auto z-10'>
                                <ProgressBar1 com={skill.level}/>
                                </div>
                        </SwiperSlide>
                    ))
                }


            </Swiper>
        </>
    );
}

export default SwiperSliderPerView;