import Blog from "../../../models/blogArticle";
// import { NextRequest, NextResponse } from "next/server";

import dbConnect from "../../../config/dbConnect";
dbConnect();

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { title, desc, author, imageUrl, category } = req.body;

    try {
      const existingBlog = await Blog.findOne({ title });

      if (existingBlog) {
        return res.status(400).json({ error: "Blog already exists" });
      }

      const newBlog = new Blog({
        title,
        desc,
        imageUrl,
        author,
        category,
      });

      const savedBlog = await newBlog.save();

      res.json({
        message: "Blog saved successfully",
        success: true,
        data: savedBlog,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
