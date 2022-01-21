import React from 'react';
import poster from './../images/poster3.png';
import location from './../images/loc9.png';
import {FiSearch} from 'react-icons/fi'
import FeatureCard from './FeatureCard';

export default function Body() {
  return (
    <>
    <div className='lg:px-32  my-4 '> 
      <div className='text-center mt-10 mb-4'>
        <p className='text-2xl md:text-4xl font-bold'> Get the online <a className='text-themeColor-500 hover:underline'> check-in</a> here </p>
        <p className='text-lg md:text-2xl my-1 md:my-2'>and discover <span className='hover:underline'>real-time</span> waiting queues ... </p>
      </div>
      <div className='my-2'>
          <img src={location} className='mx-auto object-fill w-40 h-44 md:w-60 md:h-68 '/>
      </div>
      <div className='mb-6 '>
        <p className='w-10/12 lg:w-7/12 mx-auto px-4 mb-1 mt-2 md:text-md lg:text-lg text-gray-600'> Search City, State or Pin Code...</p>
          <div className='w-10/12  lg:w-7/12 mx-auto border-1 md:border-2 border-themeColor-700 md:text-lg lg:text-2xl py-1 md:py-2 rounded-full flex px-2' >
            <input className='w-11/12 border-r-1 md:border-r-2 border-themeColor-700 ml-4 mr-1  focus:outline-none' placeholder='Search for the Salon @ your location!'/>
            {/* <span className=''> | </span> */}
            <FiSearch className='mx-2 md:pr-1 text-3xl md:text-4xl'/>
          </div>
      </div>
      </div>
{/* /////////////////// Features of the App ///////////////////// */}

      <div className='lg:px-32 bg-gray-50 flex flex-wrap my-6 py-4'>

        <FeatureCard icon={'fas fa-check-circle'} head={'Easy Online Check-In'} desc= {'Check-in online with App/website and head to the salon before your turn.'} />
        <FeatureCard icon={'fas fa-clock'} head={'Save your valuable time'} desc= {'Now dont need to be in Salon. Just discover real-time waiting time on the Clippp.'} />
        <FeatureCard icon={'fas fa-map-marked-alt'} head={'Discover nearby Salon'} desc= {'Click on the map or type the location, and find all the saloons nearby.'} />
        <FeatureCard icon={'fas fa-clipboard'} head={'Get similar requirements as before'} desc= {'Have a option to get the style as you took last time.'} />

        
      </div>
      
{/* //////////////////   Poster ///////////////////////// */}

<div className='w-full h-68 bg-themeColor-200'>

    
    


</div>

{/* //////////////////   User Persona ///////////////////////// */}

{/* full star -> <i class="fas fa-star"></i> */}
{/* empty star -> <i class="far fa-star"></i> */}
{/* half star -> <i class="fas fa-star-half-alt"></i> */}

    <div className='lg:px-32 bg-gray-200 h-68 w-full py-4'>

      <div className='bg-white w-5/12 rounded-lg ml-auto p-2'>
        <p className='font-bold'> Ankita Singh </p>
        <p className=''> This is the best App of my life. Really great experience.</p>
        <p> <i class="fas fa-star text-yellow-500"></i><i class="fas fa-star text-yellow-500"></i><i class="fas fa-star text-yellow-500"></i><i class="fas fa-star text-yellow-500"></i><i class="fas fa-star text-yellow-500"></i> </p>
      </div>

      <div className='bg-white w-5/12 rounded-lg mr-auto'>
        <p className='font-bold'> Ankita Singh </p>
        <p className=''> This is the best App of my life. Really great experience.</p>
        <i class="fas fa-star-half-alt text-yellow-500"></i>
      </div>

      <div className='bg-white w-5/12 rounded-lg ml-auto'>
        <p className='font-bold'> Ankita Singh </p>
        <p className=''> This is the best App of my life. Really great experience.</p>
      </div>

      <div className='bg-white w-5/12 rounded-lg mr-auto'>
        <p className='font-bold'> Ankita Singh </p>
        <p className=''> This is the best App of my life. Really great experience.</p>
      </div>

    </div>






      <img src={poster} alt='Poster.png' className='object-cover w-full h-66' ></img>

        

    
    
    </>
  );
}
