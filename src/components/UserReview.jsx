import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../App.css';

import {Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

const UserReview = ({reviewData}) => {
    return (
        <>
          <div data-aos="fade-up" data-aos-duration="500" className='bg-[#a38ffd]/50 rounded-md mb-24'>

          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
    
            pagination={true}
            modules={[Autoplay, EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {
                reviewData?.map((review, idx) => <SwiperSlide key={idx}>
                    <div className="border h-full w-full bg-white/90 rounded-md border-gray-200 shadow-md p-4">
                        <div className="flex items-center gap-6 mb-4">
                            <img src={review.imgURL} alt="" className="max-w-16 h-16 rounded-full"/>
                            <div className=''>
                                <h4 className='text-lg font-semibold'>{review.name}</h4>
                                <p className='text-black/65'>{review.profession}</p>
                            </div>
                        </div>
                        <h4 className=" text-black/75 my-3">{review.review}</h4>
                        <p className="text-lg font-semibold text-gray-800 my-3">Rating: ⭐⭐⭐⭐⭐ {review.rating}</p>
                    </div>
                </SwiperSlide>)
            }
          </Swiper>
          </div>
        </>
      );
};

export default UserReview;

