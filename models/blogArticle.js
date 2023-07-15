const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Define the schema for your model
const BlogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  //   imageUrl: {
  //     type: String,
  //     required: true,
  //   },
  author: {
    type: String,
    required: true,
  },
});

// Create the model from the schema
export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
