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
    <div className="min-h-screen">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper min-h-[50vh]"
      >
        {destinations.map(destination => (<SwiperSlide className="min-h-[50vh]">
          <div className="max-w-md mx-auto rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src={destination.image}
              alt={destination.name}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{destination.name}</div>
              <p className="text-gray-700 text-base">
                {destination.description}
              </p>
              <p className="text-gray-600 text-sm mt-2">
                Year: {destination.year}
              </p>
            </div>
            <div className="px-6 py-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                More Info
              </button>
            </div>
          </div>
        </SwiperSlide>))}
      </Swiper>
    </div>
  );
};

export default Destinations;
