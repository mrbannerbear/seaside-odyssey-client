"use client";
import { useEffect, useState } from "react";

const Features = () => {
  useEffect(() => {
    fetch("/data/features.json")
      .then((res) => res.json())
      .then((data) => setFeatures(data))
      .catch((err) => console.log(err));
  }, []);

  const [ features, setFeatures ] = useState([]);

  return (
    <div className="h-max bg-red-50/50 pt-6 pb-12 sm:px-4">
        <h2 className="text-3xl text-red-900 py-2 text-center pb-4">Included in Our Cruises</h2>
        <div className=" flex flex-wrap justify-center gap-5">
        {features.map((each) => (
        <div className="w-44 bg-red-50 rounded overflow-hidden shadow-lg text-center h-28">
          {/* <img className="w-full" src={each.logo} alt={each.title} /> */}
          <div className="px-6 py-4">
            <div className="text-red-900 text-xl mb-2 hover:cursor-pointer hover:border-b-[1.5px] pb-1">{each.title}</div>
            {/* <p className="text-gray-700 text-base">{each.description}</p> */}
          </div>
        </div>
      ))}
        </div>
    </div>
  );
};

export default Features;
