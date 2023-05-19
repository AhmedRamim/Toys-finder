import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";



import "./ImageGallery.css";
import img1 from '../../../../public/img1.gif';
import img2 from '../../../../public/img2.gif';
import img3 from '../../../../public/img3.gif';
import img4 from '../../../../public/img4.gif';
import img5 from '../../../../public/img5.gif';
import img6 from '../../../../public/img6.gif';
// import required modules
import { Pagination } from "swiper";
const ImageGallery = () => {
    return  (
        <div className="my-20">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            Pagination={{
              clickable: true,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img6} alt="" /></SwiperSlide>
            <div className="swiper-scrollbar"></div>
          </Swiper>
        </div>
      );
};

export default ImageGallery;






