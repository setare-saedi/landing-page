import React, {useState} from "react";
import Counter from './../../components/Counter';
import Button from "./../../components/Button";
import SlideItems from './../../components/ImgSlider/SlideItems';

export default function Banner({statistics , slideImg}){
    const [bigImage, setBigImage] = useState(slideImg[0].src);

    return(
        <div className='banner '>
        <div className='banner-body '>
            <p className='banner-header '>لورم ایپسوم .... </p>
            <h1 className='banner-title ' >
              <span className='banner-title-bg  '>لورم  تولید متن ساختگی
              </span>
              <br />
              <span className='banner-title-brand '>لورم </span> ایپسوم
            </h1>
            <p className='benner-description '> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. </p>
            <div className='  '>
              
              <Button label=' کلیک کنید' class1='btn' />
            </div>
            <div className='banner-counter '>
              {statistics.map((stat) => (<div key={stat.id}>
                <p className='banner-counter-label '>{stat.label}</p>
                <p className='banner-counter-value '><Counter count={stat.value} /></p>
              </div>))}
            </div>
          </div>

          <div className='banner-img bg-img' >
            <img src={bigImage} className='z-10' alt='laptop' width={610} height={500} />
            <div className='banner-img-items '>
              {slideImg.map(image => <SlideItems key={image.id} imgUrl={image.src} bigImgUrl={bigImage} changeBigImg={(e) => (setBigImage(e))} />)
              }
            </div>
          </div>
        </div>
    )
}