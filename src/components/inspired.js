import React from 'react';
import instagram from '../assets/whiteinsta.png';
import image1 from '../assets/inspired/1.jpg';
import image2 from '../assets/inspired/2.jpg';
import image3 from '../assets/inspired/3.jpg';
import image4 from '../assets/inspired/4.jpg';
import { data } from '../assets/inspired/index';
import './inspired.css';

const images = [image1, image2, image3, image4];

export default function Inspired() {
  return (
    <div className='w-full h-auto py-10'>
      <div className='flex justify-center'>
      
        <h1 className='text-3xl font-medium mx-2 text-[#31282F]'>Get Inspired</h1>
      </div>
      <div className='flex justify-center my-2 '>
        <h1 className='text-lg'><a href="https://www.instagram.com/diamondsdirect/" className='hover:text-[#782374]'>@Diamondsdirect</a> <span className='text-[#6D6672] font-light'>Your love is celebrated through our passion for diamonds.</span></h1>
      </div>
      <div className='content flex my-10 px-10 justify-center'>
        {data.map((item, index) => (
          <div key={item.key} className='container'>
            <div className='image-container'>
            <a href="https://www.instagram.com/diamondsdirect/"><img
                src={images[index]}
                alt='img'
                className='w-96 h-96 cursor-pointer'
              /></a>
              <div className='overlay'>
              <a href="https://www.instagram.com/diamondsdirect/"><img className='w-7 h-7 mx-10 my-2 fill-white' src={instagram} alt='Instagram' />
                <p className='text-[#782374] font-bold'>SHOP THE LOOK</p></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
