import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { slider1, slider2, slider3, slider4 } from '../assets/index';

const data = [slider1, slider2, slider3, slider4];
const Banners = () => {
  const fadeImages = [slider1, slider2, slider3, slider4];
  const slideTexts = [
    <h1 className='text-[#B33052] font-serif text-5xl' style={{ position: 'absolute', top: '52%', left: '35%', transform: 'translate(-50%, -50%)' }}>Ready to Tie the Knot ?<br/> <span className='text-white text-2xl mx-28 font-serif font-normal'>Design Your Dream Ring Today</span>  </h1>,
    <h1 className='text-[#100D0E] font-serif text-5xl' style={{ position: 'absolute', top: '48%', left: '35%', transform: 'translate(-50%, -50%)' }}>The Diamonds Direct Difference  <span className='font-serif text-xl'><br/>Expert led education, transparent pricing, unmatched selection, and exclusives like </span> <span className='font-serif text-xl mx-48'><br/>our free setting and flexible financing</span></h1>,
    <h1 className='text-[#100D0E] font-serif text-5xl' style={{ position: 'absolute', top: '45%', left: '30%', transform: 'translate(-50%, -50%)' }}>Design Your Dream Payments<span className='font-serif text-xl mx-28 '><br/>Learn About Financing Options At Diamonds Direct </span></h1>,
    <h1 className='text-[#100D0E] font-serif text-5xl' style={{ position: 'absolute', top: '45%', left: '35%', transform: 'translate(-50%, -50%)' }}>Diamonds Direct Timepieces<span className='font-serif text-xl mx-28 '><br/>Explore our special assortment of new and pre-owned men's and women's watches </span></h1>,
  ];
  const buttons=[
    <button className='bg-[#B33052] border border-[#B33052] text-white font-serif text-xl py-2 px-4 hover:bg-transparent  hover:border-[#B33052] hover:opacity-80 transition-all duration-200 hover:text-[#B33052]' style={{ position: 'absolute', top: '72%', left: '35%', transform: 'translate(-50%, -50%)' }}>SHOP ENGAGEMENT</button>,
    <button className='bg-transparent text-[#4e4351] font-serif text-xl py-3 px-5 border border-[#4e4351] hover:bg-[#4e4351] hover:border-[#4e4351] hover:text-white' style={{ position: 'absolute', top: '75%', left: '18%', transform: 'translate(-50%, -50%)' }}>FREE SETTING</button>,
    <button className='bg-transparent text-[#4e4351] font-serif text-xl py-3 px-5 border border-[#4e4351] hover:bg-[#4e4351] hover:border-[#4e4351] hover:text-white' style={{ position: 'absolute', top: '65%', left: '22%', transform: 'translate(-50%, -50%)' }}>LEARN MORE</button>,
    <button className='bg-transparent text-[#4e4351] font-serif text-xl py-3 px-5 border border-[#4e4351] hover:bg-[#4e4351] hover:border-[#4e4351] hover:text-white' style={{ position: 'absolute', top: '65%', left: '13.5%', transform: 'translate(-50%, -50%)' }}>LEARN MORE</button>,
  ]

  return (
    <div className="w-full h-auto my-36" style={{ position: 'relative' }}>
      <Fade>
        {fadeImages.map((image, index) => (
          <div key={index} className="slide-container" style={{ position: 'relative' }}>
            <img className='w-full' src={image} alt={`Slide ${index + 1}`} />
            <div className="slide-text" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>{slideTexts[index]}</div>
            <div className="buttons" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>{buttons[index]}</div>
          </div>
          
        ))}
      </Fade>
    </div>
  );
};

export default Banners;
