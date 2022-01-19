import React from 'react'
import logo from './../images/clip_transparent.png';
export default function Footer() {
    return (
        <>
        <div className='md:hidden my-4 mx-auto'>
            <div className='text-center font-bold  mb-2 md:mb-3'>
                Get the App from ...
            </div>
            <div className='flex justify-center'>
                <a className='mx-2 flex border-1 rounded-lg text-2xl py-1 px-2'>
                    <i class="fab fa-google-play my-auto"></i> <p className=' my-auto ms-2'>Play Store </p>
                </a>
                <a className='mx-2 flex border-1 rounded-lg text-2xl py-1 px-2'>
                    <i class="fab fa-app-store-ios my-auto"></i> <p className=' my-auto ms-2'>App Store </p>
                </a>
            </div>
        </div>

        <div className='bg-footercolor lg:px-32 md:px-4 pt-10 pb-3'>
            <div className='md:flex pb-8'>
                <div className='md:w-2/12 pl-2 pr-6'> 
                    <img src={logo} alt='logo' className='w-48 mx-auto'/>

                    <div className='flex md:hidden mt-2 mb-3 justify-center'>
                        <a className='text-center ml-3 pr-3 '> Guide </a>
                        <span> | </span>
                        <a className='text-center ml-3 pr-3 '> Contact Us </a>
                        <span> | </span>
                        <a className='text-center ml-3 pr-3 '> About Us </a>
                        <span> | </span>
                        <a className='text-center ml-3 pr-3  '> Terms and Conditions </a>
                        
                    </div>

                    <div className='hidden md:visible md:flex lg:text-3xl md:text-2xl justify-center mt-4  '>
                        <i class="fab fa-twitter-square md:mx-1 lg:mx-2"></i>
                        <i class="fab fa-facebook-square md:mx-1 lg:mx-2"></i>
                        <i class="fab fa-linkedin md:mx-1 lg:mx-2"></i>
                        <i class="fab fa-instagram-square md:mx-1 lg:mx-2"></i>
                    </div>
                </div>
                <div className='hidden md:block md:w-8/12  md:my-auto '>
                    <div className='text-center font-bold  mb-2 md:mb-3'>
                        Get the App from ...
                    </div>
                    <div className='flex justify-center'>
                        <a className='mx-2 flex border-1 rounded-lg text-2xl py-1 px-2'>
                            <i class="fab fa-google-play my-auto"></i> <p className=' my-auto ms-2'>Play Store </p>
                        </a>
                        <a className='mx-2 flex border-1 rounded-lg text-2xl py-1 px-2'>
                            <i class="fab fa-app-store-ios my-auto"></i> <p className=' my-auto ms-2'>App Store </p>
                        </a>
                    </div>
                    
                </div>
                <div className='md:hidden flex justify-center mt-8 text-2xl'>
                    <i class="fab fa-twitter-square mx-3"></i>
                    <i class="fab fa-facebook-square mx-3"></i>
                    <i class="fab fa-linkedin mx-3"></i>
                    <i class="fab fa-instagram-square mx-3"></i>
                </div>
                <div className='hidden md:block md:w-2/12 font-bold'>
                    <a className='text-right w-full block'> Guide </a>
                    <a className='text-right w-full block'> Contact Us </a>
                    <a className='text-right w-full block'> About Us </a>
                    <a className='text-right w-full block'> Terms and Conditions </a>
                    
                </div>
            </div>
            <div className='text-center'>
                © Copyright 2022 @ The Clippp Pvt Ltd | All rights reserved
            </div>
        </div>
        </>
    )
}
