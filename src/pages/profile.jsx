import React, { useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import { useSession } from "next-auth/react";
import axios from "axios";
import Link from "next/link";
import Loader from "@/comp/Loader";

const Profile = () => {
  const [author, setAuthor] = useState([]);
  const [loading, setLoading] = useState(true);
  const session = useSession();
  let count = 0;

  useEffect(() => {
    const GetData = async () => {
      try {
        const { data } = await axios.get("./api/data");
        // console.log(data);
        setAuthor(() => data);
        setLoading(false);
      } catch (error) {
        console.error(error.message);
        throw new Error(error);
      }
    };
    GetData();
  }, []);
  // console.log(session);
  if (loading) {
    return (
      <>
        <Loader />;
      </>
    );
  } else {
    // console.log(author.data);

    return (
      <div>
        <div className="userDetails details flex flex-col mt-[80px] items-center bg-[#f56c6c] py-10 px-4 sm:py-14 ">
          <div className="max-w-[1280px] mx-auto">
            <h1 className="text-4xl sm:text-5xl mb-1 font-light text-[#000] tracking-wide ">
              GREETINGS!!
            </h1>
            <h3 className="text-xl sm:text-3xl md:text-4xl font-light text-[#000]">
              You have arrived at your personalized profile page.
            </h3>
            <div className="name-email sm:mt-10 mt-5 py-6">
              <h3 className="text-base sm:text-2xl md:text-3xl font-light mb-3">
                User Information
              </h3>
              <h3 className="text-[14px] sm:text-base md:text-[1.2rem] font-thin">
                Name: {session.data.user?.name}
              </h3>
              <h3 className="text-[14px] sm:text-base md:text-[1.2rem] font-thin">
                Email: {session.data.user?.email}
              </h3>
            </div>
          </div>
        </div>
        <div className="userBLog">
          <h1 className="text-2xl sm:text-4xl md:text-5xl pt-5 pb-4 sm:pt-8 sm:pb-6 text-center  font-light">
            My Blogs
          </h1>
          {author.data.map((item, index) => {
            // console.log(item.author);
            // console.log(session.data.user);
            if (item.author === session.data.user.name) {
              count++;
              return (
                <div key={index} className="">
                  <div className=" md:max-w-[1280px] md:mx-auto sm:mb-10 mb-6 px-2 ">
                    <div className="article flex flex-col justify-center items-center bg-[#0a0a0a] p-4 rounded-xl">
                      <div className="top  flex flex-col justify-center">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl text-center mb-5 font-thin">
                          {item.title}
                        </h1>
                        <div className="img ">
                          <img
                            className="md:max-w-[700px] max-h-[500px] object-cover w-[100vw] rounded-xl mb-5 "
                            src={item.imageUrl}
                            alt="blog-related-image "
                          />
                        </div>
                      </div>
                      <div className="bottom ">
                        <p className=" text-[14px] sm:text-[18px] font-light leading-[1.5] tracking-wide md:max-w-[1000px] justify-start py-4">
                          {item.desc}
                        </p>
                        <h3 className="float-right py-4">
                          Author: {item.author}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              );
            } else {
              // return null;
            }
          })}
        </div>
        {count ? null : (
          <div className="flex flex-col items-center py-5 gap-8 pb-6 sm:pb-8 md:pb-10">
            <h1 className="text-xl sm:text-2xl font-light">No blog Exists</h1>
            <Link href="./myBlogs">
              <button className="bg-[#ffd558] px-3 py-2 sm:px-4 sm:py-3 text-[#000] font-light text-[14px] sm:text-[18px] hover:font-normal ">
                Create Your Blog Now
              </button>
            </Link>
          </div>
        )}
      </div>
    );
  }
};

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (session && session.user === undefined) {
    session.user = null;
  }
  if (!session) {
    return {
      redirect: {
        destination: "./login",
        permanent: false,
      },
    };
  }
  console.log(session);

  return {
    props: { session: session },
  };
}

// export async function getServerSideProps(context) {
//   return requireAuthentication(context, (session) => {
//     return {
//       props: { session: session },
//     };
//   });
// }
export default Profile;
