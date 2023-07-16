"use client";
import CreateBlog from "@/comp/createBlog/CreateBlog";
import { useSession } from "next-auth/react";
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

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
        <div className="login-first pl-4 flex sm:justify-center  bg-[#f0ba15] min-h-[calc(100vh-65px)] mt-[65px]">
          <div className="login  text-black">
            <h1 className="text-2xl pt-2 font-light">
              Login to create your blogs
            </h1>
            <Link className="" href="./login">
              <button className="min-w-[80px] px-3 bg-[#0a0a0a] text-[#fff] py-2 mt-4">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

export default MyBlogs;
