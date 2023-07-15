import CreateBlog from "@/comp/createBlog/CreateBlog";
import { useSession } from "next-auth/react";
import React from "react";

const MyBlogs = () => {
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
    return <div className="error">Please Log in first</div>;
  }
};

export default MyBlogs;
