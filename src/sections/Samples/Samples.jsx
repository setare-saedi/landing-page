import React from "react";
import Button from "../../components/Button";

export default function Samples() {

  return (
    <div className='samples '>
      <div className='samples-body '>
        <h2 className='samples-title '>لورم
          <span className='samples-title-brand '> ایپسوم</span>
        </h2>
        <p className='samples-text '>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
        </p>
        <p className='samples-text '>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
        </p>
        <div className='samples-btn '>
          <Button label='متن لورم فارسی' class1='btn' />
        </div>
      </div>

      <div className='samples-images '>
        <div className='samples-img-top-wrapper  group '>
          <img src='./img/4.jpg' alt='laptop' width='616px' height='150px' className='samples-img w-full' />
          <div className="samples-img-hover  ">
                DELL
                <br />
                2024
              </div>
        </div>

        <div className=' samples-img-bottom-wrapper  '>
          
            <div className=' relative group '>
              <img src='./img/2.jpeg' alt='laptop' width='300px' height='100px' className='  samples-img' />
              <div className="samples-img-hover ">
                DELL/2024
              </div>
            </div>
       

          <div className=' relative group '>
            <img src='./img/2.jpeg' alt='laptop' width='300px' height='100px' className=' samples-img' />
            <div className="samples-img-hover ">
              DELL
            </div>
          </div>

        </div>
        <div className=' offer '>
        </div>
      </div>
    </div>
  )
}