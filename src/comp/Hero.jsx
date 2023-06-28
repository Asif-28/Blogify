import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <main>
      <div className="bg-[url('../../public/assets/b.jpg')] bg-center bg-cover min-h-[100vh] brightness-50 relative"></div>
      <div className="detail absolute top-[70%] left-[10%] sm:left-[15%] md:left-[35%] items flex flex-col items-center gap-5 ">
        <input
          type="text"
          className="py-2 sm:py-3 pl-4 border-none pr-4 w-[300px] sm:min-w-[400px] text-black rounded-full font-light text-center"
          placeholder="Share Your Views with Us!! "
        />
        <div className="btn">
          <button className="bg-[#fdef32] text-lg sm:text-xl text-black py-3 sm:py-4 px-8 sm:px-12 rounded-full  font-normal">
            Get Started
          </button>
        </div>
      </div>
    </main>
  );
};

export default Hero;
