import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  phoneNumber: String,
  companyName: String,
  jobTitle: String,
  department: String,
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
