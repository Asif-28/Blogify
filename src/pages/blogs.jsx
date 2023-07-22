import axios from "axios";
import React, { useEffect, useState } from "react";

function Blogs() {
  const [blogIdData, setblogIdData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const GetData = async () => {
      try {
        const { data } = await axios.get("./api/data");
        setblogIdData(() => data);
        setIsLoading(false);
        // return <Blogs data={data} />;
      } catch (error) {
        console.error(error.message);
        throw new Error(error);
      }
    };
    GetData();
  }, []);
  // console.log(blogIdData);
  return (
    <div>
      {isLoading ? (
        <p className="text-center pt-[70px]">Loading...</p>
      ) : (
        <BlogData data={blogIdData} />
      )}
    </div>
  );
}
const BlogData = ({ data }) => {
  console.log(data.data);
  const dataItems = data.data;
  console.log(dataItems.length);
  return (
    <div className="mt-[80px]">
      {dataItems.map((item, index) => {
        return (
          <div key={index} className="">
            <div className=" md:max-w-[1280px] md:mx-auto sm:mb-10 mb-6 px-2 ">
              <div className="article flex flex-col justify-center items-center bg-[#0a0a0a] sm:py-8 sm:px-4 p-4 rounded-xl">
                <div className="top  flex flex-col justify-center">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl text-center mb-5 font-thin">
                    {item.title}
                  </h1>
                  <div className="img ">
                    <img
                      className="md:max-w-[900px] max-h-[600px] object-cover w-[100vw] rounded-xl mb-5 "
                      src={item.imageUrl}
                      alt="blog-related-image "
                    />
                  </div>
                </div>
                <div className="bottom ">
                  <p className="font-mono text-[14px] sm:text-[18px] font-light leading-[1.5] tracking-wide md:max-w-[1000px] justify-start py-4">
                    {item.desc}
                  </p>
                  <h3 className="float-right py-4">Author: {item.author}</h3>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Blogs;
