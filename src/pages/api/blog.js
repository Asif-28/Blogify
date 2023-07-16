import Blog from "../../../models/blogArticle";
import { NextRequest, NextResponse } from "next/server";

import dbConnect from "../../../config/dbConnect";
dbConnect();

export default async function handler(req, res) {
  if (req.method == "POST") {
    // dbConnect();
    const { title, desc, author, imageUrl } = req.body;
    console.log(req.body);
    const user = await Blog.findOne({ title });
    if (user) {
      res.json({ error: "User already exists" }, { status: 400 });
    }

    const newBlog = new Blog({
      title,
      desc,
      imageUrl,
      author,
    });
    console.log(title, desc);
    const savedBlog = await newBlog.save();
    console.log(savedBlog);
    res.json({
      message: "BLog saved successfully",
      success: true,
    });
  }
}

// export default async function getAllBlogs(req, res) {
//     if (req.method ==GET)
//     {

//     }
// }
