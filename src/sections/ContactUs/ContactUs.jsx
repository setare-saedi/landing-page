import React from 'react';
import { ImFacebook } from 'react-icons/im';
import { FaTwitter } from 'react-icons/fa';
import { PiInstagramLogoFill } from 'react-icons/pi';
import { PiLinkedinLogoBold } from "react-icons/pi";
import Bg from '../../components/Bg/Bg';
function ContactUs() {
    return (
        <div className=' flex lg:flex-row flex-col items-center justify-between lg:mx-6 mx-1 '>
            <div className=' space-y-6 text-center lg:text-right'>
                <div>
                    <h2 className=' text-3xl font-bold text-violet-900'> تماس با ما </h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5'>
                    <div>
                        <p className=' text-xl font-bold mx-2 max-sm:text-lg'>آدرس:</p>
                        <p className=' text-lg max-sm:text-base text-gray-700 mt-3 mx-4'>لورم ایپسوم متن ساختگی، متن فارسی 2365</p>
                    </div>
                    <div>
                        <p className=' text-lg font-bold mx-2 max-sm:text-lg'>شماره تماس:</p>
                        <p className=' text-lg max-sm:text-base text-gray-700 mt-3 mx-4'>09100000000</p>
                    </div>
                    <div>
                        <p className=' text-lg font-bold mx-2 max-sm:text-lg'> آدرس ایمیل:</p>
                        <p className=' text-lg max-sm:text-base text-gray-700 mt-3 mx-4'>info@gmail.com</p>
                    </div>
                    <div>
                        <p className=' text-lg font-bold mx-2 max-sm:text-lg'>ساعت پاسخگویی:</p>
                        <p className=' text-lg max-sm:text-base text-gray-700 mt-3 mx-4'>شنبه تا 4 شنبه از ساعت 9 تا 18</p>
                    </div>
                </div>
                <div>
                    <h2 className=' text-lg font-bold mx-2 max-sm:text-lg'>ما را در شبکه های اجتماعی دنبال کنید.</h2>
                    <div className=' flex justify-center gap-3 my-6'>
                        <a href='#'>
                            <ImFacebook className='transition duration-700 ease-in-out  hover:bg-violet-200 hover:text-violet-800 bg-violet-800 text-white p-2 w-12 h-12 rounded-full' />
                        </a>
                        <a href='#'>
                            <FaTwitter className='transition duration-700 ease-in-out hover:bg-violet-200 hover:text-violet-800 bg-violet-800 text-white  p-2 w-12 h-12 rounded-full' />
                        </a>
                        <a href='#'>
                            <PiInstagramLogoFill className='transition duration-700 ease-in-out hover:bg-violet-200 hover:text-violet-800 bg-violet-800 text-white p-2 w-12 h-12 rounded-full' />
                        </a>
                        <a href='#' className=''>
                            <PiLinkedinLogoBold className='transition duration-700 ease-in-out hover:bg-violet-200 hover:text-violet-800 bg-violet-800 text-white p-2 w-12 h-12 rounded-full' />
                        </a>

                    </div>
                </div>
            </div>
            <div className='relative overflow-hidden lg:w-3/4'>
                <p className=' max-sm:hidden'>
                    <Bg />
                </p>
                <div className='  border-2 shadow-lg shadow-violet-200  my-10 px-8 py-10 bg-white lg:w-[90%] mx-auto '>

                    <form >
                        <div className=' text-center mb-10 px-6'>
                            <h2 className=' font-bold text-xl mb-4 text-violet-800 max-sm:text-lg'> فرم درخواست همکاری </h2>
                            <p className='max-sm:text-justify max-sm:text-base text-md text-gray-600'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>
                        </div>
                        <div className=' space-y-10 '>
                            <div className=' flex flex-col max-md:space-y-10 md:flex-row md:gap-3 '>
                                <div className='flex flex-col w-full'>
                                    <label className='text-md font-bold max-sm:text-base'>نام :</label>
                                    <input type='text' className=' caret-violet-500 focus:outline-violet-500 border-2 rounded-md shadow-md shadow-violet-200 px-2 py-1' placeholder='نام ' />
                                </div>
                                <div className='flex flex-col w-full'>
                                    <label className='text-md font-bold max-sm:text-base'>ایمیل:</label>
                                    <input type='email' className='caret-violet-500 focus:outline-violet-500 border-2 rounded-md shadow-md shadow-violet-200 px-2 py-1 text-left' placeholder='email' />
                                </div>
                            </div>
                            <div className=' flex flex-col max-md:space-y-10 md:flex-row gap-3'>
                                <div className='flex flex-col w-full'>
                                    <label className='text-md font-bold max-sm:text-base'>نام شرکت :</label>
                                    <input type='text' className='caret-violet-500 focus:outline-violet-500 border-2 rounded-md shadow-md shadow-violet-200 px-2 py-1' placeholder='نام شرکت' />
                                </div>
                                <div className='flex flex-col w-full max-sm:text-base'>
                                    <label className='text-md font-bold'>شماره تماس :</label>
                                    <input type='text' className='caret-violet-500 focus:outline-violet-500 border-2 rounded-md shadow-md shadow-violet-200 px-2 py-1' placeholder='شماره تماس ' />
                                </div>
                            </div>
                            <div>
                                <div className=' flex flex-col'>
                                    <label className='text-md font-bold max-sm:text-base'>متن درخواست:</label>
                                    <textarea className='caret-violet-500 focus:outline-violet-500 w-full border-2 shadow-md shadow-violet-200 rounded-md px-2 py-2' rows={4} placeholder='پیام'></textarea>
                                </div>
                            </div>
                        </div>
                        <div className=' text-left  mt-3'>
                            <button className=' bg-violet-600 text-white px-8 py-2 rounded-md font-bold hover:bg-violet-800 ' > ثبت درخواست </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;