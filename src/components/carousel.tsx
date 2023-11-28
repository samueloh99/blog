"use client";

import { useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import { slides } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function Carousel() {
  return (
    <div className="flex flex-col max-w-[1440px] w-full m-auto px-20 justify-center items-center">
      <h1 className="font-bold text-3xl mb-20">
        A dose of inspiration,
        <br />
        whenever you need it.
      </h1>
      <div className="flex flex-row gap-5 mb-5 w-full justify-start items-center">
        <p className="text-lg font-bold">Popular now</p>
        <p className="text-lg">See all</p>
      </div>
      <div className="w-full flex">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {slides.map((item, key) => {
            return (
              <SwiperSlide
                key={key}
                className="mb-10"
                style={{ height: "300px" }}
              >
                <div className="flex flex-col relative overflow-hidden rounded-md cursor-pointer">
                  <Image
                    src={item.link}
                    alt="like"
                    width={400}
                    height={700}
                    className="rounded-md"
                  />
                  {/* Blurred overlay div */}
                  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                  {/* Content on top of the blurred overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-5 gap-5">
                    <h1 className="text-2xl font-bold">{item.title}</h1>
                    <h1 className="text-md font-bold">{item.time}</h1>
                    {/* ... other content */}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <Button
        variant={"destructive"}
        className="w-[150px] h-[60px] font-bold uppercase text-base mt-10"
      >
        Ver todos
      </Button>
    </div>
  );
}
