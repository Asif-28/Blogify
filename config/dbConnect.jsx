import mongoose from "mongoose";
const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) return;
  mongoose.connect(process.env.DB_URI);
  console.log("mongo connected from config");
};
export default dbConnect;
