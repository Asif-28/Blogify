import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#0a0a0a] min-h-[10rem] ">
      <div className="footer sm:flex max-w-[1280px] mx-auto sm:py-6 py-4 pl-4  ">
        <div className="flex-1 flex flex-col gap-1 cursor-pointer mb-4 sm:mb-0">
          <h2 className="text-xl sm:mb-2 cursor-pointer hover:text-[#009191]">
            Help
          </h2>
          <h3 className="font-light cursor-pointer hover:text-[#009191]">
            Help Center
          </h3>
          <h3 className="font-light cursor-pointer hover:text-[#009191]">
            Read terms and Condition
          </h3>
        </div>
        <div className="flex-1 flex flex-col gap-1 cursor-pointer mb-4 sm:mb-0">
          <h2 className=" text-xl sm:mb-2 cursor-pointer hover:text-[#009191]">
            Community
          </h2>
          <h3 className="profile font-light cursor-pointer hover:text-[#009191]">
            Profile
          </h3>
          <Link href="./blogs">
            <h3 className="font-light cursor-pointer hover:text-[#009191]">
              Blog
            </h3>
          </Link>
          <Link href="./myBlogs">
            <h3 className="blog font-light hover:text-[#009191]">
              Create your Blog
            </h3>
          </Link>
        </div>
        <div className="flex-1 flex flex-col gap-1 cursor-pointer mb-4 sm:mb-0">
          <h2 className=" text-xl sm:mb-2 cursor-pointer">Contact Us</h2>
          <h3 className="font-light cursor-pointer hover:text-[#009191]">
            asif.a.7277@gmail.com
          </h3>
          <h3 className="font-light cursor-pointer hover:text-[#009191]">
            +91 686 223 2443
          </h3>
        </div>
      </div>
      <div className="copyright">
        <p className="font-thin text-[14px] text-center p-[0.2rem]">
          Blogify Copyright @2022
        </p>
      </div>
    </div>
  );
};

export default Footer;
