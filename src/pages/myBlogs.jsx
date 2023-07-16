"use client";
import CreateBlog from "@/comp/createBlog/CreateBlog";
import { useSession } from "next-auth/react";
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import SliderImg from "@/comp/SliderImg";

const MyBlogs = () => {
  const router = useRouter();
  const { data: session } = useSession();
  if (session) {
    const { user } = session;
    const name = user.name;
    // console.log(user);
    return (
      <div>
        <CreateBlog author={name} />
      </div>
    );
  } else {
    return (
      <div className="login ">
        <div className="login-first p-3 flex sm:justify-center  bg-[#f0ba15] min-h-[calc(100vh-65px)] mt-[65px] ">
          <div className="login  text-black">
            <SliderImg />

            <h1 className="text-2xl pt-2 font-light">
              Login to create your blogs
            </h1>
            <Link className="" href="./login">
              <button className="min-w-[80px] px-3 bg-[#0a0a0a] text-[#fff] py-2 mt-4 font-thin sm:font-normal hover:text-[#f0ba15]">
                Login
              </button>
            </Link>
            <div className="quotes flex flex-col justify-center items-start gap-4 sm:gap-6 py-8">
              <h1 className="text-2xl ">Quotes~</h1>
              <div className="quote1 bg-[#0a0a0a] text-[#fff] px-4 py-3 rounded-xl">
                <h2 className=" text-base sm:text-xl font-normal mb-2">
                  #1 Brian Clark
                </h2>
                <p className="text-[14px] sm:text-base font-thin">
                  “Don’t focus on having a great blog. Focus on producing a blog
                  that’s great for your readers.”
                </p>
              </div>
              <div className="quote2 bg-[#0a0a0a] text-[#fff] px-4 py-3 rounded-xl">
                <h2 className="text-base sm:text-xl font-normal mb-2">
                  #2 Mike Butcher
                </h2>
                <p className="text-[14px] sm:text-base font-thin">
                  “Blogging is a conversation, not a code.”
                </p>
              </div>
              <div className="quote3 bg-[#0a0a0a] text-[#fff] px-4 py-3 rounded-xl">
                <h2 className="text-base sm:text-xl font-normal mb-2">
                  #3 Ron Dawson
                </h2>
                <p className="text-[14px] sm:text-base font-thin">
                  “The first thing you need to decide when you build your blog
                  is what you want to accomplish with it, and what it can do if
                  successful.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default MyBlogs;
