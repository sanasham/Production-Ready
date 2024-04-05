import mongoose from "mongoose";
import Post from "./post.interface";

const AddressSchema = new mongoose.Schema({
  city: { type: String },
  country: { type: String },
  street: { type: String },
});
const postSchema = new mongoose.Schema({
  author: { ref: "User", type: mongoose.Schema.Types.ObjectId },
  title: String,
  content: String,
});

const postModel = mongoose.model<Post & mongoose.Document>("Post", postSchema);

module.exports = postModel;
