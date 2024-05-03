import React from 'react';
import knot from '../assets/knot.svg';
import trust from '../assets/trust.svg'
import weddingwire from '../assets/weddingwire.svg'

export default function Footer() {
  return (
    <div className='w-full h-auto my-5'>
      <div className='help-panel h-16 flex justify-around p-3 bg-[#7B6E7F] text-white'>
        <h1 className='font-sans text-2xl cursor-pointer hover:text-[#782374]'>How Can We Help?</h1>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-gray-800 dark:text-white " aria-hidden="true" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 10.5h.01m-4.01 0h.01M8 10.5h.01M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.6a1 1 0 0 0-.69.275l-2.866 2.723A.5.5 0 0 1 8 18.635V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"/>
        </svg>
        <h1 className='font-sans text-2xl cursor-pointer hover:text-[#782374]' style={{marginLeft:'-150px'}}>Chat With An Expert</h1>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 13h3.439a.991.991 0 0 1 .908.6 3.978 3.978 0 0 0 7.306 0 .99.99 0 0 1 .908-.6H20M4 13v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6M4 13l2-9h12l2 9"/>
        </svg> 
        <h1 className='font-sans text-2xl cursor-pointer hover:text-[#782374]' style={{marginLeft:'-150px'}}>Email Us</h1>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"/>
        </svg>
        <h1 className='font-sans text-2xl cursor-pointer hover:text-[#782374]' style={{marginLeft:'-150px'}}>800.885.5050</h1>
      </div>
      <div className='footer-section flex justify-around p-14 '>
        <div className='support&service'>
          <h1 className='text-xl font-semibold'>Support & Service</h1>
          <ul>
            <li className='text-[#31282F] p-1 cursor-pointer hover:text-[#782374]'>Contact Us</li>
            <li className='text-[#31282F] p-1 cursor-pointer hover:text-[#782374]'>FAQ</li>
            <li className='text-[#31282F] p-1 cursor-pointer hover:text-[#782374]'>Request an Appointment</li>
            <li className='text-[#31282F] p-1 cursor-pointer hover:text-[#782374]'>Chat Now</li>
            <li className='text-[#31282F] p-1 cursor-pointer hover:text-[#782374]'>Warranties & Guarantees</li>
            <li className='text-[#31282F] p-1 cursor-pointer hover:text-[#782374]'>Diamonds Direct Special Financing</li>
          </ul>
        </div>
        <div className='Shop'>
          <h1 className='text-xl font-semibold'>Shop</h1>
          <ul>
            <li className='text-[#31282F] p-1 cursor-pointer hover:text-[#782374]'>Engagement Rings & Diamonds</li>
            <li className='text-[#31282F] p-1 cursor-pointer hover:text-[#782374]'>Wedding Bands</li>
            <li className='text-[#31282F] p-1 cursor-pointer hover:text-[#782374]'>Earrings</li>
            <li className='text-[#31282F] p-1 cursor-pointer hover:text-[#782374]'>Necklace & Pendants</li>
            <li className='text-[#31282F] p-1 cursor-pointer hover:text-[#782374]'>Bracelets</li>
            <li className='text-[#31282F] p-1 cursor-pointer hover:text-[#782374]'>Fashion Rings</li>
            <li className='text-[#31282F] p-1 cursor-pointer hover:text-[#782374]'>Diamonds Direct Custom Designs</li>
          </ul>
        </div>
        <div className='About Us'>
          <h1 className='text-xl font-semibold'>About Us</h1>
          <ul>
            <li className='text-[#31282F] p-1 cursor-pointer hover:text-[#782374]'>locations</li>
            <li className='text-[#31282F] p-1 cursor-pointer hover:text-[#782374]'>About Us</li>
            <li className='text-[#31282F] p-1 cursor-pointer hover:text-[#782374]'>Reviews</li>
            <li className='text-[#31282F] p-1 cursor-pointer hover:text-[#782374]'>Blog</li>
            <li className='text-[#31282F] p-1 cursor-pointer hover:text-[#782374]'>Diamonds Direct Foundation</li>
            <li className='text-[#31282F] p-1 cursor-pointer hover:text-[#782374]'>Careers</li>
          </ul>
        </div>
        <div className='Newsletter'>
          <h1 className='text-xl font-semibold'>Subscribe To Our Newsletter</h1>
          <div>
            <input type='text' name='email' placeholder='Enter Email' className='my-3 w-72 h-10 bg-[#f4f4f5] p-3 border '/>
            <button className='bg-[#f4f4f5] h-10 text-black w-32 my-3 px-4 border border-black  hover:bg-[#782374] hover:text-[white]' type='submit'>SUBMIT</button>
           <div className='icons flex'>
            <svg className='my-3 mx-0 cursor-pointer hover:fill-purple-900 'version="1.1" xmlns="http://www.w3.org/2000/svg" width="66" height="24" viewBox="0 0 666 1024"><title></title><g id="icomoon-ignore"></g><path d="M558.3 576l28.442-185.32h-177.822v-120.26c0-50.7 24.84-100.12 104.478-100.12h80.84v-157.78c0 0-73.359-12.52-143.497-12.52-146.44 0-242.16 88.76-242.16 249.44v141.24h-162.78v185.32h162.78v448h200.34v-448h149.38z"></path></svg>
            <svg className='my-3 mx-0 cursor-pointer  hover:fill-purple-900 ' width="66" height="24" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 922 1024"><title></title><g id="icomoon-ignore"></g><path d="M918.851 327c-3.4-71.8-19.799-135.4-72.402-187.8-52.398-52.4-115.999-68.8-187.796-72.4-74.004-4.2-295.802-4.2-369.802 0-71.6 3.4-135.2 19.8-187.8 72.2s-68.8 116-72.4 187.8c-4.2 74-4.2 295.802 0 369.802 3.4 71.798 19.8 135.398 72.4 187.796 52.6 52.403 116 68.803 187.8 72.402 74 4.198 295.798 4.198 369.802 0 71.798-3.4 135.398-19.799 187.796-72.402 52.403-52.398 68.803-115.999 72.402-187.796 4.198-73.999 4.198-295.602 0-369.602z"></path><path fill="#fff" d="M244.042 511.804c0-127.2 102.6-229.8 229.8-229.8s229.8 102.6 229.8 229.8c0 127.198-102.6 229.802-229.8 229.802s-229.8-102.605-229.8-229.802z"></path><path fill="#fff" d="M713.042 326.204c29.599 0 53.601-23.8 53.601-53.6 0-29.6-24.003-53.6-53.601-53.6s-53.601 24-53.601 53.6c0 29.6 23.803 53.6 53.601 53.6z"></path><path d="M324.438 511.8c0 82.402 67.2 149.402 149.4 149.402s149.4-67 149.4-149.402c0-82.4-67-149.4-149.4-149.4s-149.4 67-149.4 149.4z"></path></svg>
            <svg className='my-3 mx-0 cursor-pointer  hover:fill-purple-900 ' version="1.1" xmlns="http://www.w3.org/2000/svg" width="66" height="24" viewBox="0 0 1024 1024"><title></title><g id="icomoon-ignore"></g><path fill="" d="M1017.6 512c0 274.002-221.998 496-496 496-51.2 0-100.4-7.798-146.8-22.2 20.2-32.998 50.4-86.999 61.6-130.002 6-23.199 30.8-117.996 30.8-117.996 16.2 30.797 63.401 56.996 113.603 56.996 149.596 0 257.398-137.6 257.398-308.598 0-163.8-133.801-286.4-305.802-286.4-213.998 0-327.798 143.6-327.798 300.2 0 72.8 38.8 163.399 100.6 192.199 9.4 4.403 14.4 2.401 16.6-6.6 1.6-6.799 10-40.596 13.8-56.197 1.2-5.002 0.6-9.4-3.4-14.203-20.2-25.001-36.6-70.6-36.6-113.199 0-109.4 82.8-215.2 223.998-215.2 121.8 0 207.201 83 207.201 201.8 0 134.202-67.799 227.202-156.001 227.202-48.599 0-85.198-40.202-73.398-89.6 14-59.003 40.999-122.601 40.999-165.201 0-38-20.398-69.8-62.799-69.8-49.8 0-89.8 51.4-89.8 120.4 0 44.002 14.8 73.601 14.8 73.601s-49 207.601-58 246.4c-10 42.798-6 103.199-1.8 142.397-184.4-72.197-315.2-251.796-315.2-461.998 0-274 222-496 496-496 274.002 0 496 222 496 496z"></path></svg>
            <svg className='my-3 mx-0 cursor-pointer  hover:fill-purple-900 ' width="66" height="24" viewBox="0 0 18 20" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_5179_46765)"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.4876 0C12.8176 2.83828 14.4018 4.53045 17.1561 4.71047V7.90279C15.5599 8.05881 14.1618 7.53675 12.5356 6.55266V12.5233C12.5356 20.108 4.26678 22.4782 0.942451 17.0417C-1.19376 13.5434 0.114369 7.40474 6.96705 7.15872V10.5251C6.445 10.6091 5.88695 10.7411 5.37689 10.9151C3.85274 11.4311 2.98866 12.3972 3.22868 14.1014C3.69073 17.3657 9.67933 18.3318 9.18128 11.9532V0.0060006H12.4876V0Z"></path></g><defs><clipPath id="clip0_5179_46765"><rect width="17.1557" height="20"></rect></clipPath></defs></svg>
            </div>
            <div className='logos flex gap-x-10 my-4'>
            <img src={trust} alt='trust' className='w-28 h-20 border border-gray-400 p-2'/>
            <img src={weddingwire} alt='weddingwire' className='w-20 h-20'/>
              <img src={knot} alt='knot' className='w-20 h-20'/>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className='copyright flex mx-14 my-7 gap-5'>
        <h1>Copyright © 2023 | All Rights Reserved.</h1>
        <ul type="circle" className='flex gap-5'>
        <li className='text-[#6D6672]'>Privacy Policy | </li>
        <li className='text-[#6D6672]'>Terms of Use | </li>
        <li className='text-[#6D6672]'>Accessibility </li>
        </ul>
      </div>
    </div>
  );
}
