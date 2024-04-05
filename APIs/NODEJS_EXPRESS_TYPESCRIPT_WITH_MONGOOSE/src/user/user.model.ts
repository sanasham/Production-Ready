import mongoose from "mongoose";
import User from "./user.interface";

const AddressSchema = new mongoose.Schema({
  city: { type: String },
  country: { type: String },
  street: { type: String },
});
const userSchema = new mongoose.Schema({
  address: AddressSchema,
  email: { type: String, required: true, unique: true },
  firstName: { type: String },
  lastName: { type: String },
  password: { type: String, get: (): undefined => undefined },
});
userSchema.virtual("fullName").get(function () {
  return this.firstName + " " + this.lastName;
});
userSchema.virtual("post", {
  ref: "Post",
  localField: "_id",
  foreignField: "author",
});

const userModel = mongoose.model<User & mongoose.Document>("User", userSchema);

module.exports = userModel;
