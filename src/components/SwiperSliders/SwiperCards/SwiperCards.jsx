import React from 'react';
import './SwiperCards.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards } from 'swiper/modules';


function SwiperCards({ allCard }) {
  return (
    <div className=' flex justify-center items-center'>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper swiper-card"
      >
        {
          allCard.map((card) => (
            <SwiperSlide className='swiper-slide-card' key={card.id}>
              <div  className='p-6 text-center flex flex-col items-center space-y-2 overflow-hidden'>
                <div className=' flex justify-center items-center w-11 h-11 bg-violet-200  rounded-full'>
                  <img src={card.iconUrl} alt={card.title} width={24} height={24} />
                </div>
                <h3 className=' text-xl font-bold'>{card.title}</h3>
                <p className=' text-sm text-black mt-2'>{card.description}</p>
              </div>
              </SwiperSlide>
          ))
        }

      </Swiper>
    </div>
  );
}

export default SwiperCards;