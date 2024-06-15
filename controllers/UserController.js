// controllers/UserController.js
import User from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const generateToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email }, "your_secret_key", { expiresIn: "1h" });
};

export const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      email,
      password: hashedPassword,
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error in registerUser:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne(email);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user);
    res.status(200).json({ token });
  } catch (error) {
    console.error("Error in loginUser:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
