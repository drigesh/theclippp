import React from 'react';

export default function PersonaCard({name,desc,rating,photo,left}) {
  return <>

{/* full star -> <i class="fas fa-star text-yellow-500 text-lg"></i> */}
{/* empty star -> <i class="far fa-star text-yellow-500 text-lg"></i> */}
{/* half star -> <i class="fas fa-star-half-alt text-yellow-500 text-lg"></i> */}


      <div className={`bg-white w-5/12 rounded-3xl ${left ? 'mr-auto' : 'ml-auto'} py-1 relative`}>
        <div className='px-3 py-1'>
          <p className='font-bold mt-1 text-themeColor-600'> {name} </p>
          <p className='w-10/12 py-1'> {desc}</p>
          <p className='py-1'> <i class="fas fa-star text-yellow-500 text-lg"></i>
          <i class="fas fa-star text-yellow-500 text-lg"></i>
          <i class="fas fa-star text-yellow-500 text-lg"></i>
          <i class="fas fa-star text-yellow-500 text-lg"></i> 
          {rating == 5 ? (<i class="fas fa-star text-yellow-500 text-lg"></i>) : 
          rating > 4 ? (<i class="fas fa-star-half-alt text-yellow-500 text-lg"></i>) : (<i class="far fa-star text-yellow-500 text-lg"></i>)} </p>
          <img src={photo} alt="user's photo" className='object-contain rounded-full w-28 h-28 absolute -bottom-8 -right-6'/>
        </div>
      </div>
        

  </>;
}
