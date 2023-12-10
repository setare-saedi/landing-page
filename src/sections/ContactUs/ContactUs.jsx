import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';

import { ImFacebook } from 'react-icons/im';
import { FaTwitter } from 'react-icons/fa';
import { PiInstagramLogoFill } from 'react-icons/pi';
import { PiLinkedinLogoBold } from "react-icons/pi";

import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import * as Yup from "yup";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Bg from '../../components/Bg/Bg';
function ContactUs() {


    const [loading, setLoading] = useState(false)
    const [inputDisabled, setInputDisabled] = useState(false)
    const notify = () => {
        toast.error("متاسفانه پیام شما ارسال نشد لطفا دوباره تلاش کنید", {
            className: " bg-red-100 text-xl font-bold w-full",

        })
    }

    const SignupSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, 'نام نباید کمتر از 5 کاراکتر باشد')
            .max(50, 'نام شما نباید بیشتر از 50 کاراکتر باشد')
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

    const init = {
        name: '',
        email: '',
        phoneNum: '',
        companyName: '',
        msg: ''
    }
    const [formValues, setFormValues] = useState(init)

    const formSend = () => {
        setInputDisabled(true)
        setLoading(false)

    }
    const formReset = () => {
        setLoading(false)
    }
    return (
        <div className='  flex lg:flex-row flex-col items-center justify-between lg:mx-6 mx-1 '>
            < ToastContainer
                position="top-center"
                autoClose={10000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                className='w-[80%] mx-auto py-4'
            />
            <div className=' space-y-6 text-center lg:text-right'>
                <div>
                    <h2 className=' dark:text-violet-400 text-3xl font-bold text-violet-900'> تماس با ما </h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5'>
                    <div>
                        <p className=' text-xl font-bold mx-2 max-sm:text-lg'>آدرس:</p>
                        <p className='dark:text-gray-400 text-lg max-sm:text-base text-gray-700 mt-3 mx-4'>لورم ایپسوم متن ساختگی، متن فارسی 2365</p>
                    </div>
                    <div>
                        <p className=' text-lg font-bold mx-2 max-sm:text-lg'>شماره تماس:</p>
                        <p className='dark:text-gray-400 text-lg max-sm:text-base text-gray-700 mt-3 mx-4'>09100000000</p>
                    </div>
                    <div>
                        <p className=' text-lg font-bold mx-2 max-sm:text-lg'> آدرس ایمیل:</p>
                        <p className='dark:text-gray-400 text-lg max-sm:text-base text-gray-700 mt-3 mx-4'>info@gmail.com</p>
                    </div>
                    <div>
                        <p className=' text-lg font-bold mx-2 max-sm:text-lg'>ساعت پاسخگویی:</p>
                        <p className='dark:text-gray-400 text-lg max-sm:text-base text-gray-700 mt-3 mx-4'>شنبه تا 4 شنبه از ساعت 9 تا 18</p>
                    </div>
                </div>
                <div>
                    <h2 className=' text-lg font-bold mx-2 max-sm:text-lg'>ما را در شبکه های اجتماعی دنبال کنید.</h2>
                    <div className=' flex  gap-3 my-6'>
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
           
            <div className='overflow-hidden lg:w-3/4 relative'>
           
                <div className=' max-sm:hidden '>
                <Bg />
            </div>
                    <div className='dark:text-gray-900 relative dark:bg-gray-50  border-2 shadow-lg shadow-violet-200  my-10 px-8 py-10 bg-white lg:w-[90%] mx-auto '>

                        <Formik
                            initialValues={formValues}
                            enableReinitialize
                            validationSchema={SignupSchema}

                            onSubmit={(e) => {
                                setLoading(true)
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

                                        formSend()
                                    },
                                        (error) => {
                                            notify()

                                            formReset()

                                        });
                            }
                            }
                        >

                            {({ errors, touched }) => (
                                <Form >
                                    <div className=' space-y-10 z-50'>
                                        <div className=' flex flex-col max-md:space-y-10 md:flex-row md:gap-3 '>
                                            <div className='flex flex-col w-full'>
                                                <label className='text-md font-bold max-sm:text-base ' >نام و نام خانوادگی <span className=' text-red-500 font-bold text-xl'>*</span></label>
                                                <Field disabled={inputDisabled} autoComplete="new-name" name="name" type="text" placeholder={'نام'} className={` mb-2 px-2 py-1 rounded-md shadow-md border-2 
                                                ${!touched.name || inputDisabled ? 'caret-violet-500 focus:outline-violet-500 shadow-violet-200 '
                                                        : errors.name ? 'caret-red-500 focus:outline-red-500 border-red-500 shadow-red-200'
                                                            : ' caret-green-500 focus:outline-green-500 border-green-500 shadow-green-200'} `} />
                                                {errors.name && touched.name ? (
                                                    <ErrorMessage component="div" name="name" className=' text-red-700 pr-3 text-base ' />
                                                ) : null}
                                            </div>

                                            <div className='flex flex-col w-full'>
                                                <label className='text-md font-bold max-sm:text-base'>ایمیل <span className=' text-red-500 font-bold text-xl'>*</span></label>
                                                <Field disabled={inputDisabled} autoComplete="new-email" dir='ltr' name="email" type="text" placeholder={'info@gmail.com'} className={`mb-2 rounded-md shadow-md px-2 py-1 border-2 
                                                ${!touched.email || inputDisabled ? 'caret-violet-500 focus:outline-violet-500 shadow-md shadow-violet-200'
                                                        : errors.email ? 'caret-red-500 focus:outline-red-500 border-red-500 shadow-red-200'
                                                            : 'caret-green-500 focus:outline-green-500 border-green-500 shadow-green-200'} `} />
                                                {errors.email && touched.email ? (
                                                    <ErrorMessage component="div" name="email" className=' text-red-700 pr-3 text-base ' />
                                                ) : null}

                                            </div>
                                        </div>
                                        <div className=' flex flex-col max-md:space-y-10 md:flex-row md:gap-3 '>
                                            <div className='flex flex-col w-full ' >
                                                <label className='text-md font-bold max-sm:text-base '  >شماره تماس <span className=' text-red-500 font-bold text-xl'>*</span></label>
                                                <Field disabled={inputDisabled} dir='ltr' autoComplete="new-phone" name="phoneNum" type="text" placeholder={'09100000000'} className={`mb-2 rounded-md shadow-md px-2 py-1 border-2 
                                                ${!touched.phoneNum || inputDisabled ? 'caret-violet-500 focus:outline-violet-500 shadow-md shadow-violet-200'
                                                        : errors.phoneNum ? 'caret-red-500 focus:outline-red-500 border-red-500 shadow-red-200'
                                                            : 'caret-green-500 focus:outline-green-500 border-green-500 shadow-green-200'} `} />
                                                {errors.phoneNum && touched.phoneNum ? (
                                                    <ErrorMessage component="div" name="phoneNum" className=' text-red-700 pr-3 text-base ' />
                                                ) : null}
                                            </div>
                                            <div className='flex flex-col w-full'>
                                                <label className='text-md font-bold max-sm:text-base'>نام شرکت</label>
                                                <Field disabled={inputDisabled} autoComplete="new-com" name="companyName" type="text" placeholder={'نام شرکت'} className={` mb-2 px-2 py-1 rounded-md shadow-md border-2 
                                                ${!touched.companyName || inputDisabled ? 'caret-violet-500 focus:outline-violet-500 shadow-violet-200 '
                                                        : ' caret-green-500 focus:outline-green-500 border-green-500 shadow-green-200'} `} />
                                            </div>
                                        </div>
                                        <div className=' flex flex-col'>
                                            <label className='text-md font-bold max-sm:text-base '>متن درخواست <span className=' text-red-500 font-bold text-xl'>*</span></label>
                                            <Field disabled={inputDisabled} autoComplete="new-msg" as='textarea' type='text' name="msg" placeholder={'متن درخواست'} className={`mb-2 px-2 py-1 w-full border-2 rounded-md shadow-md
                                            ${!touched.msg || inputDisabled ? 'caret-violet-500 focus:outline-violet-500 shadow-violet-200 '
                                                    : errors.msg ? 'caret-red-500 focus:outline-red-500 border-red-500 shadow-red-200'
                                                        : ' caret-green-500 focus:outline-green-500 border-green-500 shadow-green-200'} `} />
                                            {errors.msg && touched.msg ? (
                                                <ErrorMessage component="div" name="msg" className=' text-red-700 pr-3 text-base ' />
                                            ) : null}
                                        </div>
                                        <div className='  mt-3'>
                                            {
                                                inputDisabled ?
                                                    <div className='  bg-green-100 py-6 text-center w-[80%] mx-auto rounded-md border-2 border-green-200'>
                                                        درخواست شما ثبت شد بزودی با شما تماس میگیریم.
                                                    </div>
                                                    :
                                                    errors.name || errors.email || errors.phoneNum || errors.msg || !touched.name ?
                                                        <button disabled className=' bg-violet-100 text-violet-900 border-2 border-violet-200 px-10 py-2 rounded-md font-bold hover:bg-violet-100 '>ثبت درخواست</button>
                                                        :
                                                        loading ?
                                                            <button disabled className='flex items-center bg-violet-200  border-2 border-violet-300 py-2 px-6 rounded-md '>
                                                                <svg aria-hidden="true" className="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-violet-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                                                </svg>
                                                                <span className="px-4">درحال ارسال...</span>
                                                            </button>
                                                            :
                                                            <button type="submit" className=' bg-violet-600 text-white px-10 py-2 rounded-md font-bold hover:bg-violet-800 '>
                                                                ثبت درخواست
                                                            </button>
                                            }

                                        </div>
                                        <div>
                                        </div>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>

            </div>
        </div>
    );
}

export default ContactUs;