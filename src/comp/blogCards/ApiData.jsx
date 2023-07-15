import axios from "axios";
import { useEffect, useState } from "react";

function BloggerPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from the Blogger API
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const apiKey = "AIzaSyBSOQh5CsGAmayQUzWgsyDw37i5WXF6Q4M";
      const blogId = "2399953";
      const response = await axios.get(
        "https://www.googleapis.com/blogger/v3/blogs/2399953?key=AIzaSyBSOQh5CsGAmayQUzWgsyDw37i5WXF6Q4M"
      );
      setPosts(response);
      console.log(response.data.posts.selfLink);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  return (
    <div>
      <h1>My Blog Posts</h1>

      {/* {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))} */}
    </div>
  );
}

export default BloggerPosts;
