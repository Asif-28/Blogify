import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <main>
      <div className="bg-[#009191]  flex items-start flex-col gap-6 sm:gap-10 min-h-[65vh] sm:min-h-[70vh] justify-center px-5   sm:pl-28 ">
        <h1 className="text-6xl sm:text-8xl">Stay Curious.</h1>
        <div className="details text-[18px] sm:text-2xl tracking-wider ">
          <p className="">Discover new stories,thinking,exciting blogs</p>
          <p>Post your own blog</p>
        </div>
        <div className="btn text-[14px] sm:text-base text-white hover:text-[#009191] font-light bg-[#141414] px-3 py-2 sm:px-5 sm:py-3">
          Explore About Us
        </div>
      </div>
      <div className="text-center mt-[5%] sm:mt-[3%] flex flex-col items-center gap-5 sm:gap-8">
        <input
          type="text"
          className="py-2 sm:py-3 pl-4 border-none pr-4 w-[300px] sm:min-w-[400px] text-black rounded-full font-light text-center "
          placeholder="Share Your Views with Us!! "
        />
        <div className="btn">
          <button className="bg-[#009191] bg-transparent border border-[#009191]  whitespace-nowrap text-lg sm:text-xl py-3 sm:py-4 px-8 sm:px-12 rounded-full  font-normal text-[#e5eaf3]">
            Get Started
          </button>
        </div>
      </div>
    </main>
  );
};

export default Hero;
