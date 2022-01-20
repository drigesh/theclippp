import React from 'react';
import poster from './../images/poster3.png';
import location from './../images/loc3.png';
import {FiSearch} from 'react-icons/fi'
export default function Body() {
  return (
    <div className='lg:px-32'> 
    <div>
            <img src={location} className='mx-auto w-52'/>
        </div>
        <div className=''>
            <div className='w-7/12 mx-auto border-2 border-themeColor-600 text-3xl py-2 rounded-full'>
            Search here! 
            <i class="bi bi-search"></i>
            <FiSearch />
            </div>
        </div>

        <img src={poster} alt='Poster.png' className='object-cover w-full h-68' ></img>

        

    
    </div>
  );
}
