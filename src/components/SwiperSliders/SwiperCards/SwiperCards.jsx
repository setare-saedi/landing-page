import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards } from 'swiper/modules';


function SwiperCards({ allCard }) {
  return (
    <div className=' p-6'>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className=" w-[80%] min-h-max"
      >
        {
          allCard.map((card) => (
            <SwiperSlide className='swiper-card  ' key={card.id}>
              <div className='swiper-card-header  '>
                <p className='swiper-card-header-right '>{card.subTitle}</p>
                <p className='swiper-card-header-left '>{card.logo}</p>
              </div>
              <div  className='swiper-card-body '>
                <div className='swiper-card-img '>
                  <img src={card.iconUrl} alt={card.title} width={24} height={24} />
                </div>
                <h3 className=' text-xl font-bold'>{card.title}</h3>
                <div className='swiper-card-text '>{card.description}</div>
              </div>
              </SwiperSlide>
          ))
        }

      </Swiper>
    </div>
  );
}

export default SwiperCards;