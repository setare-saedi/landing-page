import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './SwiperParallax.css';

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';


function SwiperParallax({ allSkills }) {
    return (
        <>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                speed={900}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation]}
                className=" swiper-parallax"
            >
                <div
                    slot="container-start"
                    className="parallax-bg "
                    style={{
                        'backgroundImage':
                            'url(./../../img/bg-pa.jpg)',

                    }}
                    data-swiper-parallax="10%"
                >

                </div>
                {
                    allSkills.map((skill) => (
                        <div key={skill.id}>
                            <SwiperSlide className='swiper-slide-parallax space-y-3 ' key={skill.id}>
                                <div className=" text-3xl text-violet-300 uppercase font-bold" data-swiper-parallax="-300" >
                                    {skill.title}
                                </div>
                                <div className=" text-lg leading-loose text-justify max-md:leading-loose max-md:text-sm" data-swiper-parallax="-200">
                                    <p className=' md:w-[70%]'>
                                        {skill.description}
                                    </p>
                                </div>

                            </SwiperSlide>
                        </div>
                    ))
                }

            </Swiper>
        </>
    );
}

export default SwiperParallax;