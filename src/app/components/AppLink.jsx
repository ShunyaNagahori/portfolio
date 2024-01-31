'use client'
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const AppLink = (props) => {

  const { name, link, githubLink, images, description } = props;

  return (
    <div className='rounded-xl border h-96 my-2 border-gray-300'>
      <div className='h-4/6 border-b'>
        <Swiper
          className='rounded-t-xl h-full'
          modules={[Pagination]}
          pagination={{ clickable: true }}
          loop={true}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} alt={index}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div>
        <a href={link} className={link != null ? 'hover:opacity-40' : undefined}>
          <p className='text-xl font-bold text-center mt-2'>{name}</p>
          <p className='text-sm px-5 py-2'>
            {description}<br />
            {link === null && (
              <span className='text-xs text-gray-400'>現在サイトは非公開になっています</span>
            )}
          </p>
        </a>
      </div>
    </div>
  )
}

export default AppLink
