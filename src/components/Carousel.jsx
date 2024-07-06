'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';

const Footer = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
     { data.map((item, index) => (
             <SwiperSlide key={index}> <div
                
                className="flex items-center justify-around gap-10"
              >
                <div className="w-52 h-24 rounded-lg bg-customGreen flex items-center justify-center">
                  <div className="w-[50%] h-[50%]">
                    <Image
                      src={item.imageUrl}
                      alt="Description of the image"
                      width={3}
                      height={3}
                      layout="responsive"
                    />
                  </div>
                </div>
                <div className="">
                  <div className="text-xl font-semibold">
                    {item.mainHeading}
                  </div>
                  <div className=" font-thin">{item.subHeading}</div>
                </div>
              </div></SwiperSlide>
            ))}
    
      
    </Swiper>
  );
};

export default Footer;

const data = [
    {
      imageUrl: "/images/Discover.png",
      mainHeading: "Discovery",
      subHeading:
        "We meet with you to learn about your business, your goals, and your target audience.",
    },
    {
      imageUrl: "/images/Strategy.png",
      mainHeading: "Strategy",
      subHeading:
        "We develop a customized marketing strategy that is based on your unique needs and goals.",
    },
    {
      imageUrl: "/images/execute.png",
      mainHeading: "Execution",
      subHeading:
        "We execute our strategy using the latest digital marketing tools and techniques.",
    },
    {
      imageUrl: "/images/measure.png",
      mainHeading: "Measurement",
      subHeading:
        "We track the results of our campaigns so that we can make adjustments as needed.",
    },
  ];
  