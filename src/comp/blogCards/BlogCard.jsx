import React from "react";

const BlogCard = () => {
  return (
    <div className="max-w-[1280px]  mx-auto mb-[20px]">
      <div className="card max-w-[410px] bg-[#1d1e1f] flex flex-col justify-center border border-[##e5eaf3] ">
        <div className="img">
          <img
            src="https://jina-ai-gmbh.ghost.io/content/images/2023/06/Blog-images--9-.png"
            alt="blog-img"
          />
        </div>
        <div className="content p-[1.5rem] ">
          <h3 className="text-[1.5rem] font-light overflow-hidden leading-6 ">
            Making Visual Vocal: SceneXplain's Impact on
          </h3>
          <p className="mt-[1.5rem] text-[.875rem] ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae
            vitae alias accusantium ipsa dignissimos consectetur aspernatur nam
            expedita tempora voluptates.
          </p>
        </div>
        <div className=" flex  items-center text-[.8em] pl-[1.5rem] leading-5 pb-[2rem]">
          <span className="">
            <img
              src="https://jina-ai-gmbh.ghost.io/content/images/2022/09/alex.jpg"
              alt="blog-author"
              className="max-h-[32px] w-[32px] rounded-full"
            />
          </span>
          <div className=" ml-[1em]">
            <span className="authorname">Alex Cary</span>
            <div className="meta-content">
              <span className="date">23 July 2023</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
