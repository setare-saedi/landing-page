import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';

import './SwiperCards.css';
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
            <SwiperSlide className='swiper-card bg-violet-300 rounded-lg p-3 flex flex-wrap flex-col items-stretch justify-center ' key={card.id}>
              <div className='flex justify-between '>
                <p className=' text-sm font-bold text-gray-500'>{card.subTitle}</p>
                <p className=' font-bold text-sm text-violet-600'>{card.logo}</p>
              </div>
              <div  className='p-6 text-center flex justify-center flex-col items-center space-y-2 overflow-hidden'>
                <div className=' flex justify-center items-center w-11 h-11 bg-violet-200  rounded-full'>
                  <img src={card.iconUrl} alt={card.title} width={24} height={24} className=''/>
                </div>
                <h3 className=' text-xl font-bold'>{card.title}</h3>
                <div className=' flex-1 text-sm  mt-2'>{card.description}</div>
              </div>
              </SwiperSlide>
          ))
        }

      </Swiper>
    </div>
  );
}

export default SwiperCards;