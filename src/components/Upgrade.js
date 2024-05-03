import React from 'react'
import upgradebg from '../assets/upgradebg.jpg'

export default function Upgrade() {
  return (
    <div className='upgrade-panel w-full h-auto my-10'>
       
        <div className='relative'>
            <img src={upgradebg} alt='upgradebg'/>
            </div>
        <div className='content absolute mx-24'style={{marginTop:'-250px'}}>
            <h1 className='text-4xl py-10'>110% Lifetime Upgrade</h1>
            <h1 className='text-xl font-light text-[#31282F]'>Did you know Diamonds Direct’s Lifetime Upgrade isn’t just applicable to your<br/> engagement ring diamond? You can also upgrade your diamond studs and diamond<br/> pendants.</h1>
        </div>
    </div>
  )
}