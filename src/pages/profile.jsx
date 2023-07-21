import React, { useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import requireAuthentication from "@/utils/protectRoutes";
import { useSession } from "next-auth/react";
import axios from "axios";

const Profile = () => {
  const [author, setAuthor] = useState([]);
  const session = useSession();
  useEffect(() => {
    const GetData = async () => {
      try {
        const { data } = await axios.get("./api/data");
        setAuthor(() => data);
        console.log(author);
      } catch (error) {
        console.error(error.message);
        throw new Error(error);
      }
    };
    GetData();
  }, []);
  // console.log(session);

  return (
    <div>
      <div className="userDetails details flex flex-col mt-[80px] items-center bg-[#f56c6c] py-8 px-4 sm:py-14 ">
        <div className="max-w-[1280px] mx-auto">
          <h1 className="text-4xl sm:text-5xl mb-1 font-light text-[#000] tracking-wide ">
            GREETINGS!!
          </h1>
          <h3 className="text-xl sm:text-3xl md:text-4xl font-light text-[#000]">
            You have arrived at your personalized profile page.
          </h3>
          <div className="name-email py-6">
            <h3 className="text-base sm:text-2xl md:text-3xl font-thin mb-3">
              User Information
            </h3>
            <h3 className="text-[14px] sm:text-base md:text-[1.2rem] font-light">
              Name: {session.data.user?.name}
            </h3>
            <h3 className="text-[14px] sm:text-base md:text-[1.2rem] font-light">
              Email: {session.data.user?.email}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
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
