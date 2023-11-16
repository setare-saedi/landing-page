import React from 'react';
import SwiperCards from './../../components/SwiperSliders/SwiperCards/SwiperCards';
import SwiperFreeMode from '../../components/SwiperSliders/SwiperFreeMode/SwiperFreeMode';
import Bg from '../../components/Bg/Bg';
import './Cards.css'
function Cards({ cardInfo }) {
  return (
    <>
      <div >
        <Bg />
      </div>
      <div className='my-16 relative hidden md:block mx-6'>
      <SwiperFreeMode allInfo={cardInfo} />
      </div>
      <div className=' md:hidden sm:block relative'>
        <SwiperCards allCard={cardInfo} />
      </div>
    </>
  );
}

export default Cards;