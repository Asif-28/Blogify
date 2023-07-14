import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#0a0a0a] min-h-[10rem] ">
      <div className="footer sm:flex max-w-[1280px] mx-auto sm:py-6 py-4 pl-3 ">
        <div className="flex-1 flex flex-col gap-1 cursor-pointer mb-4 sm:mb-0">
          <h2 className="text-xl sm:mb-2">Help</h2>
          <h3 className="font-light">Help Center</h3>
          <h3 className="font-light">Read terms and Condition</h3>
        </div>
        <div className="flex-1 flex flex-col gap-1 cursor-pointer mb-4 sm:mb-0">
          <h2 className=" text-xl sm:mb-2">Community</h2>
          <h3 className="profile font-light">Profile</h3>
          <Link href="./blogs">
            <h3 className="font-light">Blog</h3>
          </Link>
          <h3 className="blog font-light">Create your Blog</h3>
        </div>
        <div className="flex-1 flex flex-col gap-1 cursor-pointer mb-4 sm:mb-0">
          <h2 className=" text-xl sm:mb-2">Contact Us</h2>
          <h3 className="font-light">asif.a.7277@gmail.com</h3>
          <h3 className="font-light">+91 686 223 2443</h3>
        </div>
      </div>
      <div className="copyright">
        <p className="font-thin text-[14px] text-center p-[0.2rem]">
          Logo Copyright @2022
        </p>
      </div>
    </div>
  );
};

export default Footer;
