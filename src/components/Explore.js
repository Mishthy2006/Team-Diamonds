    import React from 'react';
    import { data } from '../assets/Explore/index';
    import image1 from '../assets/Explore/1.jpg';
    import image2 from '../assets/Explore/2.jpg';
    import image3 from '../assets/Explore/3.jpg';
    import image4 from '../assets/Explore/4.jpg';
    import './Explore.css'

    const images = [image1, image2, image3, image4];

    export default function Explore() {
    return (
        <div className='w-full h-auto my-20'>
        <div className='heading'>
            <h1 className='text-3xl mx-20'>Explore Diamonds Direct</h1>
        </div>
        <div className='content flex my-10 gap-10 mx-14'>
            {data.map((item, index) => (
            <div key={item.key}>
                <div className='container'>
                <div className='image-container'>
                <img src={images[index]} alt='img' className='w-80 h-80 cursor-pointer' />
                </div>
                </div>
                <a href='#' className='text-2xl font-light hover:text-[#782374]'>
                {item.label}
                </a>
            </div>
            ))}
        </div>
        </div>
    );
    }
