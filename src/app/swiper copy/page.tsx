'use client';
import React, { use } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import { Navigation } from "swiper";


const Isi = () => {
  return (
    <div className="pb-5 sm:pb-10 bg-[#394867]  sm:min-h-[550px] mt-24 md:mt-28 flex flex-col align-middle justify-center ">

      <div className="xsm:flex mt-[-35px]  ">
      <Swiper
          slidesPerView={1.25}
          spaceBetween={6}
          centeredSlides={true}
        //   loop={true}
          navigation={true}
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
            <div className="mt-[-350px] md:mt-[-390px] ">
                <div className="w-full h-[490px] md:h-[850px] lg:h-[1409px] bg-cyan-800" />
                <img className="w-full mt-[-360px] md:mt-[-740px] lg:mt-[-1180px] h-[370px] md:h-[750px] lg:h-[1176px] "
                    src="bunga.png" />
            </div>
            <div>
                <div className="text-center mt-[-355px] md:mt-[-650px] lg:mt-[-1000px] text-white text-[20px] md:text-[35px] lg:text-[64px] leading-loose"
                    style={{ fontFamily: 'DM Serif Text' }}>Love Story</div>
                <img className="w-[210px] md:w-[450px] lg:w-[918px] h-[120.22px] md:h-[250px] lg:h-[474px] m-auto object-cover"
                    src="Rectangle 11.png" />
                <div className="w-full mt-[10px] md:mt-[15px] lg:mt-[40px] text-center text-white text-[14px] md:text-[20px] lg:text-[48px] leading-3"
                    style={{ fontFamily: 'DM Serif Text' }}>Title</div>
                <div className="w-full pl-6 pr-6 md:pr-32 md:pl-32 text-center md:mt-[10px] text-white text-[10px] md:text-[15px] lg:text-[32px] leading-3 md:leading-5 lg:leading-9"
                    style={{ fontFamily: 'Antic Didone' }}>Lorem ipsum dolor sit amet. Et laborum iure aut cupiditate
                    nisi ut amet optio in molestiae debitis ut officia cumque qui rerum obcaecati. Sit tenetur
                    necessitatibus est autem molestiae cum dolor ipsa ut dignissimos deserunt ut rerum tempora. Sit
                    dolor repellat ut earum Quis est dignissimos quae est quod autem qui quibusdam nihil! Est ipsa vero
                    in reprehenderit saepe et temporibus iste cum repellendus dicta.</div>
            </div>
            </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-[260px] w-[260px] sm:h-[430px] sm:w-[360px] mx-auto px-2  object-cover "
              src="/gallery1.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-[260px] w-[260px] sm:h-[430px] sm:w-[360px] mx-auto px-2 object-cover"
              src="/gallery2.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-[260px] w-[260px] sm:h-[430px] sm:w-[360px] mx-auto px-2 object-cover"
              src="/gallery3.png"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-[260px] w-[260px] sm:h-[430px] sm:w-[360px] mx-auto px-2 object-cover"
              src="/gallery3.png"
              alt=""
            />
          </SwiperSlide>
          ...
        </Swiper>
      </div>
      {/* <h1 className="xsm:text-2xl text-white text-center mt-[35px] mb-[10px] relative text-[30px] font-bold font-noto">
        
        Undangan Pernikahan Website
        
      </h1> */}
{/*       
      <div className=" sm:grid  lg:grid-cols-3 md:mb-3 sm:p-5 gap-2  mb-4 border">
        <span className=" hidden md:block items-center  px-2 col-span-1 lg:col-span-1 ">
          <hr class="my-6  sm:mx-auto border border-slate-400 lg:my-8" /> </span>
        <h1
          className="text-white md:grid flex text-center items-center justify-center  text-xl sm:text-3xl lg:text-4xl font-noto font-extrabold   md:col-span-6  lg:col-span-1 lg:col-start-  lg:mx-3">
          Undangan Pernikahan Website
        </h1>
        <span className="hidden md:block items-center  px-2 col-span-1  sm:col-start-8 lg:col-start- lg:col-span-1 ">
          <hr class="my-6  sm:mx-auto border border-slate-400" /></span>
      </div>
       */}
      {/* <div className="flex justify-center text-white border">
        <div className="flex  justify-center align-middle my-10 text-secondary border ">
          <div className=" grid sm:grid-cols-8 lg:grid-cols-7 md:flex mb-3 p-5 gap-2 border">
            <span className=" hidden sm:block items-center  px-2 col-span-1 lg:col-span-2 border md:flex-none md:w-36">
              <hr class="my-6  sm:mx-auto border border-slate-400 lg:my-8" /> </span>
            <h1
              className=" grid items-center justify-center text-2xl md:text-3xl lg:text-4xl font-noto font-extrabold  sm:col-start-3  sm:col-span-4 lg:col-span-3  lg:mx-3 text-center border md:grow">
              Undangan Pernikahan Website
            </h1>
            <span
              className="hidden sm:block items-center  px-2 col-span-1  sm:col-start-8 md:flex-none md:w-36 lg:col-start-6 lg:col-span-2 border ">
              <hr class="my-6  sm:mx-auto border border-slate-400" /></span>
          </div>
        </div>
      </div>
      <p className="text-white text-center  mx-5 sm:mb-16 sm:mx-6 text-xs  sm:text-base  ">
        Pastikan undangan pernikahan impianmu dari pastinikah.id. Harga hemat dengan berbagai pilihan tema. Mengundang
        kerabat jadi terasa lebih dekat.
      </p> */}
      {/* <div className="flex justify-center border container m-auto ">
        <div className="flex flex-col justify-center align-middle  text-secondary ">
          <div className=" grid sm:grid-cols-8 lg:grid-cols-7 sm:mb-3 p-5 gap-2 md:flex">
            <span className=" hidden sm:block items-center  px-2 col-span-1   md:flex-none md:w-36  xl:w-64">
              <hr class="my-6  sm:mx-auto border border-slate-400 lg:my-8" /> </span>
            <h1
              className=" grid items-center justify-center text-xl md:text-3xl lg:text-4xl font-noto font-extrabold  sm:col-start-3  sm:col-span-4   lg:mx-3 text-center  md:grow">
              Undangan Pernikahan Website
            </h1>
            <span
              className="hidden sm:block items-center  px-2 col-span-1  sm:col-start-8    md:flex-none md:w-36  xl:w-64">
              <hr class="my-6  sm:mx-auto border border-slate-400" /></span>
          </div>
          <div className="flex justify-center text-center sm:mt-3 mx-6 ">
            <p className="text-secondary text-center  mx-5 sm:mb-16 sm:mx-6 text-xs  sm:text-base  ">
              Pastikan undangan pernikahan impianmu dari pastinikah.id. Harga hemat dengan berbagai pilihan tema.
              Mengundang
              kerabat jadi terasa lebih dekat.
            </p>
          </div>
        </div>
      </div> */}
      <div className=" container m-auto">
        <div className="flex flex-col justify-center align-middle text-secondary">
          <div className=" grid sm:grid-cols-8 lg:grid-cols-7 sm:mb-3 p-5 gap-2 md:flex">
            <span className=" hidden sm:block items-center  px-2 col-span-1   md:flex-none md:w-36  xl:w-1/4">
              <hr className="my-6  sm:mx-auto border border-slate-400 lg:my-8" /> </span>
            <h1
              className=" grid items-center justify-center text-xl md:text-3xl lg:text-4xl font-noto font-extrabold  sm:col-start-3  sm:col-span-4   lg:mx-3 text-center  md:grow">
               Undangan Pernikahan Website
            </h1>
            <span
              className="hidden sm:block items-center  px-2 col-span-1  sm:col-start-8    md:flex-none md:w-36  xl:w-1/4">
              <hr className="my-6  sm:mx-auto border border-slate-400" /></span>
          </div>
          <div className="flex justify-center text-center sm:mt-3 mx-6 ">
            <p className="text-secondary text-center  mx-5 sm:mb-16 sm:mx-6 text-xs  sm:text-base  ">
            Pastikan undangan pernikahan impianmu dari pastinikah.id. Harga hemat dengan berbagai pilihan tema.
              Mengundang
              kerabat jadi terasa lebih dekat.
            </p>
          </div>
        </div>
      </div>

      </div>
  );
};

export default Isi;