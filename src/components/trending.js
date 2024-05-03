import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { images } from '../assets/Trendings/index';
import { data } from '../assets/Trendings/index';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function Trending() {
  return (
    <div className="mx-auto max-w-screen-xl">
<h1 className="text-2xl my-20 border-b-4 border-[#782373]" style={{width:'150px'}}>Trending Now</h1>

      <Carousel responsive={responsive}
          autoPlay={true}
        autoPlaySpeed={1700} >
        {data.map((item, index) => {
          return (
            <div key={item.key} className="rounded-lg gap-48">
              <img  src={images[`image${item.key}`]} alt="img" className="w-64 h-64 cursor-pointer gap-10" />
              <div className="p-4 ">
                <a href="#" className="block text-xl font-normal gap-10 hover:text-[#782374]">{item.label}</a>
                <p className="mt-2 text-[#782374] gap-10">₹{item.price}</p>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
