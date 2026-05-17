"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const banners = [
  {
    image: "/assets/banner1.jpeg",
    title: "Share Your Idea Now",
    desc: "Turn your ideas into reality and connect with people worldwide.",
  },
  {
    image: "/assets/banner2.jpeg",
    title: "Let's Explore New Ideas Today ",
    desc: "New day new idea. Add ideas and explore more",
  },
  {
    image: "/assets/banner3.jpeg",
    title: "Let's Show Your Creativity",
    desc: "Create new ideas and share it now. Creativity has no limits",
  },
];

const Banner = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{ delay: 7000 }}
      loop
    >
      {banners.map((banner, index) => (
        <SwiperSlide key={index}>
          <div
            className="h-150 bg-cover bg-center flex items-center justify-center text-white"
            style={{
              backgroundImage: `url(${banner.image})`,
            }}
          >
            <div className="text-center max-w-3xl">
              <h1 className="text-7xl font-bold mb-5">
                {banner.title}
              </h1>

              <p className="text-2xl mb-5">
                {banner.desc}
              </p>

              <button className="bg-cyan-600 px-5 py-3 uppercase hover:cursor-pointer box:hover:before box:hover:after box:hover box:before box:after box ">
                Explore Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;