import React from 'react';

import { ImFacebook } from 'react-icons/im';
import { FaTwitter } from 'react-icons/fa';
import { PiInstagramLogoFill } from 'react-icons/pi';
import { PiLinkedinLogoBold } from "react-icons/pi";

 export default function AboutUs({infos}) {
    
    return(
        <div className=' flex xl:flex-row flex-col my-4 p-6 bg-violet-50 relative gap-5'>
            <div className=' flex flex-col items-center justify-center '>
              <h2 className=' text-center text-4xl  '>
                لورم
                <span className=' text-rose-700' > ایپسوم </span>
                چیست؟
              </h2>
              <p className=' text-center mb-12 mt-6 max-w-4xl max-sm:text-justify leading-loose'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
              </p>
            </div>

            <div className=' flex lg:flex-row flex-col gap-2 justify-evenly items-center '>
              {infos.map(info =>
                <div key={info.id} className='h-full flex flex-col flex-1 relative bg-white text-center '>
                  <div className=' flex justify-between items-center p-8  '>
                    <p className=' text-violet-600 text-3xl font-bold'>+</p>
                    <p className=' text-violet-300 font-bold text-lg'>{info.expertise}</p>
                  </div>
                  <div className='flex gap-9  flex-1 justify-center items-center flex-col'>
                    <div className=' flex justify-center items-center w-28 h-28 border-2 border-violet-50  rounded-full'>
                      <img src={info.imgUrl} alt={info.name} className=' w-20 h-20 ' />
                    </div>
                    <div>
                      <h3 className=' text-2xl font-bold'>{info.name}</h3>
                    </div>
                    <div className=' text-center px-3'>
                      <p className=' text-gray-500 text-md pb-6  leading-7 max-sm:text-justify'>{info.bio}</p>
                    </div>
                  </div>
                  <div className=' relative  flex flex-row justify-center pb-16 gap-6 mb-6'>
                    <div >
                      <a href='#' >
                        <ImFacebook className=' hover:bg-violet-900 hover:text-violet-50 hover:rounded-sm transition ease-in delay-150 hover:-translate-y-1 hover:scale-105 duration-700 bg-violet-100 text-violet-900 p-1 w-8 h-8 ' />
                      </a>
                    </div>
                    <div >
                      <a href='#' >
                        <FaTwitter className=' hover:bg-violet-900 hover:text-violet-50 hover:rounded-sm transition ease-in delay-150 hover:-translate-y-1 hover:scale-105 duration-700 bg-violet-100 text-violet-900 p-1 w-8 h-8 ' />
                      </a>
                    </div>
                    <div >
                      <a href='#' >
                        <PiInstagramLogoFill className=' hover:bg-violet-900 hover:text-violet-50 hover:rounded-sm transition ease-in delay-150 hover:-translate-y-1 hover:scale-105 duration-700 bg-violet-100 text-violet-900 p-1 w-8 h-8 ' />
                      </a>
                    </div>
                    <div >
                      <a href='#' >
                        <PiLinkedinLogoBold className='  hover:bg-violet-900 hover:text-violet-50 hover:rounded-sm transition ease-in delay-150 hover:-translate-y-1 hover:scale-105 duration-700 bg-violet-100 text-violet-900 p-1 w-8 h-8 ' />
                      </a>
                    </div>

                  </div>

                  <div className='man-bottom-line'></div>
                </div>)}
            </div>
          </div>
    )
 }
