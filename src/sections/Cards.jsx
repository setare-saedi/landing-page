import React from 'react';
import SwiperCards from './../components/SwiperSliders/SwiperCards/SwiperCards';

function Cards({cardInfo}) {
    return (
        <>
        <div className='my-16 hidden md:grid md:gap-4  md:grid-cols-2 lg:grid-cols-4 lg:gap-1 xl:gap-4 mx-16'>
        {cardInfo.map(card => <div key={card.id} className=' space-y-3 p-6 flex flex-1 flex-col border-2 border-gray-100 shadow-xl  rounded-md'>
          <div className=' flex justify-center items-center w-11 h-11 bg-violet-200  rounded-full'>
            <img src={card.iconUrl} alt={card.title} width='24px' height='24px' />
          </div>
          <h3 className=' text-2xl font-bold'>{card.title}</h3>
          <p className=' text-gray-600'>{card.description}</p>
        </div>)}
      </div>
      <div className=' md:hidden sm:block relative'>
      <SwiperCards  allCard={cardInfo} />
      </div>
      </>
    );
}

export default Cards;