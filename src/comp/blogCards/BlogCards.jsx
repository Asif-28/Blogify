import React from "react";
import BlogCard from "./BlogCard";
const data = [
  {
    id: 1,
    img: "https://jina-ai-gmbh.ghost.io/content/images/2023/06/Blog-images--9-.png",
    title: "Making Visual Vocal: SceneXplain's Impact on",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius maxim   venenatis velit vel aug tellus et just aliquet sed diam et inter parturient",
    authImg: "https://jina-ai-gmbh.ghost.io/content/images/2022/09/alex.jpg",
    author: "Alex Cary",
    date: "25 July 2023",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1682687981907-170c006e3744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    title: "Making Visual Vocal: SceneXplain's Impact on",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius maxim   venenatis velit vel aug tellus et just aliquet sed diam et inter parturient",
    authImg: "https://jina-ai-gmbh.ghost.io/content/images/2022/09/alex.jpg",
    author: "Alex Cary",
    date: "25 July 2023",
  },
  {
    id: 3,
    img: "https://jina-ai-gmbh.ghost.io/content/images/2023/06/Blog-images--9-.png",
    title: "Making Visual Vocal: SceneXplain's Impact on",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius maxim   venenatis velit vel aug tellus et just aliquet sed diam et inter parturient",
    authImg: "https://jina-ai-gmbh.ghost.io/content/images/2022/09/alex.jpg",

    author: "Alex Cary",
    date: "25 July 2023",
  },
  {
    id: 4,
    img: "https://jina-ai-gmbh.ghost.io/content/images/2023/06/Blog-images--9-.png",
    title: "Making Visual Vocal: SceneXplain's Impact on",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius maxim   venenatis velit vel aug tellus et just aliquet sed diam et inter parturient",
    authImg: "https://jina-ai-gmbh.ghost.io/content/images/2022/09/alex.jpg",

    author: "Alex Cary",
    date: "25 July 2023",
  },
  {
    id: 5,
    img: "https://jina-ai-gmbh.ghost.io/content/images/2023/06/Blog-images--9-.png",
    title: "Making Visual Vocal: SceneXplain's Impact on",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius maxim   venenatis velit vel aug tellus et just aliquet sed diam et inter parturient",
    authImg: "https://jina-ai-gmbh.ghost.io/content/images/2022/09/alex.jpg",

    author: "Alex Cary",
    date: "25 July 2023",
  },
  {
    id: 6,
    img: "https://jina-ai-gmbh.ghost.io/content/images/2023/06/Blog-images--9-.png",
    title: "Making Visual Vocal: SceneXplain's Impact on",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius maxim   venenatis velit vel aug tellus et just aliquet sed diam et inter parturient",
    authImg: "https://jina-ai-gmbh.ghost.io/content/images/2022/09/alex.jpg",

    author: "Alex Cary",
    date: "25 July 2023",
  },
];
const BlogCards = () => {
  return (
    <div className="container max-w-[1300px] mx-auto">
      <h2 className="text-[2.5rem] text-center py-2 mt-7">Trending</h2>
      <div className="grid sm:grid-cols-3 gap-1 ">
        {data.map((item) => {
          return (
            <BlogCard
              key={item.id}
              img={item.img}
              title={item.title}
              desc={item.desc}
              authImg={item.authImg}
              author={item.author}
              date={item.date}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BlogCards;
