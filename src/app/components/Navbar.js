"use client";
import { useState } from "react";

const Navbar = () => {
  const [burgerState, setBurgerState] = useState(false);

  return (
    <>
      {burgerState && <div className="w-full h-full absolute bg-white z-40">hello
      <button onClick={() => setBurgerState(false)}>
        x
      </button>
      </div>}

      <nav class="p-4 md:pr-12 absolute w-full h-fit">
        <div class="container mx-auto flex justify-between items-center">
          <div class="flex items-center">
            <img src="logo.png" alt="Logo" class="h-44" />
          </div>

          <div>
            <button
              class="text-white focus:outline-none"
              onClick={() => setBurgerState(true)}
            >
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
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
