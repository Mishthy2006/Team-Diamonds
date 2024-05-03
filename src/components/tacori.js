    import React from 'react'
    import tacori from '../assets/tacori.jpg'
    
    export default function Tacori() {
      return (
        <div className='w-full h-auto'>
            <div className='relative'>
            <img src={tacori} alt='tacori' className='w-full h-96 px-10 ' />
            <div className='content absolute right-36'style={{marginTop:'-280px' }}>
            <h1 className='text-4xl py-6'>Designer Markdowns</h1>
            <h1 className='text-xl font-light text-[#31282F]'>Tacori Fashion Collection - Save up to 50%*</h1>
            <em >*Subject to availability</em>
            <button className='bg-transparent text-[#4e4351] font-serif text-xl py-3 px-5 mx-8  border my-24 border-[#4e4351] hover:bg-[#4e4351] hover:border-[#4e4351] hover:text-white' style={{ position: 'absolute', top: '75%', left: '18%', transform: 'translate(-50%, -50%)' }}>SHOP NOW</button>,
            </div>
        </div>
        </div>
        
      )
    }
    