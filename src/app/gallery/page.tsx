'use client';
import React, { use } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import { Navigation } from "swiper";
const Gallery = () => {
    return(

    <section id="gallery" className=" relative w-full h-fit m-auto bg-white max-[425px]:pb-[100px] min-[499px]:pb-0 sm:pb-0 lg:pb-20 xl:pb-0 min-[1700px]:pb-0 min-[1700px]:h-[1700px] min-[2000px]:h-fit min-[3500px]:h-[2500px] min-[4000px]:h-[3000px]">
          
<div className="Frame57 p-[0px] justify-center items-center px-auto sm:px-auto gap-4 inline-flex max-[499px]:px-6 w-full mb-3">
      <img className="w-[42px] sm:w-auto h-auto" src="/bl.png" />
      <div className="header-1" style={{ fontFamily: 'DM Serif Text' }}>Gallery</div>
      <img className="w-[42px] sm:w-auto h-auto" src="/br.png" />
    </div>
    <div className="flex flex-wrap justify-center ">
      <Swiper
          slidesPerView={1.25}
          spaceBetween={6}
          centeredSlides={true}
          // loop={true}
          // navigation={true}
          modules={[ Navigation]}
          className="mySwiper  "
          breakpoints={{
            350: {
              slidesPerView: 1.5,
              spaceBetween: 15,
            },
            400: {
              slidesPerView: 1.75,
              spaceBetween: 15,
             
            },
           
            1000: {
              slidesPerView: 2.5,
              spaceBetween: 15,
              
             
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 5,
              

            },
          }}
          
          >
          <SwiperSlide>
            <img
              className="h-[260px] w-[260px] sm:h-[430px] sm:w-[360px] md:w-[480px] mx-auto px-2  object-cover "
              src="/gallery1.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-[260px] w-[260px] sm:h-[430px] sm:w-[360px] md:w-[480px]  mx-auto px-2 object-cover"
              src="/gallery2.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-[260px] w-[260px] sm:h-[430px] sm:w-[360px] md:w-[480px]  mx-auto px-2 object-cover"
              src="/gallery3.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-[260px] w-[260px] sm:h-[430px] sm:w-[360px] md:w-[480px]  mx-auto px-2 object-cover"
              src="/gallery2.png"
              alt=""
            />
          </SwiperSlide>
          ...
        </Swiper>
      </div>
  <div className="w-full py-3 px-4 min-[1700px]:px-8 items-center">
      <div className=" h-0 max-[3000px]:pb-[56.25%] max-[3500px]:pb-0">
        <iframe
          className="top-0 w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[700px] 2xl:h-[900px] min-[2560px]:h-[1300px] min-[3500px]:h-[1200px] min-[4000px]:h-[1800px] "
          src="https://www.youtube.com/embed/079v_9FSf8M"
          title="YouTube video"
          allowFullScreen
        />
      </div>
    </div>
  
       </section>
)
}
export default Gallery;