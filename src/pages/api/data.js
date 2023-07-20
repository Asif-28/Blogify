import Blog from "../../../models/blogArticle";

import dbConnect from "../../../config/dbConnect";
dbConnect();

export default async function handler(req, res) {
  await dbConnect();

  try {
    // Fetch data from the database
    const data = await Blog.find();
    // console.log(data);

    res.status(200).json({ data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}
