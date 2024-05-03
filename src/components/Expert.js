import React from 'react';
import expert from '../assets/expert.jpg'

export default function Expert() {
  return (
    <div className='w-full h-auto my-20'>
      <div className='bg-[#ebeaeb]  py-32 flex'>
        <div className='my-20'>
        <h1 className='text-3xl mx-14'>Need Guidance? Consult An Expert.</h1>
        <h1 className='mx-14 py-4 text-lg text-[#6D6672]'>
          Receive one-on-one, personal guidance from our industry leading diamond
          <br />
          experts in-store or online.
        </h1>
        <div className='flex justify-center'style={{marginTop:'-90px',marginLeft:'-100px'}}> 
        <button className='bg-transparent text-[#4e4351] font-serif text-xl py-3 px-5 mx-4 border my-24 border-[#4e4351] hover:bg-[#4e4351] hover:border-[#4e4351] hover:text-white'>
          REQUEST AN APPOINTMENT
        </button>
        <button className='bg-transparent text-[#4e4351] font-serif text-xl py-3 px-5 mx-4 border my-24 border-[#4e4351] hover:bg-[#4e4351] hover:border-[#4e4351] hover:text-white'>
          CHAT NOW
        </button>
      </div>
      </div>
      <div className=''>
        <img src={expert} alt='experTnpt' className='w-full h-max'/>
        </div>
        </div>

      </div>
  
  );
}
