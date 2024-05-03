import React from 'react';
import {diffimg1, diffimg2, diffimg3, diffimg4, diffimg5} from '../assets/index';

export default function Difference() {
  return (
    <div className='w-full h-auto'>
    
      <h1 className='text-[#31282f] font-serif text-3xl mx-[35%] my-20'>The Diamonds Direct Difference</h1>
      <div className='differences h-34 flex space-x-10 mx-auto max-w-[1100px]  py-6 border border-[#e2e2e4]' >
        <div className='difference1 flex px-5 '>
             <img className='h-14 w-14 cursor-pointer'src={diffimg1} alt='Lifetime Upgrade'/>
          <h1 className='text-xl font-sans  text-[#4e4351]'>110% Lifetime <br /> Upgrade </h1>
        </div>
        <div className='difference2 flex px-5'>
            <img className='h-14 w-14 cursor-pointer' src={diffimg2}/>
          <h1 className='text-xl font-sans text-[#4e4351]'>Complimentary <br />Repairs & Care </h1>
        </div>
        <div className='difference3 flex px-5  'style={{width:'450px'}}>
        <img className=' h-14 w-14 cursor-pointer'src={diffimg3}/>
          <h1 className='text-xl font-sans text-[rgb(78,67,81)]'>Risk Free 30 Days <br/>Returns</h1>
        </div>
        <div className='difference4 flex px-5'>
        <img className='h-14 w-14 cursor-pointer'src={diffimg4}/>
          <h1 className='text-xl font-sans text-[#4e4351]'>Personalized <br />Guidance </h1>
        </div>
        <div className='difference5 flex px-16'>
        <img className='h-14 w-14 cursor-pointer' src={diffimg5}/>
          <h1 className='text-xl font-sans text-[#4e4351]'>30+ Showroom <br />Locations</h1>
        </div>
      </div>
    </div>
   
  );
}
