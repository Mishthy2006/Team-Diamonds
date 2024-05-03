import React from 'react';
import { category1, category2, category3, category4, category5, category6 } from '../assets/index';
import './Categories.css';
import './Explore.css';

export default function Categories() {
  return (
    <div className='flex-shrink space-x-0'>
      <h1 className='text-3xl mx-14'>Shop By Category</h1>
      <div className="flex">
        <div className="flex-column">
          <div className="container">
        <div className="image-container relative">
  <img className='h-72 mx-20 my-10 cursor-pointer' src={category1} alt="Category 1" />
  <h1 className='absolute  left-32 right-0 bottom-16 font-serif text-[#746274] cursor-pointer'>SHOP</h1>
  <h1 className='absolute  left-32 right-0 bottom-6 font-sans font-normal text-3xl text-black  cursor-pointer  hover:underline decoration-violet-900 decoration-2'>Engagement Rings</h1>
</div>
</div>

          <div className="container">
          <div className="image-container relative">
            <img className='h-80 w-10/12 mx-20 my-15 cursor-pointer' src={category2} alt="Category 2" />
            <h1 className='absolute  left-32 right-0 bottom-16 font-serif text-[#746274] cursor-pointer'>SHOP</h1>
            <h1 className='absolute  left-32 right-0 bottom-6 font-sans font-normal text-3xl text-black  cursor-pointer  hover:underline decoration-violet-900 decoration-2'>Diamonds</h1>
          </div>
          </div>
        </div>
        <div className="flex-column my-10 mx-10">
        <div className="container">
          <div className="image-container relative">
            <img className="w-11/12 cursor-pointer" src={category3} style={{ height: '650px' }} alt="Category 3" />
            <h1 className='absolute  left-8 right-0 bottom-16 font-serif text-[#746274] cursor-pointer'>SHOP</h1>
            <h1 className='absolute  left-8 right-0 bottom-6 font-sans font-normal text-2xl text-black  cursor-pointer  hover:underline decoration-violet-900 decoration-2'>Wedding Bands</h1>
          </div>
          </div>
        </div>
        <div>

          <div className='container'>
          <div className="image-container relative">
            <img className='my-10 cursor-pointer' style={{ width: '841px', height: '286px', marginLeft: '-30px' }} src={category4} alt="Category 4" />
            <h1 className='absolute  left-6 right-0 bottom-16 font-serif text-[#746274] cursor-pointer'>SHOP</h1>
            <h1 className='absolute  left-6 right-0 bottom-6 font-sans font-normal text-3xl text-black  cursor-pointer  hover:underline decoration-violet-900 decoration-2'>Necklaces</h1>
          </div>
          </div>
      
          <div className='flex' style={{ marginTop: '-50px', marginLeft: '-30px' }}>
          <div className='container'>
            <div className="image-container relative">
              <img className='my-10 mx-7 w-80 h-80 cursor-pointer' src={category5} alt="Category 5" />
              <h1 className='absolute  left-10 right-0 bottom-28 font-serif text-[#746274] cursor-pointer'>SHOP</h1>
              <h1 className='absolute  left-10 right-0 bottom-20 font-sans font-normal text-3xl text-black  cursor-pointer  hover:underline decoration-violet-900 decoration-2'>Earrings</h1>
            </div>
            </div>
            <div className='container'>
            <div className="image-container relative">
              <img className='w-80 h-80 my-10 mx-2 cursor-pointer' src={category6} alt="Category 6" />
              <h1 className='absolute  left-10 right-0 bottom-24 font-serif text-[#746274] cursor-pointer'>SHOP</h1>
              <h1 className='absolute  left-10 right-0 bottom-16 font-sans font-normal text-3xl text-black  cursor-pointer hover:underline decoration-violet-900 decoration-2'>Bracelets</h1>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
