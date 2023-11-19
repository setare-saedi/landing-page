import React from 'react';
import { ImFacebook } from 'react-icons/im';
import { FaTwitter } from 'react-icons/fa';
import { PiInstagramLogoFill } from 'react-icons/pi';

function Footer() {
    return (
        <footer>
        <div className=' flex flex-col   bg-black px-12 py-4'>
          {/* <div className=' flex lg:flex-row flex-col gap-4 items-center justify-between'>
            <div className=' flex gap-4 '>
             <a href='#'>
               <ImFacebook className='  hover:bg-violet-200 bg-white p-2 w-12 h-12 rounded-full' />
              </a>
              <a  href='#'>

              <FaTwitter className=' hover:bg-violet-200 bg-white p-2 w-12 h-12 rounded-full' />
              </a>
              <a  href='#'>

              <PiInstagramLogoFill className=' hover:bg-violet-200 bg-white p-2 w-12 h-12 rounded-full' />
              </a>
            </div>
            <div >
              <p className='text-white text-center'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
              </p>
            </div>
            <div className=' hidden lg:flex justify-center items-center text-white'>
              <span>Setare</span>
              <img src='./logo/star2.png' width={40} height={40} alt='logo' className=' ' />
            </div>
          </div>
          <div className=' divide-y-2 divide-violet-200'>

          <div className=' flex lg:flex-row flex-col justify-between items-center gap-4 my-4'>
            <div className=' text-white flex flex-col'>
              <ul className=' list-none space-y-2 lg:text-right text-center'>
                <li><a href='#'>متن فارسی لورم</a></li>
                <li><a href='#'>متن ساختگی لورم</a></li>
                <li><a href='#'> متن ساده لورم</a></li>
              </ul>
            </div>
            <div className=' text-white flex flex-col lg:text-right text-center'>
              <ul className=' list-none space-y-2'>
                <li><a href='#'>لورم ایپسوم</a></li>
                <li><a href='#'>لورم ایپسوم فارسی</a></li>
                <li><a href='#'>لورم فارسی1</a></li>
                <li><a href='#'>لورم ایپسوم</a></li>
              </ul>
            </div>
            <div className=' flex flex-col text-white text-center'>
              <p>تماس با ما</p>
              <p>آدرس: تهران، سعادت آباد، خیابان فیاض</p>
              <p>شماره تماس: 09120000000</p>
            </div>
          </div>
          <div className=''></div> */}
          <div className=' text-white text-center'>
            <div>کپی رایت</div>
          </div>
        {/* </div> */}
          </div>
      </footer>
    );
}

export default Footer;