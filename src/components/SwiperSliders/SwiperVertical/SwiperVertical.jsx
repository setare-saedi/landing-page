import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './SwiperVertical.css';

// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';


function SwiperVertical({ info }) {

  return (
    <>

<div className='vertical-bg-strip'></div>
<div className='vertical-bg-dots'></div>
      <Swiper

        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className=" swiper-vertical "
      >
        {
          info.map((card, index) => (
            <div className='  relative' key={card.id}>
              <SwiperSlide className=' swiper-slide-vertical' key={card.id}>
                <div className=' vertical-card px-6 mx-12 space-y-8 pt-6 pb-12'>
                  <div className='flex justify-between items-center'>
                    <span className=' text-sm lg:text-lg text-gray-400'>
                      {card.subTitle}
                    </span>
                    <span className='text-sm lg:text-lg text-violet-800 font-bold'>
                      {card.logo}
                    </span>
                  </div>
                  <div className=' text-lg lg:text-2xl font-bold text-violet-900'>{card.title}</div>
                  <div className='  pb-10  text-sm lg:text-xl'>
                    <p className=' leading-loose'>{card.description}</p>
                  </div>

                </div>
                <div className=' z-50 relative flex justify-center items-end '>
                <div className='num  border-2 border-violet-800 flex justify-center items-center rounded-full text-sm lg:text-3xl font-bold p-2 w-12 h-12 lg:w-16 lg:h-16 bg-violet-800 text-white'>
                  {index + 1}
                </div>
              </div>
              </SwiperSlide>
             
            </div>
          ))
        }

        <div className=' relative'>
          <div className=' vertical-bg-strip'></div>
        </div>
      </Swiper>
    </>
  );
}

export default SwiperVertical;