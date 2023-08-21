
'use client';
import { useEffect, useState } from 'react';
import React from 'react';
// import Image from 'next/image';
import Link from 'next/link';
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
// import Logout from "./Logout";
import { signOut, useSession } from "next-auth/react";

const Logout = () => {
  return <button onClick={signOut}>Logout</button>;
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [show, handleShow] = useState(false);
  const { data: session } = useSession();


  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };


  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className="relative">
      <div
        className="fixed top-2 left-2 backdrop-blur-sm z-50 p-2 mt-1 mr-3 text-sm text-white rounded-lg md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <DensitySmallIcon className='text-2xl' />
      </div>
      
   <div className={`nav ${show && `nav__black`}`}>
      <div className="container justify-between px-3  sm:px-6 flex max-w-[1280px] mx-auto ">
        <div className="logo pl-8 md:pl-0 ">
           <img
            src="./assets/logo1.svg"
            className="h-[40px] sm:h-[45px] min-w-[70px] sm:w-[100px]"
            alt=""
          />
        </div>
        <div className="hidden  md:flex md:flex-1 gap-8 ">
          <div className="flex-1 ">
            <ul className="flex justify-center gap-2 sm:gap-6 text-[17px] sm:text-[20px] sm:font-normal ">
              <li className="sm:hover:border sm:hover-border-[#e5eaf3] sm:px-[0.4rem] font-light sm:w-[70px] sm:text-center ">
                <Link href="/">Home</Link>
              </li>
              <li className="sm:hover:border sm:hover-border-[#e5eaf3] sm:px-[0.4rem] font-light sm:w-[60px] sm:text-center">
                <Link href="./blogs">Blogs</Link>
              </li>
              <li className="sm:hover:border sm:hover-border-[#e5eaf3] sm:px-[0.4rem] font-light sm:w-[90px] sm:text-center">
                <Link href="./profile">Profile</Link>
              </li>
              <li className="sm:hover:border sm:hover-border-[#e5eaf3] sm:px-[0.4rem] font-light sm:w-[150px] sm:text-center">
                <Link href="./myBlogs">CreateBlogs</Link>
              </li>
            </ul>
          </div>
          <div className="login flex-2 text-[17px] sm:text-[20px] sm:font-normal">
            <Link href="./login">
              <li className="list-none font-light border px-[0.2rem] sm:border-[#fff] sm:px-[0.4rem]">
                {session ? <Logout /> : "Login"}
              </li>
            </Link>
          </div>
        </div>
      </div>
    </div>
  
      <div
        style={{
          transform: isMenuOpen ? 'translateX(0)' : 'translateX(-100%)',
          transition: 'all 0.3s ease-out',
        }}
        className="w-2/3 h-screen bg-[#13171E] text-white fixed top-0 left-0 lg:hidden z-20 px-3 py-0 flex flex-row rounded-br-sm font-semibold text-[20px]"
      >
   
      <div className=" flex flex-col mx-auto ">
        <div className="logo ">
          <img
            src="./assets/logo1.svg"
            className="h-[70px] w-[70px]"
            alt=""
          />
        </div>
        <div className="flex flex-col pt-8">
          <div className="">
            <ul className="flex flex-col justify-center gap-4 sm:gap-6 text-[22px] font-normal ">
              <li className="sm:px-[0.4rem] font-light sm:w-[70px]">
                <Link href="/">Home</Link>
              </li>
              <li className="sm:px-[0.4rem] font-light sm:w-[60px]">
                <Link href="./blogs">Blogs</Link>
              </li>
              <li className="sm:px-[0.4rem] font-light sm:w-[90px]">
                <Link href="./profile">Profile</Link>
              </li>
              <li className="sm:px-[0.4rem] font-light sm:w-[150px]">
                <Link href="./myBlogs">CreateBlogs</Link>
              </li>
            </ul>
          </div>
          <div className="login pt-8 font-[24px]">
            <Link href="./login">
              <li className="text-center list-none font-light border px-[0.2rem] sm:border-[#fff] sm:px-[0.4rem]">
                {session ? <Logout /> : "Login"}
              </li>
            </Link>
          </div>
        </div>
      </div>
   
      </div>
    </div>
  );
};

export default Header;