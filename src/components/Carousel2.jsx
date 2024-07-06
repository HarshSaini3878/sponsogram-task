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
      mainHeading: "Data Analytics",
      subHeading:
        "Here you can handle projects together with team virtually",
    },
    {
      imageUrl: "/images/Strategy.png",
      mainHeading: "Security and Privacy",
      subHeading:
        "No nedd to worry about storage because we provide storage up to 2 TB",
    },
    {
      imageUrl: "/images/execute.png",
      mainHeading: "Personal Assistance",
      subHeading:
        "We execute our strategy using the latest digital marketing tools and techniques.",
    },
    {
      imageUrl: "/images/measure.png",
      mainHeading: "Measurement",
      subHeading:
        "We always provide useful informatin to make it easier for you every day",
    },
  ];
  