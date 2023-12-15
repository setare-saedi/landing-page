import React from 'react';

import { ImFacebook } from 'react-icons/im';
import { FaTwitter } from 'react-icons/fa';
import { PiInstagramLogoFill } from 'react-icons/pi';
import { PiLinkedinLogoBold } from "react-icons/pi";

 export default function AboutUs({infos}) {
    
    return(
        <div className='about '>
            <div className='about-body '>
              <h2 className='about-title   '>
                لورم
                <span className=' about-title-brand' > ایپسوم </span>
                چیست؟
              </h2>
              <p className='about-text '>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
              </p>
            </div>

            <div className='about-cards '>
              {infos.map(info =>
                <div key={info.id} className='about-card '>
                  <div className='about-card-header  '>
                    <p className='about-card-header-right'>+</p>
                    <p className='about-card-header-left'>{info.expertise}</p>
                  </div>
                  <div className='about-card-body '>
                    <div className='about-card-img '>
                      <img src={info.imgUrl} alt={info.name} className=' w-20 h-20 ' />
                    </div>
                    <div>
                      <h3 className=' text-2xl font-bold'>{info.name}</h3>
                    </div>
                    <div className=' text-center px-3'>
                      <p className='about-card-text '>{info.bio}</p>
                    </div>
                  </div>
                  <div className='about-card-social '>
                    <div >
                      <a href='#' >
                        <ImFacebook className='about-social-link  ' />
                      </a>
                    </div>
                    <div >
                      <a href='#' >
                        <FaTwitter className=' about-social-link ' />
                      </a>
                    </div>
                    <div >
                      <a href='#' >
                        <PiInstagramLogoFill className=' about-social-link ' />
                      </a>
                    </div>
                    <div >
                      <a href='#' >
                        <PiLinkedinLogoBold className=' about-social-link  ' />
                      </a>
                    </div>

                  </div>

                  <div className='about-card-footer'></div>
                </div>)}
            </div>
          </div>
    )
 }
