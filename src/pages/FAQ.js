import React from 'react'
import items from '../pages/FAQdata.json'
import faqbg from '../assets/faqbg.webp'



import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

export default function  () {
  return (
    <div style={{marginTop:'149px'}}>
           <div className='top-banner'>
      <img  src={faqbg} alt="labgedu"style={{marginTop:'149px'}} className='w-full h-auto relative'/> 
      <h1 className='absolute translate-y-[-650%] left-[40%] text-3xl font-normal'>We're Here To Help!</h1>
      <h1 className='absolute translate-y-[-210%] text-xl left-[30%] font-light'>For orders placed at one of our locations please contact a store near you. For orders<br/> placed online please reply to your order confirmation email or email us at<br/> online@diamondsdirect.com.</h1>
      </div>
        <Accordion allowZeroExpanded>
    {items.map((item) => (
        <AccordionItem key={item.uuid}>
            <AccordionItemHeading>
                <AccordionItemButton>
                    {item.heading}
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              {item.content}
            </AccordionItemPanel>
        </AccordionItem>
    ))}
</Accordion>
      
    </div>
  )
}
