import React from 'react';
import poster from './../images/poster3.png';
import location from './../images/loc9.png';
import {FiSearch} from 'react-icons/fi'
export default function Body() {
  return (
    <div className='lg:px-32  my-4 '> 
      <div className='text-center mt-8 mb-4'>
        <p className='text-4xl font-bold'> Get the online <a className='text-themeColor-500 hover:underline'> check-in</a> here </p>
        <p className='text-2xl my-2'>and Discover <span className='hover:underline'>real-time</span> waiting queues ... </p>
      </div>
      <div className='my-2'>
          <img src={location} className='mx-auto object-fill w-60 h-64'/>
      </div>
      <div className='mb-6 '>
        <p className='w-7/12 mx-auto px-4 my-1 text-lg text-gray-600'> Search City, State or Pin Code...</p>
          <div className='w-7/12 mx-auto border-2 border-themeColor-600 text-2xl py-2 rounded-full flex px-2' >
            <input className='w-11/12 border-r-2 border-themeColor-700 ml-4 mr-1 laceholder:px-4 focus:outline-none' placeholder='Search for the Salon @ your location!'/>
            {/* <span className=''> | </span> */}
            <FiSearch className='mx-2 pr-1 text-4xl'/>
          </div>
      </div>

      

      <img src={poster} alt='Poster.png' className='object-cover w-full h-68' ></img>

        

    
    </div>
  );
}
