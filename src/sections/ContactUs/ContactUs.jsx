import React from 'react';
import emailjs from 'emailjs-com';

import { ImFacebook } from 'react-icons/im';
import { FaTwitter } from 'react-icons/fa';
import { PiInstagramLogoFill } from 'react-icons/pi';
import { PiLinkedinLogoBold } from "react-icons/pi";
import Bg from '../../components/Bg/Bg';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

function ContactUs() {

    const SignupSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, 'نام نباید کمتر از 5 کاراکتر باشد')
            .max(100, 'نام شما نباید بیشتر از 100 کاراکتر باشد')
            .required('نام خود را وارد کنید.'),
        email: Yup.string()
            .email('ایمیل معتبر نیست')
            .required('ایمیل را وارد کنید'),
        phoneNum: Yup.string()
            .min(11, 'شماره ی وارد شده صحیح نیست')
            .max(11, 'شماره ی وارد شده صحیح نیست')
            .required('لطفا شماره تماس را وارد نمایید')
            .matches(/^([0]{1})[0-9]{10}$/, 'شماره صحیح نیست'),
        msg: Yup.string()
            .min(10, 'متن درخواست کوتاه است')
            .max(500, 'متن درخواست خیلی طولانی است')
            .required('متن درخواست را واردنمایید.')
    });

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
                    <div>
                        <Formik
                            initialValues={{
                                name: '',
                                email: '',
                                phoneNum: '',
                                companyName: '',
                                msg: ''
                            }}
                            validationSchema={SignupSchema}

                            onSubmit={(e) => {

                                if (e.companyName === '') {
                                    e.companyName = '-'
                                }
                                const regex = /(<([^>]+)>)/gi;
                                let templateParams = {
                                    email: e.email.replace(regex, ""),
                                    name: e.name.replace(regex, ""),
                                    msg: e.msg.replace(regex, ""),
                                    companyName: e.companyName.replace(regex, ""),
                                    phoneNum: e.phoneNum.replace(regex, ""),
                                }
                                emailjs.send(process.env.REACT_APP_SERVIC_ID, process.env.REACT_APP_TEMPLATE_ID, templateParams, process.env.REACT_APP_USER_ID)
                                    .then((result) => {
                                        alert("پیام شما ارسال شد به زودی با شما تماس میگیریم.", result.text);
                                    },
                                        (error) => {
                                            alert("متاسفانه پیام شما ارسال نشد لطفا دوباره تلاش کنید", error.text);
                                        });
                            }
                            }
                        >
                            {({ errors, touched }) => (
                                <Form>
                                    <div className=' space-y-10 '>
                                        <div className=' flex flex-col max-md:space-y-10 md:flex-row md:gap-3 '>
                                            <div className='flex flex-col w-full'>
                                                <label className='text-md font-bold max-sm:text-base ' >نام و نام خانوادگی <span className=' text-red-500 font-bold text-xl'>*</span></label>
                                                <Field name="name" type="text" placeholder={'نام'} className={ ` mb-2 px-2 py-1 rounded-md shadow-md border-2 
                                                ${!touched.name ? 'caret-violet-500 focus:outline-violet-500 shadow-violet-200 '
                                                    : (errors.name && touched.name) ? 'caret-red-500 focus:outline-red-500 border-red-500 shadow-red-200'
                                                        : ' caret-green-500 focus:outline-green-500 border-green-500 shadow-green-200'} `} />
                                                {errors.name && touched.name ? (
                                                    <ErrorMessage component="div" name="name" className=' text-red-700 pr-3 text-base '/>
                                                ) : null}
                                            </div>

                                            <div className='flex flex-col w-full'>
                                                <label className='text-md font-bold max-sm:text-base'>ایمیل <span className=' text-red-500 font-bold text-xl'>*</span></label>
                                                <Field dir='ltr' name="email" type="text" placeholder={'info@gmail.com'} className={`mb-2 rounded-md shadow-md px-2 py-1 border-2 
                                                ${!touched.email ? 'caret-violet-500 focus:outline-violet-500 shadow-md shadow-violet-200'
                                                    : (errors.email && touched.email) ? 'caret-red-500 focus:outline-red-500 border-red-500 shadow-red-200'
                                                        : 'caret-green-500 focus:outline-green-500 border-green-500 shadow-green-200'} `} />
                                                {errors.email && touched.email ? (
                                                    <ErrorMessage component="div" name="email" className=' text-red-700 pr-3 text-base '/>
                                                ) : null}

                                            </div>
                                        </div>
                                        <div className=' flex flex-col max-md:space-y-10 md:flex-row md:gap-3 '>
                                            <div className='flex flex-col w-full ' >
                                                <label className='text-md font-bold max-sm:text-base '  >شماره تماس <span className=' text-red-500 font-bold text-xl'>*</span></label>
                                                <Field dir='ltr'  name="phoneNum" type="text" placeholder={'09100000000'} className={`mb-2 rounded-md shadow-md px-2 py-1 border-2
                                                ${!touched.phoneNum ? 'caret-violet-500 focus:outline-violet-500 shadow-violet-200'
                                                    : (errors.phoneNum && touched.phoneNum) ? 'caret-red-500 focus:outline-red-500 border-red-500 shadow-red-200'
                                                        : ' caret-green-500 focus:outline-green-500 border-green-500 shadow-green-200 '} `} />
                                                {errors.phoneNum && touched.phoneNum ? (
                                                    <ErrorMessage component="div" name="phoneNum" className=' text-red-700 pr-3 text-base '/>
                                                ) : null}
                                            </div>
                                            <div className='flex flex-col w-full'>
                                                <label className='text-md font-bold max-sm:text-base'>نام شرکت</label>
                                                <Field name="companyName" type="text" placeholder={'نام شرکت'} className={`caret-violet-500 focus:outline-violet-500 border-2 rounded-md shadow-md shadow-violet-200 px-2 py-1 `} />
                                            </div>
                                        </div>
                                        <div className=' flex flex-col'>
                                            <label className='text-md font-bold max-sm:text-base '>متن درخواست <span className=' text-red-500 font-bold text-xl'>*</span></label>
                                            <Field as='textarea' type='text' name="msg" placeholder={'متن درخواست'} className={`mb-2 px-2 py-1 w-full border-2 rounded-md shadow-md
                                            ${!touched.msg ? 'caret-violet-500 focus:outline-violet-500 shadow-violet-200 '
                                                    : (errors.msg && touched.msg) ? 'caret-red-500 focus:outline-red-500 border-red-500 shadow-red-200'
                                                        : ' caret-green-500 focus:outline-green-500 border-green-500 shadow-green-200'} `} />
                                                        {errors.msg && touched.msg ? (
                                                    <ErrorMessage component="div" name="msg" className=' text-red-700 pr-3 text-base '/>
                                                ) : null}
                                        </div>
                                        <div className=' text-left  mt-3'>
                                            {
                                                errors.name || errors.email || errors.phoneNum || errors.msg || !touched.name ?
                                                <button type="submit" disabled className=' bg-violet-100 text-violet-900 border-2 border-violet-200 px-8 py-2 rounded-md font-bold hover:bg-violet-100 '>ثبت درخواست</button>
                                                : <button type="submit"  className=' bg-violet-600 text-white px-8 py-2 rounded-md font-bold hover:bg-violet-800 '>ثبت درخواست</button>

                                            }
                                        </div>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ContactUs;