import axios from "axios";
import React, { useState } from "react";

const CreateBlog = ({ author }) => {
  const CLOUD_NAME = "dakd8y8gh";
  const UPLOAD_PRESET = "my_blog_project_asif";
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState(null);

  //   console.log(name);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const imageUrl = await uploadImage();
      console.log(imageUrl);
      const { data } = await axios.post("/api/blog", {
        title,
        desc,
        imageUrl,
        author,
      });

      console.log("register success", data);
    } catch (error) {
      console.log(error);
    }
  };
  const uploadImage = async () => {
    if (!image) return;
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", UPLOAD_PRESET);
    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      const imageUrl = data["secure_url"];
      console.log(imageUrl);
      return imageUrl;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="wrapper ">
        <form
          action="onSubmit"
          className="text-black flex flex-col m-[100px] justify-center gap-6 max-w-[800px] mx-auto bg-[#1d1e1f] sm:p-10 sm:rounded-md px-3 py-6 "
        >
          <h2 className="text-[#e5eaf3] text-2xl sm:text-2xl md:text-3xl font-light text-center">
            Create Blogs
          </h2>
          <div className="input flex flex-col text-white gap-2">
            <label
              htmlFor="title"
              className="text-[#e5eaf3] text-base sm:text-xl font-light"
            >
              Enter The Title
            </label>
            <input
              className="text-[#000000] px-2 py-2 sm:py-3 rounded-md border-none"
              value={title}
              type="text"
              placeholder="Text"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="text flex flex-col text-white gap-2">
            <label
              htmlFor="desc"
              className="text-base sm:text-xl font-light text-[#e5eaf3] "
            >
              Enter The Description Of The Text
            </label>
            <textarea
              value={desc}
              className="text-[#000000] px-2 py-3 rounded-md min-h-[140px] border-none"
              placeholder="Description"
              onChange={(e) => {
                setDesc(e.target.value);
              }}
            />
          </div>
          <div className="file flex flex-col text-white gap-2 ">
            <label
              htmlFor="image"
              className=" text-base font-thin text-[#e5eaf3]"
            >
              Upload The Image
            </label>
            <input
              className="text-[#fff] font-light"
              type="file"
              id="image"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <button
            onClick={handleSubmit}
            className="bg-[#fff] px-3 py-[.5rem] sm:py-2 text-base sm:text-xl font-light rounded-md md:hover:font-normal mb-3"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
