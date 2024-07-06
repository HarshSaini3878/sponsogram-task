'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';

const Carousel2 = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1} // Display one slide at a time
      breakpoints={{
        // Responsive breakpoints
        640: {
          slidesPerView: 1.5, // Display 1.5 slides per view on screens wider than 640px
        },
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="flex items-center justify-around flex-col gap-10">
            <div className="flex flex-col items-center justify-center gap-4">
              <Image
                src={item.imageUrl}
                alt="Description of the image"
                width={300}
                height={300}
                objectFit='cover'
                priority // Use priority to preload the images
              />
              <div className="text-xl font-semibold">
                {item.mainHeading}
              </div>
              <div className="font-thin">
                {item.subHeading}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel2;

const data = [
  {
    imageUrl: "/images/section31.png",
    mainHeading: "Data Analytics",
    subHeading:
      "Here you can handle projects together with team virtually",
  },
  {
    imageUrl: "/images/section32.png",
    mainHeading: "Security and Privacy",
    subHeading:
      "No need to worry about storage because we provide storage up to 2 TB",
  },
  {
    imageUrl: "/images/section33.png",
    mainHeading: "Personal Assistance",
    subHeading:
      "We execute our strategy using the latest digital marketing tools and techniques.",
  },
];
