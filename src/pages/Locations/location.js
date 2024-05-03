import React from 'react';
import locations from '../Locations/location.json';

export default function Location() {
  return (
    <div className='w-full h-auto'>
      <div className='heading text-3xl mx-10'style={{marginTop:'200px'}}>
        <h1 className='font-serif underline underline-offset-4'>Locations</h1>
      </div>
      <div className='flex flex-wrap justify-center p-5'style={{marginTop:"50px"}}>
        {locations.Data.items.map((location) => (
          <div key={location.key} className='w-1/4 p-4'>
            {location.img && <img src={location.img} alt={location.label} className='w-full h-auto cursor-pointer' />}
            <div className='mt-4'>
              <h1 className='hover:text-[#782374] text-lg cursor-pointer font-medium'>{location.label}</h1>
              <h1 className='text-[#782374] text-lg cursor-pointer font-semibold'>{location.loc1}</h1>
              <h1 className='text-[#782374] text-lg cursor-pointer font-semibold'>{location.loc2}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
