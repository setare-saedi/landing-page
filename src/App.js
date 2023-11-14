import React from 'react';
import { useState } from 'react';
import './App.css';
import './index.css';
import { navLinks, statistics, slideImg, products, cards, managers, skills } from './constants';
import { ImStarFull } from 'react-icons/im';

import Button from './components/Button';
import SlideItems from './components/SlideItems';
import SwiperParallax from './components/SwiperSliders/SwiperParallax/SwiperParallax';
import SwiperSliderPerView from './components/SwiperSliders/SwiperSliderPerView/SwiperSliderPerView';
import Counter from './components/Counter';
import Header from './sections/Header';
import Footer from './sections/Footer';
import Cards from './sections/Cards';
function App() {
  const [bigImage, setBigImage] = useState(slideImg[0].src);

  return (
    <div className="">
      <Header navLink={navLinks} />

      <main>
        <section className=' relative w-full flex lg:flex-row px-4   flex-col justify-evenly  min-h-full  gap-10  ' >
          <div className=' text-center lg:text-right w-full relative  lg:w-2/5 flex flex-col lg:mt-16 pt-5 mt-10  justify-center '>
            <p className='  mb-2  text-pink-600 text-2xl'>لورم ایپسوم .....</p>
            <h1 className='  relative xl:text-8xl text-4xl my-5  font-semibold z-10 xl:whitespace-nowrap' >
              <span className='bg-white '>لورم  تولید متن ساختگی
              </span>
              <br />
              <span className=' text-purple-800 font-bold '>لورم </span> ایپسوم
            </h1>
            <p className=' text-lg text-justify my-4'> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. </p>
            <div className=' '>
              <Button label=' کلیک کنید' class1='btn' />
            </div>
            <div className=' flex justify-between text-center gap-10 my-4 py-4'>
              {statistics.map((stat) => (<div key={stat.id}>
                <p className=' text-2xl text-gray-600'>{stat.label}</p>
                <p className=' text-4xl my-5'><Counter count={stat.value} /></p>
              </div>))}
            </div>
          </div>

          <div className=' cursor-pointer min-h-full bg-img  bg-violet-50 opacity-80   flex justify-center items-center  relative' >
            <img src={bigImage} className='z-20' alt='laptop' width={610} height={500} />
            <div className=' z-20 flex overflow-hidden absolute -bottom-10 gap-4 justify-center items-center'>
              { slideImg.map(image => <SlideItems key={image.id} imgUrl={image.src} bigImgUrl={bigImage} changeBigImg={(e) => (setBigImage(e))} />)
              }
            </div>
          </div>

        </section>
        <section className=' mt-16 mx-16'>
          <div className=' flex flex-col justify-start gap-5'>
            <h2 className=' text-4xl font-bold text-center lg:text-right '>
              لورم
              <span className='text-pink-600' > ایپسوم </span>
              فارسی ...
            </h2>
            <p className=' text-xl text-gray-600 lg:max-w-lg text-center lg:text-right'>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
            </p>
            <div className='mt-16 grid grid-cols-1 gap-14 sm:gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
              {products.map((pro) => (
                <div key={pro.id} className='flex flex-col ' >
                  <div className=' wave overflow-hidden relative border-2 border-violet-100 rounded-md justify-center items-center bg-violet-100 flex flex-col flex-1 '>
                    <img src={pro.imgUrl} className=' z-20' width='250px' height='250px' alt={pro.name} />
                  </div>

                  <div className=' p-4 mt-2 text-center xl:text-right'>
                    <h3 className=' text-2xl'>
                      {pro.name}
                    </h3>
                  </div>

                  <div className=' flex flex-col  xl:flex-row justify-between items-center px-4 pb-4'>
                    <div className='  flex justify-start items-center gap-2'>
                      <span className='text-lg text-yellow-800'>(4.5)</span>
                      <ImStarFull className=' text-yellow-300 text-xl' />
                    </div>
                    <div>
                      {pro.price > 0 ? <p className=' text-2xl text-gray-700'>{pro.price} <span className=' text-lg text-gray-500'>تومان</span></p> : <p className=' text-green-600 font-bold text-2xl'>رایگان ! </p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </section>
        <section>
        <div className=' flex relative'>
            <SwiperParallax  allSkills={skills} />
          </div>
          <div className=' flex relative'>
            <SwiperSliderPerView  allSkills={skills} />
          </div>
        </section>
        <section>
          <div className='my-32 flex flex-col xl:flex-row gap-16 px-12 mx-4   '>
            <div className=' xl:w-2/5 text-center xl:text-right flex flex-col'>
              <h2 className=' text-4xl leading-relaxed'>
                وب سایت <span className=' text-rose-600 font-bold ' >لورم ایپسوم </span> <br />
                یک سرویس کاملا رایگان و ساده
              </h2>
              <p className=' text-xl my-4 text-gray-600'>
                در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>
              <p className=' text-xl my-4 text-gray-600'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
              </p>
              <div className=' flex flex-row gap-6'>
                <Button label='لورم ایپسوم فارسی' class1='btn' />
                <Button label='لورم ایپسوم ' class1='btn-outline' />
              </div>
            </div>
            <div className='  xl:w-3/5 overflow-hidden flex justify-center relative  '>
              <div className=' baner-img overflow-hidden'>
              </div>
              <img src='./img/6p.png' className=' overflow-hidden z-40 relative' width='710px' height='500px' alt='baner' />
            </div>
          </div>
        </section>
        <section>
          <Cards cardInfo={cards} />
        </section>
        <section>
          <div className=' flex xl:flex-row flex-col items-center  my-6 mx-16'>
            <div className='flex flex-col space-y-12 xl:w-2/4'>
              <h2 className='text-4xl font-bold'>لورم <span className=' text-rose-700 '> ایپسوم</span></h2>
              <p className=' text-xl text-gray-800'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد              </p>
              <p className=' text-xl text-gray-800'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
              </p>
              <div>
                <Button label='متن لورم فارسی' class1='btn' />
              </div>
            </div>
            <div className='flex flex-col relative my-4 xl:w-2/4'>
              <div className=' w-full flex xl:justify-end justify-center'>
                <img src='./img/4.jpg' alt='laptop' width='616px' height='150px' className=' bg-violet-200 rounded-md' />
              </div>
              <div className=' hidden sm:flex flex-row flex-1  items-center xl:justify-end justify-center gap-4 my-4'>
                <img src='./img/2.jpeg' alt='laptop' width='300px' height='100px' className=' bg-violet-200 rounded-md' />
                <img src='./img/2.jpeg' alt='laptop' width='300px' height='100px' className=' bg-violet-200 rounded-md' />
              </div>
              <div className=' offer'>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className=' flex flex-col justify-center items-center my-4 p-6 bg-violet-50'>
            <div>
              <h2 className=' text-center text-4xl  '>
                لورم
                <span className=' text-rose-700' > ایپسوم </span>
                چیست؟
              </h2>
              <p className=' text-center mb-12 mt-6 max-w-4xl'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
              </p>
            </div>
            <div className='flex flex-col md:flex-row flex-1 gap-10 justify-evenly items-center '>
              {managers.map(man => <div key={man.id} className='flex flex-col justify-center items-center max-w-xl text-center'>
                <img src={man.imgUrl} alt={man.name} className='  w-16 h-16 border-2  border-violet-200 rounded-full ' />
                <p className=' text-3xl mt-4'>{man.name}</p>
                <p className=' text-xl text-gray-700 my-4'>{man.bio}</p>
              </div>)}
            </div>
          </div>
        </section>
        <section>
          <div className=' flex flex-col flex-1  lg:flex-row  justify-between items-center my-12 mx-12'>
            <div className=' lg:w-2/4'>
              <h3 className=' text-3xl text-center ' >
                برای دریافت آخرین اخبار و تخفیفات ویژه <span className=' text-rose-500'> ایمیل </span> خود را وارد کنید
              </h3>
            </div>
            <div className=' lg:w-2/4 my-2'>
              <form >
                <div className='border-2 flex justify-between rounded-full w-full'>
                  <input className=' xl:w-[70%] rounded-r-full ring-0 border-0 px-4 outline-0' type='text' placeholder='ایمیل خود را وارد کنید...' />
                  <div className=' flex justify-end m-2'>
                    <Button label='ثبت ایمیل' class1='btn' />
                  </div>
                </div>
              </form>
            </div>
            <div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
