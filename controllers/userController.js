import jwt from "jsonwebtoken";
import UserModel from "../models/user.js";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await UserModel.createUser(name, email, password);

    // Generate a JWT token
    const token = jwt.sign({ id: newUser }, process.env.TOKEN_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.getUserByEmail(email);

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isPasswordValid = await UserModel.checkPassword(
      password,
      user.password
    );

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const providedToken = req.headers.authorization;

    if (!providedToken) {
      return res.status(401).json({ message: "Token not provided" });
    }

    // Extract the token from the "Bearer YOUR_TOKEN" format
    const token = providedToken.split(" ")[1];
    console.log(`Token: ${token}`);

    try {
      // Verify the extracted token
      const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
      // You can add additional checks here if needed, like checking if the decoded user id matches the user from the database
      res.json({ message: "Login successful", user: decoded });
    } catch (verifyError) {
      res.status(401).json({ message: "Invalid token" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
