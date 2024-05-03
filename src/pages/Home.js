import React from 'react'

import Banners from '../components/banners'
import Categories from '../components/Categories'
import Difference from '../components/Difference'
import Trending from '../components/trending'
import Upgrade from '../components/Upgrade'
import Explore from '../components/Explore'
import Tacori from  '../components/tacori'
import Expert from '../components/Expert'
import Inspired from '../components/inspired'
import Footer from '../components/Footer'

export default function Home() {
  
  return (
    <div className='w-full h-auto'>
  
      <Banners/>  
      <Categories/>
      <Difference/>
      <Trending/>
      <Upgrade/>
      <Explore/>
      <Tacori/>
      <Expert/>
      <Inspired/>
    </div>
  )
}
