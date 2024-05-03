import React from 'react'
import labgedu from '../../assets/labgedu.jpeg'
import labgdmade from '../../assets/howlabgdmade.webp'
import howlabgddiff from '../../assets/howlabgddiff.webp'
export default function Labgrowndiamondedu() {
  return (
    <div className='w-full h-auto'>
      <div className='top-banner'>
      <img  src={labgedu} alt="labgedu"style={{marginTop:'149px'}} className='w-full h-auto relative'/> 
      <h1 className='absolute translate-y-[-650%] left-[40%] text-3xl font-normal'>Lab Grown Diamond Education</h1>
      <h1 className='absolute translate-y-[-640%] text-xl left-[45%] font-light'>Another way to say,"I Love You"</h1>
      <button className='absolute translate-y-[-220%] left-[50%] bg-transparent text-[#4e4351] font-serif text-xl py-3 px-5 border border-[#4e4351] hover:bg-[#4e4351] hover:border-[#4e4351] hover:text-white'>SHOP NOW</button>,
      </div>
      <div className='howmade my-28 mx-20 flex'>
        <img src={labgdmade} alt="labgdmade" />
        <div  className='content my-20'>
        <h1 className='text-3xl font-medium mx-20 '>How Are Lab Diamonds Made?</h1>
        <h1 className='mx-20 text-lg py-3 text-[#6D6672]'>Laboratory grown diamonds are created in a controlled setting, as opposed to natural diamonds which are formed within the Earth. These laboratory diamonds undergo the same process of diamond creation; however, they are not exposed to the extreme conditions and pressures that occur deep within the Earth.

As a result, these two types of diamonds share many of the same optical and chemical properties. The main difference between them is their origin.</h1>
        </div>

      </div>
      <div className='flex justify-center  space-x-4 my-14 px-20'>
        <div className='card bg-[#F4F4F5] w-2/4 h-96 p-10 relative'>
          <h2 className='text-2xl flex justify-center font-semibold'>Natural Diamonds</h2>
          <p className='mx-2 my-5 text-lg'>The rarity of natural diamonds makes them highly sought-after, as it can take millions or even billions of years for these precious gems to form beneath the surface of the Earth. This limited supply results in natural diamonds being priced higher per carat, but the value of these gems is guaranteed to remain over time.</p>
          <div className='inner-border'></div>
        </div>
        <div className='card bg-[#F4F4F5]  p-10 w-2/4 h-96  relative'>
          <h2 className='text-2xl flex justify-center font-semibold'>Lab Grown Diamonds</h2>
          <p className='mx-2 my-5 text-lg'>Lab-grown diamonds are often seen as a more affordable option due to their mass-manufactured nature and availability in unlimited quantities. However, the abundance of lab-grown diamonds in the market may not necessarily ensure that their value will hold over time. It's important to consider that the resale or upgrade value of a lab-grown diamond may not be as high as initially anticipated.</p>
          <div className='inner-border'></div>
        </div>
        </div>
        <div className='howmade my-28 mx-20 flex'>
        <div  className='content my-20'>
        <h1 className='text-3xl font-medium mx-20 '>How Are Diamonds Direct Lab Diamonds Different?</h1>
        <h1 className='mx-20 text-lg py-3 text-[#6D6672]'>All Diamonds Direct lab-grown diamonds are certified and hand-selected for their beauty and quality. GIA and IGI Laboratory Grown Diamond Reports are grading reports that attest to the quality of lab-grown diamonds. The laboratory grown diamond's girdle is also laser inscribed with the report number and the words "lab grown." These steps are taken in order to clearly delineate lab-grown diamonds from natural diamonds.

In addition to our expansive collection of lab-grown bridal and fashion jewelry, our diamond experts are available in-store and online to answer any questions and help you make the best choice for your needs.</h1>
        </div>
        <img src={howlabgddiff} alt="labgdmade" />

      </div> 
    </div>
  )
}
