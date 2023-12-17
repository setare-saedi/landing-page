import React from 'react';
import SwiperCards from './../../components/SwiperSliders/SwiperCards/SwiperCards';
import SwiperFreeMode from '../../components/SwiperSliders/SwiperFreeMode/SwiperFreeMode';
import Bg from '../../components/Bg/Bg';
function Cards({ cardInfo }) {
  return (
    <>
      <div >
        <Bg />
      </div>
      <div className='cards '>
      <SwiperFreeMode allInfo={cardInfo} />
      </div>
      <div className='cards-sm'>
        <SwiperCards allCard={cardInfo} />
      </div>
    </>
  );
}

export default Cards;