import Image from "next/image";
import React from "react";
import Link from "next/link";
import SliderImg from "../slider/SliderImg";

const Hero = () => {
  return (
    <main>
      <div className="wrapper ">
        <div className=" bg-[#009191]  flex md:justify-evenly md:items-center sm:min-h-[80vh]  items-start flex-col md:flex-row gap-6 sm:gap-10 min-h-[65vh]  justify-center px-5  ">
          <div className="left flex flex-col justify-center items-start gap-6 sm:gap-10 mt-10 sm:mt-0">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl ">
              Continue Exploring
            </h1>
            <div className="details text-[18px] sm:text-2xl tracking-wider ">
              <p className="font-light">
                Discover new stories,thinking,exciting blogs
              </p>
              <p className="font-light">Post your own blog</p>
            </div>
            <div className="btn flex flex-col gap-3">
              <Link href="./login">
                <div className="btn text-[14px] sm:text-base text-white hover:text-[#009191] font-light bg-[#141414] px-3 py-2 sm:px-5 sm:py-3 text-center">
                  Get Started
                </div>
              </Link>
              <Link href="./myBlogs">
                <div className="btn text-[14px] sm:text-base text-white hover:text-[#009191] font-light bg-[#141414] px-3 py-2 sm:px-5 sm:py-3 text-center">
                  Create Your Own Story
                </div>
              </Link>
            </div>
          </div>
          <div className="right hidden md:block">
            <SliderImg />
          </div>
        </div>
      </div>
      <div className="text-center mt-[5%] sm:mt-[3%] flex flex-col items-center gap-5 sm:gap-8">
        <input
          type="text"
          className="py-2 sm:py-3 pl-4 border-none pr-4 w-[300px] sm:min-w-[400px] text-black rounded-full font-light text-center "
          placeholder="Share Your Views with Us!! "
        />
        <div className="btn">
          <Link href="#">
            <button className="bg-[#009191] bg-transparent border border-[#009191]  whitespace-nowrap text-lg sm:text-xl py-3 sm:py-4 px-8 sm:px-12 rounded-full  font-normal text-[#e5eaf3]">
              Send Mail !
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Hero;
