import User from "../models/User.js";

export const createUser = async (data) => {
  const user = await User.create(data);
  console.log("Test user created:", user);
  return user;
};
