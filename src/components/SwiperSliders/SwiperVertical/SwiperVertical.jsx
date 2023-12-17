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

<div className='vertical-bg-wavy'></div>
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
              <SwiperSlide className=' swiper-slide-vertical ' key={card.id}>
                <div className=' vertical-card '>
                  <div className='vertical-card-header '>
                    <span className='vertical-card-header-right '>
                      {card.subTitle}
                    </span>
                    <span className='vertical-card-header-left '>
                      {card.logo}
                    </span>
                  </div>
                  <div className='vertical-card-title '>{card.title}</div>
                  <div >
                    <p className='vertical-card-text '>{card.description}</p>
                  </div>

                </div>
                <div className='vertical-footer '>
                <div className='vertical-footer-content num '>
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