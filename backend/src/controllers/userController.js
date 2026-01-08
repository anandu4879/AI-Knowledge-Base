import { createUser } from "../services/userService.js";

export const createTestUser = async (req, res, next) => {
  try {
    const user = await createUser({
      name: "Test User",
      email: "test@example.com",
      password: "123456",
    });

    res.json(user);
  } catch (error) {
    next(error);
  }
};
