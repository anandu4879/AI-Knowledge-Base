import { registerUser, loginUser } from "../services/authService.js";

export const register = async (req, res, next) => {
  try {
    const user = await registerUser(req.body);
    res.status(201).json({
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const data = await loginUser(email, password);

    res.json({
      message: "Login successful",
      token: data.token,
      user: data.user,
    });
  } catch (error) {
    next(error);
  }
};
