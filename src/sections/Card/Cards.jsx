import React from 'react';
import SwiperCards from './../../components/SwiperSliders/SwiperCards/SwiperCards';
import Bg from '../../components/Bg/Bg';
import './Cards.css'
function Cards({ cardInfo }) {
  return (
    <>
    
    <div className='  '>
      <Bg/>
    </div>
      <div className='my-16 relative hidden md:grid md:gap-8  md:grid-cols-2 xl:grid-cols-3 xl:gap-8 mx-16'>
        {cardInfo.map(card =>
          <div key={card.id} className='card relative bg-white space-y-6 px-6 py-6 '>
            <div className=' flex justify-between items-start'>
              <p className=' text-gray-400 text-lg font-bold'>{card.subTitle}</p>
              <p className=' text-violet-800 font-bold text-lg'>{card.logo}</p>
            </div>
            <div className='flex gap-9  flex-1 justify-center items-center flex-col'>
              <div className='  flex justify-center items-center w-16 h-16 bg-violet-200  rounded-full'>
                <img src={card.iconUrl} alt={card.title} className=' w-12 h-12 ' />
              </div>
              <div>
                <h3 className=' text-2xl font-bold'>{card.title}</h3>
              </div>
              <div className=' text-center'>
                <p className=' text-gray-600 pb-16 mb-3 leading-7'>{card.description}</p>
              </div>
            </div>
            <div className='card-bottom-line'></div>
          </div>)}
      </div>
      <div className=' md:hidden sm:block relative'>
        <SwiperCards allCard={cardInfo} />
      </div>
    </>
  );
}

export default Cards;