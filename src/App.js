import React from 'react';
import { useState } from 'react';
import './App.css';
import { navLinks, statistics, slideImg, products, cards, managers, skills } from './constants';
import Button from './components/Button';
import SlideItems from './components/SlideItems';
import SwiperParallax from './components/SwiperSliders/SwiperParallax/SwiperParallax';
import SwiperSliderPerView from './components/SwiperSliders/SwiperSliderPerView/SwiperSliderPerView';
import SwiperVertical from './components/SwiperSliders/SwiperVertical/SwiperVertical';
import Counter from './components/Counter';
import Header from './sections/Header';
import Footer from './sections/Footer';
import Cards from './sections/Card/Cards';
import ContactUs from './sections/ContactUs/ContactUs';
import AboutUs from './sections/AboutUs/AboutUs';

import { MdKeyboardDoubleArrowUp } from "react-icons/md";

import ScrollToTop from "react-scroll-to-top";

import './index.css';

function App() {
  const [bigImage, setBigImage] = useState(slideImg[0].src);


  return (
    <div >
      <span >
        <ScrollToTop component={<MdKeyboardDoubleArrowUp />} className=' text-white text-2xl ' color='blueViolet' top={800} smooth />
      </span>
      <Header navLink={navLinks} />

      <main>
        <section className=' relative w-full flex lg:flex-row px-4   flex-col justify-evenly  min-h-full  gap-9  ' >
          <div className=' text-center lg:text-right w-full relative  lg:w-2/5 flex flex-col lg:mt-12 pt-5 mt-10  justify-center '>
            <p className='  mb-2  text-pink-600 text-2xl max-md:text-base'>لورم ایپسوم .....</p>
            <h1 className='  relative xl:text-8xl text-3xl my-5  font-semibold z-10 xl:whitespace-nowrap max-md:text-lg' >
              <span className='bg-white '>لورم  تولید متن ساختگی
              </span>
              <br />
              <span className=' text-purple-800 font-bold '>لورم </span> ایپسوم
            </h1>
            <p className=' text-lg text-justify my-4 max-md:text-sm'> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. </p>
            <div className=' '>
              <Button label=' کلیک کنید' class1='btn' />
            </div>
            <div className=' flex justify-between text-center gap-10 max-sm:gap-2 max-sm:justify-evenly my-2 py-4'>
              {statistics.map((stat) => (<div key={stat.id}>
                <p className=' text-2xl text-gray-600 max-sm:text-sm max-sm:font-bold'>{stat.label}</p>
                <p className=' text-4xl my-4 text-violet-900 font-bold max-sm:text-sm '><Counter count={stat.value} /></p>
              </div>))}
            </div>
          </div>

          <div className=' cursor-pointer min-h-full bg-img  bg-violet-50 opacity-80   flex justify-center items-center  relative' >
            <img src={bigImage} className='z-20' alt='laptop' width={610} height={500} />
            <div className=' z-20 flex overflow-hidden absolute -bottom-10 gap-4 justify-center items-center'>
              {slideImg.map(image => <SlideItems key={image.id} imgUrl={image.src} bigImgUrl={bigImage} changeBigImg={(e) => (setBigImage(e))} />)
              }
            </div>
          </div>

        </section>
        <section className=' max-lg:overflow-hidden  relative mt-20 mb-8 lg:mx-16 mx-3 flex lg:flex-row flex-col-reverse justify-between items-center gap-6'>
          <div className='h-[500px]  relative lg:w-3/5 xl:w-2/4 max-sm:mr-10'>
            <SwiperVertical info={cards} />
          </div>
          <div className=' flex  flex-col justify-start gap-5 lg:w-2/5 xl:w-2/4 '>
            <h2 className=' text-4xl font-bold text-center lg:text-right '>
              لورم
              <span className='text-pink-600' > ایپسوم </span>
              فارسی ...
            </h2>
            <p className=' text-xl text-gray-600 lg:max-w-lg text-center lg:text-right max-lg:text-center max-lg:text-base leading-normal  max-md:text-justify max-sm:text-justify'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
            </p>
            <p className=' text-xl text-gray-600 lg:max-w-lg text-center lg:text-right max-lg:text-center max-lg:text-base leading-normal  max-md:text-justify max-sm:text-justify'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
            </p>

          </div>

        </section>
        <section>
          <div className=' flex relative'>
            <SwiperParallax allSkills={skills} />
          </div>
          <div className=' flex relative'>
            <SwiperSliderPerView allSkills={skills} />
          </div>
        </section>
        <section>
          <div className='my-32 max-sm:my-10 flex flex-col lg:flex-row gap-16 px-12 mx-4  max-md:px-4 '>
            <div className=' lg:w-2/5 text-center lg:text-right flex flex-col'>
              <h2 className=' text-4xl leading-relaxed max-md:text-lg'>
                وب سایت <span className=' text-rose-600 font-bold ' >لورم ایپسوم </span> <br />
                یک سرویس کاملا رایگان و ساده
              </h2>
              <p className=' text-xl my-4 text-gray-600 text-justify max-lg:text-center max-lg:text-base leading-normal  max-md:text-justify'>
                در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
              <p className=' text-xl mb-6 text-gray-600 text-justify max-lg:text-center max-lg:text-base leading-normal max-md:text-justify'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
              </p>
              <div className=' flex xl:flex-row justify-center xl:justify-start gap-6 lg:flex-col max-md:flex-row max-sm:flex-col '>
                <Button label='لورم ایپسوم فارسی' class1='btn' />
                <Button label='لورم ایپسوم ' class1='btn-outline' />
              </div>
            </div>
            <div className='  lg:w-3/5 xl:w-2/2 max-lg:hidden  flex justify-center items-center  relative '>
              <div className=' baner-img overflow-hidden'>
              </div>
              <div className=''>
                <img src='./img/6p.png' className=' transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-700 relative z-40 w-[690px] h-[480px] max-xl:w-[490] max-xl:h-[380px] ' width='710px' height='500px' alt='baner' />
              </div>
            </div>
          </div>
        </section>

        <section className=' relative overflow-hidden'>
          <Cards cardInfo={cards} />
        </section>
        <section>
          <div className=' flex xl:flex-row flex-col items-center  gap-10 my-6 mx-16 max-sm:mx-6'>
            <div className='flex flex-col space-y-12 max-lg:space-y-6 max-md:space-y-4 xl:w-2/4'>
              <h2 className='text-4xl font-bold max-sm:text-base max-sm:text-center max-md:text-lg'>لورم <span className=' text-rose-700 '> ایپسوم</span></h2>
              <p className=' text-xl text-gray-800 text-justify max-lg:text-center max-lg:text-base leading-normal max-md:text-justify max-md:text-sm'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد          
              </p>
              <p className=' text-xl text-gray-800 text-justify max-lg:text-center max-lg:text-base leading-normal max-md:text-justify  max-md:text-sm'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
              </p>
              <div className='max-lg:text-center'>
                <Button label='متن لورم فارسی' class1='btn' />
              </div>
            </div>

            <div className='flex flex-col relative my-4 xl:w-2/4 max-sm:mx-10'>
              <div className=' w-full flex xl:justify-end justify-center'>
                <img src='./img/4.jpg' alt='laptop' width='616px' height='150px' className=' bg-violet-200 rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-700' />
              </div>
              <div className=' hidden sm:flex flex-row flex-1  items-center xl:justify-end justify-center gap-4 my-4'>
                <div>
                  <div className=' relative group '>
                    <img src='./img/2.jpeg' alt='laptop' width='300px' height='100px' className=' bg-violet-200 rounded-md ' />
                    <div className=" py-2 opacity-0 group-hover:opacity-100 duration-500 absolute inset-x-0 bottom-0 flex justify-center items-center text-3xl bg-opacity-70 bg-gray-300 text-violet-900 font-bold">
                      DELL
                    </div>
                  </div>
                </div>

                <div className=' relative group '>
                  <img src='./img/2.jpeg' alt='laptop' width='300px' height='100px' className=' bg-violet-200 rounded-md ' />
                  <div className=" py-2 opacity-0 group-hover:opacity-100 duration-500 absolute inset-x-0 bottom-0 flex justify-center items-center text-3xl bg-opacity-70 bg-gray-300 text-violet-900 font-bold">
                    DELL
                  </div>
                </div>

              </div>
              <div className=' offer '>
              </div>
            </div>
          </div>
        </section>
        <section>
          <AboutUs infos={managers} />
        </section>
        <section>
          <div className=' relative'>
            <ContactUs />
          </div>

        </section>

      </main>
      <Footer />

    </div>
  );
}

export default App;
