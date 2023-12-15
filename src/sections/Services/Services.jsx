import React from "react";

import Button from "../../components/Button";

export default function Services(){

    return(
        <div className='services '>
            <div className='services-body '>
              <h2 className='services-title '>
                وب سایت <span className='services-title-brand ' >لورم ایپسوم </span> <br />
                یک سرویس کاملا رایگان و ساده
              </h2>
              <p className='services-text '>
                در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
              <p className='services-text '>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
              </p>
              <div className='services-btn '>
                <Button label='لورم ایپسوم فارسی' class1='btn' />
                <Button label='لورم ایپسوم ' class1='btn-outline' />
              </div>
            </div>
            <div className='services-images '>
              <div className=' services-img-bg overflow-hidden'>
              </div>
              <div className=''>
                <img src='./img/6p.png' className='services-img ' width='710px' height='500px' alt='baner' />
              </div>
            </div>
          </div>
    )
}