import React from 'react'
import logo from './../images/clippp.png';
export default function Header() {
    return (
        <div className='w-full bg-green-200'>
            {/* <div className='text-red-500 font-bold'> This is me.</div> */}
            <div className='mx-32 my-3 flex' >
                <div className='w-44 bg-red-200 mx-3'> 
                    <img src={logo} alt='logo' />
                </div>
                {/* <div className='w-9/12 flex justify-end'>
                    <div className='w-24 my-auto text-center border-r-2 border-r-black'> About Us </div>
                    <div className='w-24 my-auto text-center'> Contact Us </div>
                </div> */}
                <div className='w-full flex justify-end'>
                    <div className='w-20 my-auto text-center border-r-2 border-gray-700'> Sign In </div>
                    <div className='w-20 my-auto text-center'> Sign Up </div>
                </div>

            </div>
        </div>
    )
}
