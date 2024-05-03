import React from 'react';
import debanner from '../../assets/Debanner.webp';
import scale1 from '../../assets/scale1.webp';
import scale2 from '../../assets/scale2.webp';
import purpbg from '../../assets/purpbg.webp'
import certificate from '../../assets/certificate.webp'
import './diamondedu.css';
import Difference from '../../components/Difference'
import Footer from '../../components/Footer'



export default function Diamondedu() {
  return (
    <div className='w-full'>
      <div className='relative w-full' style={{ height: '550px' }}>
        <img className='w-full h-full object-cover' src={debanner} alt="Diamond Education" />
        <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-4xl '>Diamond Education</h1>
      </div>
      <h1 className='text-4xl font-semibold my-24 flex justify-center'>The 4Cs of Diamonds</h1>
      <p className='text-[#6D6672] flex font-normal font-sans justify-center text-lg' style={{marginTop:'-80px'}}>
        Selecting the perfect diamond starts with a little education. We begin with the 4Cs: Carat, Cut, Color, and Clarity.
      </p>
      <div className='flex justify-center space-x-4 my-14'>
        <div className='card bg-[#F4F4F5] w-80 p-10 relative'>
          <h2 className='text-2xl flex justify-center font-semibold'>Carat</h2>
          <p className='mx-2 my-5 text-lg'>Diamond carat weight is the measurement of how much a diamond weighs. A metric "carat" is defined as 200mg. Each carat can be subdivided into 100 points. This allows very precise measurements.</p>
          <div className='inner-border'></div>
        </div>
        <div className='card bg-[#F4F4F5] w-80 p-10 relative'>
          <h2 className='text-2xl flex justify-center font-semibold'>Cut</h2>
          <p className='mx-2 my-5 text-lg'>The cut of a diamond determines its brilliance. A well-cut diamond will reflect light internally from one mirror-like facet to another and disperse it through the top of the stone.</p>
          <div className='inner-border'></div>
        </div>
        <div className='card bg-[#F4F4F5] w-80 p-10 relative'>
          <h2 className='text-2xl flex justify-center font-semibold'>Color</h2>
          <p className='mx-2 my-5 text-lg'>Color evaluation is based on the absence of color. The color scale for diamonds begins with D, representing a colorless diamond, and continues to Z.</p>
          <div className='inner-border'></div>
        </div>
        <div className='card bg-[#F4F4F5] w-80 p-10 relative'>
          <h2 className='text-2xl flex justify-center font-semibold'>Clarity</h2>
          <p className='mx-2 my-5 text-lg'>The process of creating a diamond in nature results in internal and external characteristics called “inclusions” and “blemishes”. The clarity scale begins with flawless and ends with included.</p>
          <div className='inner-border'></div>
        </div>
      </div>
      <div className='diamondeducation'>
      <h1 className='text-4xl font-semibold my-24 flex justify-center'>Diamond Education</h1>
      <img src={scale1}  className='px-56' alt="Diamond Education" />
      <img src={scale2} className='px-56 my-10'  alt="Diamond Education" />
      </div>
      <div className='diamond-grading'>
      <h1 className='text-4xl font-semibold my-24 flex justify-center'>Additional Diamond Grading Criteria</h1>
      <div className='flex justify-center space-x-4 my-14 gap-10'>
        <div className='card bg-[#F4F4F5] w-96 p-10 relative'>
          <h2 className='text-2xl flex justify-center font-semibold'>Polish</h2>
          <p className='mx-2 my-5 text-lg'>Diamond carat weight is the measurement of how much a diamond weighs. A metric "carat" is defined as 200mg. Each carat can be subdivided into 100 points. This allows very precise measurements.</p>
          <div className='inner-border'></div>
        </div>
        <div className='card bg-[#F4F4F5] w-96 p-10 relative'>
          <h2 className='text-2xl flex justify-center font-semibold'>Symmetry</h2>
          <p className='mx-2 my-5 text-lg'>Symmetrical diamonds reflect more light, adding to the overall sparkle. Gemologists review more than 20 different symmetry features in order to grade how perfectly the facets and cut angles align.</p>
          <div className='inner-border'></div>
        </div>
        <div className='card bg-[#F4F4F5] w-96 p-10 relative'>
          <h2 className='text-2xl flex justify-center font-semibold'>Fluorescence</h2>
          <p className='mx-2 my-5 text-lg'>Fluorescence measures the intensity of the light emitted by a diamond under an ultraviolet light. Around 30% of diamonds exhibit some level of fluorescence. Fluorescence can affect the overall value of a diamond.</p>
          <div className='inner-border'></div>
        </div>
        </div>
      </div>
      <div className='certificate-section relative my-20' style={{ height: '500px' }}> 
  <img className='px-14 absolute top-0 left-0 w-full h-full' src={purpbg}/>
  <img className='absolute w-96 right-32 top-1/2 transform -translate-y-1/2' src={certificate}/>
  <h1 className='absolute w-1/3 left-32 text-white top-1/2 transform  -translate-y-1/2'><span className='text-3xl '> Certified Diamonds</span><br/>
A certification is an independent quality report on a specific diamond. It is issued by a diamond grading laboratory with no affiliation to any retail outlet, giving the consumer a completely objective opinion on the diamond’s quality. The certification includes the exact measurements, proportions, color grade, clarity grade, cut grade and carat weight of the diamond. It also includes specifics that most jewelers do not have the equipment or the knowledge to determine, such as the diamond’s fluorescence, polish, and symmetry. Each certification has its own number, the date which it was analyzed, and a plot chart which shows the internal and external characteristics of the diamond. The leading diamond laboratory in the world and the one that is setting the diamond grading standard is the Gemological Institute of America (G.I.A.).</h1> 
</div>
<Difference/>

    </div>
  );
}
