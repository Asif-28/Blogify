import CreateBlog from "@/comp/createBlog/CreateBlog";
import { useSession } from "next-auth/react";
import React from "react";
import { useRouter } from "next/router";
const MyBlogs = () => {
  const { data: session } = useSession();
  const router = useRouter();
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
    router.push("./login");
    return;
  }
};

export default MyBlogs;
