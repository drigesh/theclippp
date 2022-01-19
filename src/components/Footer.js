import React from 'react'
import logo from './../images/clippp.png';
export default function Footer() {
    return (
        <div className='bg-footercolor px-32 pt-10 pb-3'>
            <div className='flex pb-8'>
                <div className='w-2/12 '> 
                    <img src={logo} alt='logo' />
                </div>
                <div className='w-8/12  my-auto'>
                    <div className='text-center font-bold mb-3'>
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
                <div className='w-2/12 font-bold'>
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
    )
}
