"use client";
import { useState } from "react";

const Navbar = () => {
  const [burgerState, setBurgerState] = useState(false);

  return (
    <>
      {burgerState && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white z-50 shadow">
            <div className="p-4">
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
            </div>
            <div className="py-6">
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Home</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">About</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Services</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Contact</a>
            </div>
          </div>
        </div>
      )}

      <nav className="p-4 md:pr-12 absolute w-full h-fit">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src="logo.png" alt="Logo" className="h-44" />
          </div>

          <div>
            <button
              className="text-white focus:outline-none"
              onClick={() => setBurgerState(true)}
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
