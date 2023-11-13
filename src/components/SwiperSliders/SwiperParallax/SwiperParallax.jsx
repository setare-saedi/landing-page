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
                    className="parallax-bg"
                    style={{
                        'backgroundImage':
                            'url(./../../img/b1.png)',
                    }}
                    data-swiper-parallax="10%"
                ></div>
                {
                    allSkills.map((skill) => (
                        <>
                            <SwiperSlide key={skill.id} className='swiper-slide-parallax'>
                                <div className=" text-xl font-bold" data-swiper-parallax="-300" >
                                    {skill.title}
                                </div>
                                <div className=" text-lg" data-swiper-parallax="-200">
                                    <p>{skill.description}</p>
                                </div>

                            </SwiperSlide>
                        </>
                    ))
                }

            </Swiper>
        </>
    );
}

export default SwiperParallax;