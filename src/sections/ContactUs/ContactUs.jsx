import React, {  useState } from 'react';
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

        <div className=' relative'>
            <div className='contact-wrapper '>
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
                <div className='contact-info '>
                    <div>
                        <h2 className='contact-title '> تماس با ما </h2>
                    </div>
                    <div className='contact-body '>
                        <div>
                            <p className='contact-text '>آدرس:</p>
                            <p className='contact-description '>لورم ایپسوم متن ساختگی، متن فارسی 2365</p>
                        </div>
                        <div>
                            <p className=' contact-text'>شماره تماس:</p>
                            <p className='contact-description '>09100000000</p>
                        </div>
                        <div>
                            <p className=' contact-text'> آدرس ایمیل:</p>
                            <p className='contact-description '>info@gmail.com</p>
                        </div>
                        <div>
                            <p className=' contact-text'>ساعت پاسخگویی:</p>
                            <p className='contact-description '>شنبه تا 4 شنبه از ساعت 9 تا 18</p>
                        </div>
                    </div>
                    <div>
                        <h2 className=' contact-text'>ما را در شبکه های اجتماعی دنبال کنید.</h2>
                        <div className='contact-social '>
                            <a href='#'>
                                <ImFacebook className='contact-social-link ' />
                            </a>
                            <a href='#'>
                                <FaTwitter className='contact-social-link ' />
                            </a>
                            <a href='#'>
                                <PiInstagramLogoFill className='contact-social-link ' />
                            </a>
                            <a href='#' className=''>
                                <PiLinkedinLogoBold className='contact-social-link ' />
                            </a>

                        </div>
                    </div>
                </div>

                <div className='contact-form-wrapper '>

                    <div className=' max-sm:hidden '>
                        <Bg />
                    </div>
                    <div className='contact-form'>

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
                                    <div className=' form-body'>
                                        <div className='form-row  '>
                                            <div className='input-group'>
                                                <label className='form-lable ' >نام و نام خانوادگی <span className=' form-input-required'>*</span></label>
                                                <Field disabled={inputDisabled} autoComplete="new-name" name="name" type="text" placeholder={'نام'} className={` form-input-default 
                                                ${!touched.name || inputDisabled ? 'form-input '
                                                        : errors.name ? 'form-input-error'
                                                            : ' form-input-success'} `} />
                                                {errors.name && touched.name ? (
                                                    <ErrorMessage component="div" name="name" className=' form-error-msg ' />
                                                ) : null}
                                            </div>

                                            <div className='input-group'>
                                                <label className='form-lable'>ایمیل <span className=' form-input-required'>*</span></label>
                                                <Field disabled={inputDisabled} autoComplete="new-email" dir='ltr' name="email" type="text" placeholder={'info@gmail.com'} className={`form-input-default
                                                ${!touched.email || inputDisabled ? 'form-input'
                                                        : errors.email ? 'form-input-error'
                                                            : 'form-input-success'} `} />
                                                {errors.email && touched.email ? (
                                                    <ErrorMessage component="div" name="email" className=' form-error-msg ' />
                                                ) : null}

                                            </div>
                                        </div>
                                        <div className=' form-row '>
                                            <div className='input-group ' >
                                                <label className='form-lable '  >شماره تماس <span className=' form-input-required'>*</span></label>
                                                <Field disabled={inputDisabled} dir='ltr' autoComplete="new-phone" name="phoneNum" type="text" placeholder={'09100000000'} className={`form-input-default
                                                ${!touched.phoneNum || inputDisabled ? 'form-input'
                                                        : errors.phoneNum ? 'form-input-error'
                                                            : 'form-input-success'} `} />
                                                {errors.phoneNum && touched.phoneNum ? (
                                                    <ErrorMessage component="div" name="phoneNum" className=' form-error-msg ' />
                                                ) : null}
                                            </div>
                                            <div className='input-group'>
                                                <label className='form-lable'>نام شرکت</label>
                                                <Field disabled={inputDisabled} autoComplete="new-com" name="companyName" type="text" placeholder={'نام شرکت'} className={` form-input-default
                                                ${!touched.companyName || inputDisabled ? 'form-input '
                                                        : ' form-input-success'} `} />
                                                        
                                            </div>
                                        </div>
                                        <div className=' flex flex-col'>
                                            <label className='form-lable '>متن درخواست <span className=' form-input-required'>*</span></label>
                                            <Field disabled={inputDisabled} autoComplete="new-msg" as='textarea' type='text' name="msg" placeholder={'متن درخواست'} className={`form-input-default w-full
                                            ${!touched.msg || inputDisabled ? 'form-input '
                                                    : errors.msg ? 'form-input-error'
                                                        : ' form-input-success'} `} />
                                            {errors.msg && touched.msg ? (
                                                <ErrorMessage component="div" name="msg" className=' form-error-msg ' />
                                            ) : null}
                                        </div>
                                        <div className='  mt-3'>
                                            {
                                                inputDisabled ?
                                                    <div className='form-msg'>
                                                        درخواست شما ثبت شد بزودی با شما تماس میگیریم.
                                                    </div>
                                                    :
                                                    errors.name || errors.email || errors.phoneNum || errors.msg || !touched.name ?
                                                        <button disabled className=' form-btn-disabled'>ثبت درخواست</button>
                                                        :
                                                        loading ?
                                                            <button disabled className=' form-btn-loadig'>
                                                                <svg aria-hidden="true" className="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-primary-700" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                                                </svg>
                                                                <span className="px-4">درحال ارسال...</span>
                                                            </button>
                                                            :
                                                            <button type="submit" className='form-btn-submit bg-primary-600'>
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
        </div>
    );
}

export default ContactUs;