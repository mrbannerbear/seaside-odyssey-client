"use client";

import AOS from 'aos';
import 'aos/dist/aos.css'
import { useState } from "react";
import Menu from "./Menu";

AOS.init()

const Navbar = () => {
  const [burgerState, setBurgerState] = useState(false);

  return (
    <>
      {burgerState && (
        <div className="fixed inset-0 z-50 overflow-hidden" data-aos="slide-left">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-red-50/90 z-50 shadow transition-transform duration-300 transform translate-x-full md:translate-x-0">
           {<div className="p-4">
              <button
                className="text-gray-700 focus:outline-none"
                onClick={() => setBurgerState(false)}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>}
            <Menu/>
          </div>
        </div>
      )}

      <nav className="p-4 md:px-12 md:py-6 absolute w-full h-fit z-40">
        <div className="container mx-auto flex justify-between items-center">
            <div></div>
          <div className="flex items-center">
            <img src="logo.png" alt="Logo" className="h-20" />
          </div>

          <div>
            <button
              className="text-white focus:outline-none"
              onClick={() => setBurgerState(!burgerState)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
