"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

const Destinations = () => {
    useEffect( () => {
        fetch("/data/destinations.json")
        .then(res => res.json())
        .then(data => setDestinations(data))
        .catch(err => console.log(err))
    } , [])
    const [destinations, setDestinations] = useState([])

  return (
    <div className="min-h-screen bg-red-50/50 pt-12">
        <h2 className="text-center text-3xl text-red-900">Destinations for 2024, 2025, 2026</h2>
        <div className="hidden lg:block px-12 pt-6 pb-12">
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper hidden lg:fixed h-[650px]"
      >
        {destinations.map(destination => (<SwiperSlide>
          <div className="max-w-md mx-auto shadow-lg">
            <img
              className="w-full"
              src={destination.image}
              alt={destination.name}
            />
            <div className="px-6 py-4">
              <div className="text-2xl mb-2 text-red-900">{destination.name}</div>
              <p className="text-gray-700 text-base h-[160px]">
                {destination.description}
              </p>
              <p className="text-gray-600 text-sm mt-2">
                {destination.year}
              </p>
            </div>
            <div className="px-6 py-4">
              <button className="text-red-900 underline">
                More Info
              </button>
            </div>
          </div>
        </SwiperSlide>))}
      </Swiper>
        </div>


      <div className="lg:hidden">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper min-h-screen"
      >
        {destinations.map(destination => (<SwiperSlide>
          <div className="max-w-md mx-auto shadow-lg">
            <img
              className="w-full"
              src={destination.image}
              alt={destination.name}
            />
            <div className="px-6 py-4">
              <div className="text-2xl mb-2 text-red-900">{destination.name}</div>
              <p className="text-gray-700 text-base h-[170px]">
                {destination.description}
              </p>
              <p className="text-gray-600 text-sm mt-2">
                {destination.year}
              </p>
            </div>
            <div className="px-6 py-4">
              <button className="text-red-900 underline ">
                More Info
              </button>
            </div>
          </div>
        </SwiperSlide>))}
      </Swiper>
      </div>
    </div>
  );
};

export default Destinations;
