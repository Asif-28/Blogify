import React from "react";

const BlogCard = ({ img, title, desc, authImg, author, date }) => {
  return (
    <div className="max-w-[1280px]  mx-auto mb-[20px]">
      <div className="card max-w-[410px] mb-[1rem] sm:mb-[1.5rem] bg-[#1d1e1f] rounded-md flex flex-col overflow-clip justify-center border border-[##e5eaf3] mx-2 transform origin-bottom transition-transform duration-200 hover:scale-y-[1.02] ">
        <div className="img">
          <img
            src={img}
            alt="blog-img"
            className="min-h-[220px] sm:max-h-[230px] w-[100%] object-cover"
          />
        </div>
        <div className="content p-[1.5rem] max-h-[230px]">
          <h3 className="text-[1.5rem] font-light overflow-hidden leading-6 ">
            {title}
          </h3>
          <p className="mt-[1.5rem] text-[.875rem] ">{desc}</p>
        </div>
        <div className=" flex items-center mt-[3rem] text-[.8em] pl-[1.5rem] leading-5 pb-[2rem]">
          <span className="">
            <img
              src={authImg}
              alt="blog-author"
              className="max-h-[32px] w-[32px] rounded-full"
            />
          </span>
          <div className=" ml-[1em] ">
            <span className="authorname">{author}</span>
            <div className="meta-content">
              <span className="date">{date}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
