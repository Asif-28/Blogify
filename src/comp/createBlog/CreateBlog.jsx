import axios from "axios";
import { useSession } from "next-auth/react";

import React, { useState } from "react";
import { useRouter } from "next/router";
const CreateBlog = ({ name }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState(null);
  const { data: session } = useSession;
  //   console.log(name);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/blog", {
        title,
        desc,
        // image,
      });

      console.log("register success", data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="wrapper ">
        <h2>Create Blogs</h2>
        <form
          action="onSubmit"
          className="text-black flex flex-col m-[100px] justify-center gap-6 "
        >
          <div className="input flex flex-col text-white">
            <label htmlFor="">Enter the title</label>
            <input
              className="text-[#000000]"
              value={title}
              type="text"
              placeholder="text"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="text flex flex-col text-white">
            <label htmlFor="desc">Enter the description of the text</label>
            <textarea
              value={desc}
              className="text-[#000000]"
              placeholder="Desc"
              onChange={(e) => {
                setDesc(e.target.value);
              }}
            />
          </div>
          <div className="file flex flex-col text-white">
            <label htmlFor="image">upload the image</label>
            <input
              className="text-[#000000] "
              type="file"
              id="image"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <button onClick={handleSubmit} className="bg-[#fff] px-3 py-2">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
