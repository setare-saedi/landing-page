import React from "react";
import SwiperVertical from './../../components/SwiperSliders/SwiperVertical/SwiperVertical';


export default function SectionVerticalSlider({cards}){

    return(
        <div className='svs '>
             <div className='svs-slider'>
            <SwiperVertical info={cards} />
          </div>
          <div className='svs-body  '>
            <h2 className='svs-title  '>
              لورم
              <span className='text-pink-600' > ایپسوم </span>
              فارسی ...
            </h2>
            <p className='svs-text'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
            </p>
            <p className='svs-text'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
            </p>

          </div>

        </div>
    )
}