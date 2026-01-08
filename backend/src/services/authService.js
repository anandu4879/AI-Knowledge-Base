import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const registerUser = async (data) => {
  const existingUser = await User.findOne({ email: data.email });
  if (existingUser) {
    throw new Error("User already exists");
  }

  const user = await User.create(data);
  return user;
};


export const loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign(
    { id: user._id },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );

  return { user, token };
};
