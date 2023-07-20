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
  return (
    <div>
      {data.data.map((item, index) => {
        console.log(item);
        return (
          <div key={index}>
            {/* <div key={item.id}>{item.author}</div>
            <div key={item.id}>{item.author}</div> */}
          </div>
        );
      })}
    </div>
  );
};
export default Blogs;
// <div>
//   <div className="container mt-[80px] max-w-[1080px] mx-auto ]">
//     <div className="article flex gap-4 bg-[#0a0a0a] p-4 rounded-xl ">
//       <div className="left pr-12">
//         <h1 className="text-2xl ">
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam,
//           rem.
//         </h1>
//         <p className="">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum cum
//           odit totam ea quia dignissimos enim rem at illum corporis.
//         </p>
//       </div>
//       <div className="right">
//         <div className="img">
//           <img
//             src="https://miro.medium.com/v2/resize:fill:250:168/1*RAthRIkRXYs8anYtioLvIw.png"
//             alt=""
//           />
//         </div>
//       </div>
//     </div>
//     <div className="article flex gap-4 bg-[#0a0a0a] p-4 rounded-xl mt-[.5rem]">
//       <div className="left pr-12">
//         <h1 className="text-2xl ">
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam,
//           rem.
//         </h1>
//         <p className="">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum cum
//           odit totam ea quia dignissimos enim rem at illum corporis.
//         </p>
//       </div>
//       <div className="right">
//         <div className="img">
//           <img
//             src="https://miro.medium.com/v2/resize:fill:250:168/1*RAthRIkRXYs8anYtioLvIw.png"
//             alt=""
//           />
//         </div>
//       </div>
//     </div>
//     <div className="article flex gap-4 bg-[#0a0a0a] p-4 rounded-xl mt-[.5rem]">
//       <div className="left pr-12">
//         <h1 className="text-2xl ">
//           Lorem ipsum dolor sit amet annn consectetur, adipisicing elit.
//           Totam, rem.
//         </h1>
//         <p className="">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum cum
//           odit totam ea quia dignissimos enim rem at illum corporissf.
//         </p>
//       </div>
//       <div className="right">
//         <div className="img">
//           <img
//             src="https://miro.medium.com/v2/resize:fill:250:168/1*RAthRIkRXYs8anYtioLvIw.png"
//             alt=""
//           />
//         </div>
//       </div>
//     </div>
//     <div className="article flex gap-4 bg-[#0a0a0a] p-4 rounded-xl mt-[.5rem]">
//       <div className="left pr-12">
//         <h1 className="text-2xl ">
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam,
//           rem.
//         </h1>
//         <p className="">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum cum
//           odit totam ea quia dignissimos enim rem at illum corporis.
//         </p>
//       </div>
//       <div className="right">
//         <div className="img">
//           <img
//             src="https://miro.medium.com/v2/resize:fill:250:168/1*RAthRIkRXYs8anYtioLvIw.png"
//             alt=""
//           />
//         </div>
//       </div>
//     </div>
//     <div className="article flex gap-4 bg-[#0a0a0a] p-4 rounded-xl mt-[.5rem]">
//       <div className="left pr-12">
//         <h1 className="text-2xl ">
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam,
//           rem.
//         </h1>
//         <p className="">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum cum
//           odit totam ea quia dignissimos enim rem at illum corporis.
//         </p>
//       </div>
//       <div className="right">
//         <div className="img">
//           <img
//             src="https://miro.medium.com/v2/resize:fill:250:168/1*RAthRIkRXYs8anYtioLvIw.png"
//             alt=""
//           />
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
