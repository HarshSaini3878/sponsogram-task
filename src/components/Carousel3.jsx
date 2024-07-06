'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';

const Carousel3 = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={2}
      centeredSlides={true} // Center the slides
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      initialSlide={1} 
    >
      {data.map((item, index) => (
        <SwiperSlide key={index} className='flex items-center justify-center min-h-20  '>
          <div className="w-full min-h-24 flex items-center justify-center">
            <div className="cards bg-customGreen w-48 h-60 rounded-md text-black flex items-center justify-center">
              <div className="w-[85%] h-[70%] font-semibold text-center">
                {item.subHeading}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel3;

const data = [
  {
    imageUrl: "/images/section31.png",
    mainHeading: "Data Analytics",
    subHeading:
      "Our platform provides an easy and effective way for sponsors to find diverse sponsorship opportunities.",
  },
  {
    imageUrl: "/images/section32.png",
    mainHeading: "Security and Privacy",
    subHeading:
      "Our platform provides an easy and effective way for sponsors to find diverse sponsorship opportunities.",
  },
  {
    imageUrl: "/images/section33.png",
    mainHeading: "Personal Assistance",
    subHeading:
      "Our platform provides an easy and effective way for sponsors to find diverse sponsorship opportunities.",
  },
];
